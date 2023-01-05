import Image from "next/image";

const Blog = () => {
    return (
        <section id="blog-section">
            <div className="container">
                <h3>Our Blog</h3>
                <div id="blogs">
                    <div id="blog-left">
                        <div className="card">
                            <Image
                                src="/images/b1.png"
                                alt="blog img"
                                width={277}
                                height={183}
                            />
                            <div className="desc">
                                <h4>
                                    Most Satisfying Cake decorating Cake ideas{" "}
                                </h4>
                                <p>
                                    Quis hendrerit nibh mauris sed faucibus.
                                    Quis hendrerit nibh mauris sed faucibus.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <Image
                                src="/images/b2.png"
                                alt="blog img"
                                width={277}
                                height={183}
                            />
                            <div className="desc">
                                <h4>
                                    Most Satisfying Cake decorating Cake ideas{" "}
                                </h4>
                                <p>
                                    Quis hendrerit nibh mauris sed faucibus.
                                    Quis hendrerit nibh mauris sed faucibus.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="blog-center">
                        <div className="card">
                            <Image
                                src="/images/b3.png"
                                alt="blog img"
                                width={546}
                                height={421}
                            />
                            <div className="desc">
                                <h4>
                                    Most Satisfying Cake decorating Cake ideas
                                    Most Satisfying Cake
                                </h4>
                                <p>
                                    Quis hendrerit nibh mauris sed faucibus.
                                    Quis hendrerit nibh mauris sed faucibus.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="blog-right">
                        <div className="card">
                            <Image
                                src="/images/b4.png"
                                alt="blog img"
                                width={277}
                                height={183}
                            />
                            <div className="desc">
                                <h4>
                                    Most Satisfying Cake decorating Cake ideas{" "}
                                </h4>
                                <p>
                                    Quis hendrerit nibh mauris sed faucibus.
                                    Quis hendrerit nibh mauris sed faucibus.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <Image
                                src="/images/b5.png"
                                alt="blog img"
                                width={277}
                                height={183}
                            />
                            <div className="desc">
                                <h4>
                                    Most Satisfying Cake decorating Cake ideas{" "}
                                </h4>
                                <p>
                                    Quis hendrerit nibh mauris sed faucibus.
                                    Quis hendrerit nibh mauris sed faucibus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
