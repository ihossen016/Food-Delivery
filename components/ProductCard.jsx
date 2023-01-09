import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";

const ProductCard = ({ id, img, title, price, handleCart }) => {
    return (
        <div className="product-card">
            <img src={img} alt={title} width={277} height={250} />
            <div className="product-desc">
                <div className="top">
                    <h4>{title}</h4>
                    <p>BDT {price}</p>
                </div>
                <div className="bottom">
                    <div className="star">
                        <p>
                            <AiFillStar /> 4.7
                        </p>
                        <p>50-79 min</p>
                    </div>
                    <button
                        onClick={() => handleCart(id)}
                        className="add-to-cart"
                    >
                        <FaPlusSquare />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
