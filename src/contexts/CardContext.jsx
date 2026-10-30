import { createContext , useState } from "react";

const CardContext = createContext()

export const CardProvider = ({ children }) => {
    const [ cardItems , setCardItems ] = useState([]);
    const addItems = item => {
        setCardItems(prevItem => [...prevItem , item]);
    }
    const deleteCardItem = (item) => {
        setCardItems(prevItems => {
            return prevItems.filter(carditem => carditem.name !== item);
        })
    }

    return (
        <CardContext.Provider value={{ cardItems , addItems , deleteCardItem }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext