import {menuData} from "../../../data/menuData.js";
import {useParams} from "react-router";

export default function SingelProduct() {
    const { productTitle } = useParams()
    const mainProduct = menuData.find(item => item.name === productTitle);

    return (
        <div className={`w-full mt-3 p-3 md:p-0`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                <span className={` overflow-hidden`}>
                    <img src={mainProduct.imageUrl}
                         className={`w-100 h-100 md:w-150 md:h-150 object-cover rounded-2xl`}
                    />
                </span>
                <span className={`flex items-start justify-center flex-col gap-3 mt-5 md:mt-0`}>
                    <div className={`flex flex-col gap-2 md::gap-3 lg:gap-5`}>
                        <p className={`text-3xl md:text-4xl lg:text-5xl font-bold`}>{mainProduct.name}</p>
                        <p className={`md:text-2xl lg:text-3xl`}>{mainProduct.description}</p>
                        <p className={``}>{mainProduct.category}</p>
                    </div>

                    <div className={`w-full mt-5`}>
                        <button
                            className={`w-full py-2 text-primary bg-secondary text-2xl md:text-3xl font-bold rounded-2xl cursor-pointer`}
                        >
                            Add to Card
                        </button>
                    </div>
                </span>
            </div>
        </div>
    )
}