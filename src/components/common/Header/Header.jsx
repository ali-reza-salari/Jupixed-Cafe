import {Link} from "react-router"

export default function Header() {
    return (
        <header className={`p-3`}>
            <div className={`text-2xl md:text-3xl`}>
                <Link to={"https://jupixed.ir"} target={"_blank"}>Jupixed </Link>
                <span className={`font-bold`}>Cafe</span>
            </div>
        </header>
    )
}