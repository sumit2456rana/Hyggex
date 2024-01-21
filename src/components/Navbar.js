import Logo from "./Logo";
import Navigations from "./Navigations";

function Navbar() {
    return (
        <nav className="flex justify-between items-center h-24">
            <Logo />
            <Navigations />
        </nav>
    )
}

export default Navbar;