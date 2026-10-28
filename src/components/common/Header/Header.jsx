import {Link} from "react-router"
import {useContext} from "react";
import ThemeContext from "../../../contexts/Theme.jsx";
import {FaMoon, FaShoppingBag, FaSun} from "react-icons/fa";

export default function Header() {
    const { theme , toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`p-3`}>
            <div className={`flex items-center justify-between`}>
                <div className={`text-2xl md:text-3xl`}>
                    <Link to={"https://jupixed.ir"} target={"_blank"}>Jupixed </Link>
                    <span className={`font-bold`}>Cafe</span>
                </div>

                <div className={`flex items-center justify-between gap-3`}>
                    <button
                        className={`cursor-pointer`}
                        onClick={toggleTheme}
                    >
                        {
                            theme === "light" ? <FaMoon className={`size-6`} /> : <FaSun className={`size-6`} />
                        }
                    </button>
                    <button className={`hidden md:block`}>
                        <Link to={"/card"}>
                            <FaShoppingBag className={`size-6 cursor-pointer`} />
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}