import Head from "next/head";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home() {
    return (
        <>
            <Head>
                <title>Munchies</title>
                <meta name="description" content="Food Delivery Service" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <Hero />
                <Products />
                <Blog />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
