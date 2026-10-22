import {menuData} from "../../data/menuData.js";
import Product from "../../components/common/Product/Product.jsx";

export default function HomePage() {
    const sortedProducts = menuData.sort((a,b) => {
        return (a.stock === "avalaible") - (b.stock === "unavailable");
    })

    return (
        <section>
            {
                sortedProducts.map(item => {
                    return (
                        <Product key={item.id} {...item} />
                    )
                })
            }
        </section>
    )
}