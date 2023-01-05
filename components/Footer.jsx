import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section id="footer-section">
            <div id="footer" className="container">
                <div className="footer-top">
                    <Image
                        src="/images/WHAT2EAT.png"
                        alt="Munchies"
                        width={118}
                        height={20}
                    />
                    <ul id="nav-links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                    <div id="footer-icons">
                        <FaFacebookSquare />
                        <FaInstagram />
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright @2021 What2Eat</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
