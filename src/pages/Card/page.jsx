import EmptyCard from "./../../features/Card/EmptyCard.jsx"
import {cardData} from "./../../data/cardData.js"
import CardBox from "./../../features/Card/Card.jsx"

export default function Card() {
    return (
        <>
            {
                cardData.length <= 0 ? (
                    <EmptyCard />
                ) : <CardBox />
            }
        </>
    )
}