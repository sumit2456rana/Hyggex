import { NavLink } from "react-router-dom";

function Navigations() {
    return (
        <div className="flex gap-10 items-center text-text1 text-lg font-medium">
            <NavLink>Home</NavLink>
            <NavLink>Flashcard</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>FAQ</NavLink>
            <button style={{ background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)' }} className="px-10 py-2 rounded-[32px] text-white">Login</button>
        </div>
    )
}

export default Navigations;