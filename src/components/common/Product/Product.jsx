export default function Product({ name , description , imageUrl , stock , price }) {
    return (
        <div className={`w-full ${stock === "unavailable" ? "opacity-50" : null} `} >
            <div className="flex w-full gap-3 md:gap-5 p-3 rounded-2xl">
                <span className="w-30 h-30 md:w-50 md:h-50 shrink-0 overflow-hidden rounded-xl">
                    <img
                        className="w-full h-full object-cover object-center"
                        src={imageUrl}
                        alt={name}
                    />
                </span>
                <div className="flex min-w-0 flex-1 items-center">
                    <div className="w-full min-w-0 flex flex-col gap-y-3">
                        <div className="text-lg md:text-3xl break-words">
                            <p className={`font-bold`}>{name}</p>
                            <p className="limit-description-line text-sm md:text-base">{description}</p>
                        </div>

                        <div className={`flex items-center justify-between`}>
                            <p>$ {price}</p>
                            <p>{stock}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}