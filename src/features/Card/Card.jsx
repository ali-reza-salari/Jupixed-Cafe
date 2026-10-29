import { cardData } from "./../../data/cardData.js"
import PayOrderBox from "./../PayOrderBox/PayOrderBox.jsx"
import OrderBox from "./../PayOrderBox/OrderBox.jsx"
import { useState } from "react"

export default function Card() {
    const [ orders , setOrders ] = useState(cardData)

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
            <div className={`h-100 overflow-y-auto`}>
                {
                    orders.map(newOrder => <OrderBox {...newOrder} /> )
                }
            </div>
            <div>
                <PayOrderBox />
            </div>
        </div>
    )
}