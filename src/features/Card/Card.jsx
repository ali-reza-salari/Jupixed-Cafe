import PayOrderBox from "./../PayOrderBox/PayOrderBox.jsx"
import OrderBox from "./../PayOrderBox/OrderBox.jsx"
import { useState , useContext } from "react"
import CardContext from "./../../contexts/CardContext.jsx"

export default function Card() {
    const { cardItems } = useContext(CardContext)

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
            <div className={`h-100 overflow-y-auto`}>
                {
                    cardItems.map(newOrder => <OrderBox {...newOrder} /> )
                }
            </div>
            <div>
                <PayOrderBox />
            </div>
        </div>
    )
}