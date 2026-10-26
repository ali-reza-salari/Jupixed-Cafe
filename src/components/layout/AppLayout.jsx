import {Outlet} from "react-router";
import Header from "./../common/Header/Header.jsx"
import {useContext} from "react";
import ThemeContext from "../../contexts/Theme.jsx";

export default function AppLayout() {
    const { theme } = useContext(ThemeContext)

    return <section id={"root"} className={`flex justify-center min-h-dvh text-primary px-3 ${theme === "light" ? "bg-tertiary text-primary" : "bg-primary text-secondary"}`}>
        <div className={`container`}>
            <Header />
            <Outlet />
        </div>
    </section>
}