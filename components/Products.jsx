import axios from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { baseUrl } from "../public/data";

const Products = () => {
    const url = `${baseUrl}/products/`;
    const [products, setProducts] = useState([]);
    const fetcher = async url => await axios.get(url).then(res => res.data);
    const { data, error } = useSWR(url, fetcher);

    useEffect(() => {
        if (data) setProducts(data);
    }, [data, setProducts]);

    return (
        <section id="products-section">
            <div className="container">
                <h3>Home Kitchen</h3>
                <div className="filter-btns">
                    <button id="btn1">All</button>
                    <button id="btn2">button</button>
                    <button id="btn3">Free delivery</button>
                    <button id="btn4">New</button>
                    <button id="btn5">Coming</button>
                </div>
                <select name="cat" id="cat">
                    <option value="">Filters</option>
                    <option value="">Type 1</option>
                    <option value="">Type 2</option>
                    <option value="">Type 3</option>
                </select>

                <div className="products">
                    {products &&
                        products.map(product => (
                            <ProductCard
                                key={product.id}
                                title={product.name}
                                img={product.image}
                                price={product.price}
                            />
                        ))}
                </div>

                <div id="more">
                    <button>+ Load More...</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
