import {menuData} from "../../data/menuData.js";
import Product from "../../components/common/Product/Product.jsx";
import {useState} from "react";
import NavbarCategory from "../../components/common/NavbarCategory/NavbarCategory.jsx";

export default function HomePage() {
    const [ navbarItem , setNavbarItem ] = useState("All");
    const sortedProducts = menuData.sort((a,b) => {
        return (a.stock === "avalaible") - (b.stock === "unavailable");
    })

    return (
        <section>
            <NavbarCategory navbarItem={navbarItem} onChange={setNavbarItem} />

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