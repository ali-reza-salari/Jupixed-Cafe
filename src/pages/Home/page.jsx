import {menuData} from "../../data/menuData.js";
import Product from "../../components/common/Product/Product.jsx";
import {useState} from "react";
import {categorys} from "../../data/categorys.js";

export default function HomePage() {
    const [ navbarItem , setNavbarItem ] = useState("All");
    const sortedProducts = menuData.sort((a,b) => {
        return (a.stock === "avalaible") - (b.stock === "unavailable");
    })

    return (
        <section>
            <div className={`flex gap-x-3 overflow-x-auto mt-5 scrollbar-none`}>
                {
                    categorys.map(category => (
                        <div key={category.id} className={`flex items-start justify-center shrink-0 pb-2 ${category.name === navbarItem ? "border-b-3 border-secondary" : null}`}>
                            <button className={`shrink-0 ${category.name === navbarItem ? "bg-secondary" : null} font-bold px-3 py-1 rounded-xl`} onClick={() => setNavbarItem(category.name)}>
                                {category.name}
                            </button>
                        </div>
                    ))
                }
            </div>

            {
                sortedProducts.filter(product => product.category === navbarItem || navbarItem === "All").map(item => {
                    return (
                        <Product key={item.id} {...item} />
                    )
                })
            }
        </section>
    )
}