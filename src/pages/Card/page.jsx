import { useContext } from "react"
import EmptyCard from "./../../features/Card/EmptyCard.jsx"
import CardContext from "./../../contexts/CardContext.jsx"
import CardBox from "./../../features/Card/Card.jsx"

export default function Card() {
    const { cardItems } = useContext(CardContext)

    return (
        <>
            {
                cardItems.length <= 0 ? (
                    <EmptyCard />
                ) : <CardBox />
            }
        </>
    )
}