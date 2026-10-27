import { NavLink } from "react-router"
import { IoHome , IoHomeOutline } from "react-icons/io5";
import { RiShoppingCart2Fill , RiShoppingCart2Line } from "react-icons/ri";
import { useContext } from "react";
import ThemeContext from "../../../contexts/Theme.jsx";

export default function BottomNavbar() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`fixed bottom-0 left-0 right-0 flex justify-center ${theme === "light" ? "bg-tertiary" : "bg-primary"} md:hidden`}>
            <div className={`container flex items-center justify-around`}>
                <NavLink to={"/"} className={`flex items-center justify-center py-4`}>
                    {
                        ({ isActive }) => {

                            return (
                                <button className={`cursor-pointer`}>
                                    {isActive ? <IoHome className={`size-6`} /> : <IoHomeOutline className={`size-6`} />}
                                </button>
                            )
                        }
                    }
                </NavLink>

                <NavLink to={"/card"} className={`flex items-center justify-center py-4`}>
                    {
                        ({ isActive }) => {
                            return (
                                <button className={`cursor-pointer`}>
                                    {isActive ? <RiShoppingCart2Fill className={`size-6`} /> : <RiShoppingCart2Line className={`size-6`} />}
                                </button>
                            )
                        }
                    }
                </NavLink>
            </div>
        </div>
    )
}