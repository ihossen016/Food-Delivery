import Image from "next/image";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <section id="nav-section">
            <nav id="navbar" className="container">
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Munchies"
                        width={128}
                        height={65}
                    />
                </Link>

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
                        <Link href="/cart">
                            <BsHandbag />
                        </Link>
                        <p id="count">{cartItems.length}</p>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
