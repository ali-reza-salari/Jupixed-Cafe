import { BiX } from "react-icons/bi";

export default function OrderBox({ name , imageUrl , price , setPrice , numberOfOrders , onDelete }) {
    return (
        <div className={`w-full`}>
            <div className="flex w-full gap-3 md:gap-5 p-3 rounded-2xl">
                <span className="w-20 md:w-30 h-20 md:h-30 shrink-0 overflow-hidden rounded-xl relative">
                    <button className={`absolute cursor-pointer`} onClick={onDelete}>
                        <BiX className={`size-6`} />
                    </button>
                    <img
                        className="w-full h-full object-cover object-center"
                        src={imageUrl}
                        alt={name}
                    />
                </span>
                <div className="flex min-w-0 flex-1 items-center">
                    <div className="w-full min-w-0 flex items-center justify-between">
                        <div className="text-lg md:text-3xl break-words">
                            <p className={`font-bold`}>{name}</p>
                        </div>

                        <div className="text-lg md:text-3xl break-words">
                            <p className={`font-medium`}>x{numberOfOrders}</p>
                        </div>

                        <div className={`flex items-center justify-between`}>
                            <p>$ {price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}