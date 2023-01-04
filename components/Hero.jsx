import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section id="hero-section">
            <div id="hero" className="container">
                <div className="hero-left">
                    <h1>Authentic Home food in UK</h1>
                    <p>
                        What2Eat is a courier service in which authentic home
                        cook food is delivered to a customer.
                    </p>
                    <form>
                        <input type="text" placeholder="Search food you love" />
                        <button>Search</button>
                    </form>
                </div>
                <div className="hero-right">
                    <Image
                        src="/images/cuate.png"
                        alt="cooking"
                        width={520}
                        height={435}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
