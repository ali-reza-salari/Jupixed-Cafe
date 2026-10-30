import { menuData } from "../../../data/menuData.js";
import { useParams } from "react-router";
import { useContext , useState } from "react";
import ThemeContext from "./../../../contexts/Theme.jsx"
import CardContext from "./../../../contexts/CardContext.jsx"
import { FaPlus , FaMinus } from "react-icons/fa";

export default function SingleProduct() {
    const { productTitle } = useParams()
    const { theme } = useContext(ThemeContext);
    const { cardItems , addItems } = useContext(CardContext)
    const [ numOfOrders , setNumOfOrders ] = useState(1);
    const mainProduct = menuData.find(item => item.name === productTitle);
    const [ ordersPrice , setOrdersPrice ] = useState(mainProduct.price);
    const increaseOrder = () => {
        setNumOfOrders(prev => prev + 1);
        setOrdersPrice(prev => Number((prev + mainProduct.price).toFixed(2)));
    }
    const decreaseOrder = () => {
        if (numOfOrders <= 1) {
            setNumOfOrders(1);
            setOrdersPrice(mainProduct.price);
        } else {
            setNumOfOrders(prev => Number(prev - 1));
            setOrdersPrice(prev => Number(prev - mainProduct.price).toFixed(2));
        }
    }

    const addToCard = () => {
        addItems({
            imageUrl: mainProduct.imageUrl,
            name: mainProduct.name,
            price: ordersPrice,
            numberOfOrders: numOfOrders,
        })
    }

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
                        <p className={`${theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary"} w-fit px-2 py-1 rounded-2xl`}>{mainProduct.category}</p>
                    </div>

                    <div className={`flex items-center justify-between w-full text-2xl lg:text-3xl font-bold mt-5`}>
                        <span className={`flex items-center`}>
                            <button className={`cursor-pointer w-10 h-10 rounded-md ${theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary"} flex items-center justify-center`} onClick={decreaseOrder}>
                                <FaMinus />
                            </button>

                            <p className={`text-center w-20`}>{numOfOrders}</p>

                            <button className={`cursor-pointer w-10 h-10 rounded-md ${theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary"} flex items-center justify-center`} onClick={increaseOrder}>
                                <FaPlus />
                            </button>
                        </span>

                        <span>
                            ${ordersPrice}
                        </span>
                    </div>

                    <div className={`w-full mt-5`}>
                        <button
                            className={`w-full py-2 ${theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary"} text-2xl md:text-3xl font-bold rounded-2xl cursor-pointer`}
                            onClick={addToCard}
                        >
                            Add to Card
                        </button>
                    </div>
                </span>
            </div>
        </div>
    )
}