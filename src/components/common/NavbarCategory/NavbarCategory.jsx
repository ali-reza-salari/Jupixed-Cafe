import { categorys } from "../../../data/categorys.js";

export default function NavbarCategory({ navbarItem , onChange }) {
    return (
        <div className={`flex gap-x-3 overflow-x-auto mt-5 scrollbar-none`}>
            {
                categorys.map(category => (
                    <div key={category.id} className={`flex items-start justify-center shrink-0 pb-2 ${category.name === navbarItem ? "border-b-3 border-secondary" : null}`}>
                        <button className={`shrink-0 ${category.name === navbarItem ? "bg-secondary" : null} font-bold px-3 py-1 rounded-xl`} onClick={() => onChange(category.name)}>
                            {category.name}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}