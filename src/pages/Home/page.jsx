import {menuData} from "../../data/menuData.js";
import Product from "../../components/common/Product/Product.jsx";

export default function HomePage() {
    return (
        <section>
            {
                menuData.map(item => {
                    return (
                        <Product key={item.id} {...item} />
                    )
                })
            }
        </section>
    )
}