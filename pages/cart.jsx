import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";
import { remove, clearALL } from "../store/cartSlice";
import { useState } from "react";
import { baseUrl } from "../public/data";
import axios from "axios";
import Link from "next/link";

const cart = () => {
    const orderUrl = `${baseUrl}/order/`;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();
    const cartdata = useSelector(state => state.cart.calculation);
    const cartItems = useSelector(state => state.cart.items);

    const handleRemove = id => {
        dispatch(remove(id));
    };

    const formSubmit = e => {
        e.preventDefault();
        const customer = {
            name: name,
            address: email,
            phone: phone,
        };

        const data = {
            customer: { ...customer },
            calculation: { ...cartdata },
            items: [...cartItems],
        };

        axios
            .post(orderUrl, data, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-user": email,
                },
            })
            .then(response => {
                if (response.status === 201) {
                    setName("");
                    setEmail("");
                    setPhone("");
                    dispatch(clearALL());
                    setActive(true);
                }
            })
            .catch(error => {
                console.log(error);
            });
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
                    <div className="checkout">
                        <form onSubmit={e => formSubmit(e)}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                            <button type="submit">Place Order</button>
                        </form>
                        <Link href="/orders">Show Previous Orders</Link>
                        <p className={`success ${active ? "active" : ""}`}>
                            Order Successfull
                        </p>
                    </div>
                    <div className="price">
                        <p>Sub-Total: {cartdata.price}</p>
                        <p>Vat: {cartdata.vat}</p>
                        <p>Total: {cartdata.total}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default cart;
