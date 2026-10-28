import { categorys } from "../../../data/categorys.js";
import { useContext } from "react";
import ThemeContext from "../../../contexts/Theme.jsx";

export default function NavbarCategory({ navbarItem , onChange }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`flex gap-x-3 overflow-x-auto mt-5 scrollbar-none`}>
            {
                categorys.map(category => (
                    <div key={category.id} className={`flex items-start justify-center shrink-0 pb-2 ${category.name === navbarItem ? theme === "light" ? "border-b-3 border-primary" : "border-b-3 border-secondary" : theme === "light" ? "border-b-0" : "border-b-0"}`}>
                        <button className={`shrink-0 ${category.name === navbarItem ? theme === "light" ? "bg-primary text-secondary" : "bg-secondary text-primary" : theme === "light" ? "bg-transparent text-primary" : "bg-transparent text-secondary" } font-bold px-3 py-1 rounded-xl cursor-pointer`}
                                onClick={() => onChange(category.name)}
                        >
                            {category.name}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}