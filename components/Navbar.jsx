import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
    return (
        <section id="nav-section">
            <nav id="navbar" className="container">
                <Image
                    src="/images/logo.png"
                    alt="Munchies"
                    width={128}
                    height={65}
                />
                <ul id="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>

                <div id="nav-icons">
                    <div>
                        <FiSearch />
                    </div>
                    <div id="cart-icon">
                        <BsHandbag />
                        <p id="count">0</p>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;