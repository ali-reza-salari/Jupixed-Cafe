import { cardData } from "./../../data/cardData.js"
import PayOrderBox from "./../PayOrderBox/PayOrderBox.jsx"
import OrderBox from "./../PayOrderBox/OrderBox.jsx"
import { useId , useState } from "react"

export default function Card() {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
            <div className={`h-150 overflow-y-auto`}>
                {
                    cardData.map(card => {
                        return (
                            <OrderBox {...card} />
                        )
                    })
                }
            </div>
            <div>
                <PayOrderBox />
            </div>
        </div>
    )
}