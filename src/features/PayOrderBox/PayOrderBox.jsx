import { useState , useEffect } from 'react';
import { cardData , orderPrice } from "./../../data/cardData.js"

export default function PayOrderBox() {
    const totalPrice = Number(orderPrice.reduce((total , price) => total + price, 0).toFixed(2))
    const taxRate = Number((totalPrice * 0.1).toFixed(2))
    const finalPrice = (totalPrice + taxRate).toFixed(2)

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

                <button className={`w-full py-2 text-primary bg-secondary text-2xl md:text-3xl font-bold rounded-2xl cursor-pointer`}>Pay</button>
            </div>
        </div>
    )
}