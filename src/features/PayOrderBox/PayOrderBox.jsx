import { useContext } from 'react';
import CardContext from "./../../contexts/CardContext.jsx"
import ThemeContext from "../../contexts/Theme.jsx";

export default function PayOrderBox() {
    const { theme } = useContext(ThemeContext);
    const { cardItems } = useContext(CardContext)
    const getPrices = cardItems.map(({ price }) => price);
    const totalPrice = Number(getPrices.reduce((total , price) => total + price, 0).toFixed(2))
    const taxRate = Number((totalPrice * 0.1).toFixed(2))
    const finalPrice = Number(totalPrice + taxRate).toFixed(2)

    return (
        <div>
            <p className={`text-3xl font-bold`}>Your Order</p>

            <div className={`p-3 flex flex-col gap-y-5`}>
                <div className={`flex items-center justify-between`}>
                    <span>Total price</span>
                    <span>${totalPrice}</span>
                </div>

                <div className={`flex items-center justify-between`}>
                    <span>+ Tax</span>
                    <span>${taxRate}</span>
                </div>

                <div className={`flex items-center justify-between font-medium text-2xl`}>
                    <span>Final Price</span>
                    <span>${finalPrice}</span>
                </div>

                <button className={`w-full py-2 ${theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary"} text-2xl md:text-3xl font-bold rounded-2xl cursor-pointer`}>Pay</button>
            </div>
        </div>
    )
}