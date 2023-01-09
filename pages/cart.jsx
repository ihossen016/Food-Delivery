import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";
import { remove } from "../store/cartSlice";

const cart = () => {
    const dispatch = useDispatch();
    const cartdata = useSelector(state => state.cart.calculation);
    const cartItems = useSelector(state => state.cart.items);

    const handleRemove = id => {
        dispatch(remove(id));
    };

    return (
        <>
            <Navbar />

            <section id="cart-section" className="container">
                <h2>Your Cart</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Vat</td>
                            <td>Action</td>
                        </tr>

                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.vat}%</td>
                                <td>
                                    <ImCross
                                        className="item-remove"
                                        onClick={() => handleRemove(item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div id="cart-total">
                    <p>Sub-Total: {cartdata.price}</p>
                    <p>Vat: {cartdata.vat}</p>
                    <p>Total: {cartdata.total}</p>
                </div>
            </section>
        </>
    );
};

export default cart;
