import {Outlet} from "react-router";

export default function AppLayout() {
    return <section id={"root"} className={`flex justify-center min-h-dvh`}>
        <div className={`container`}>
            <Outlet />
        </div>
    </section>
}