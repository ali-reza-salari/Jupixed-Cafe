import {Outlet} from "react-router";
import Header from "./../common/Header/Header.jsx"

export default function AppLayout() {
    return <section id={"root"} className={`flex justify-center min-h-dvh text-primary px-3`}>
        <div className={`container`}>
            <Header />
            <Outlet />
        </div>
    </section>
}