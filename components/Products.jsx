import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";

const Products = () => {
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
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <Image
                            src="/images/b1.png"
                            alt="name"
                            width={277}
                            height={250}
                        />
                        <div className="product-desc">
                            <div className="top">
                                <h4>Title</h4>
                                <p>$14</p>
                            </div>
                            <div className="bottom">
                                <div className="star">
                                    <p>
                                        <AiFillStar /> 4.7
                                    </p>
                                    <p>50-79 min</p>
                                </div>
                                <button className="add-to-cart">
                                    <FaPlusSquare />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="more">
                    <button>+ Load More...</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
