import { Link } from "react-router"
import { useContext } from "react";
import ThemeContext from "./../../contexts/Theme.jsx"

export default function EmptyCard() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`flex items-center justify-center h-[75dvh] flex-col gap-y-5`}>
            <div className={`w-40 md:w-50 h-40 md:h-50`}>
                {
                    theme === "light" ? (
                        <img className={`w-full h-full object-cover`} src={"/public/img/Cup-of-coffee-light_mode.png"} alt=""/>
                    ) : (
                        <img className={`w-full h-full object-cover`} src={"/public/img/Cup-of-coffee-dark_mode.png"} alt=""/>
                    )
                }
            </div>
            <div>
                <p className={`text-center font-bold text-3xl`}>nothing in your Card.</p>
                <p className={`text-center text-2xl`}>do you wana order something ?</p>
            </div>

            <Link to={"/"}>
                <button className={`px-4 py-2 rounded-2xl cursor-pointer font-bold ${theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary"}`}>
                    Order something
                </button>
            </Link>
        </div>
    )
}