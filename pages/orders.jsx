import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { baseUrl } from "../public/data";

const orders = () => {
    const orderUrl = `${baseUrl}/order/`;
    const [email, setEmail] = useState("");
    const [orders, setOrders] = useState();

    const formSubmit = e => {
        e.preventDefault();

        axios
            .get(orderUrl, {
                headers: {
                    "Content-Type": "application/json",
                    "x-access-user": email,
                },
            })
            .then(response => {
                setOrders(response.data);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        console.log(orders);
    };

    return (
        <>
            <Navbar />
            <section id="orders-section">
                <div className="checkout">
                    <form onSubmit={e => formSubmit(e)}>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Show Order</button>
                    </form>
                </div>

                {orders && (
                    <div className="container">
                        <table>
                            <tbody>
                                <tr>
                                    <td>#</td>
                                    <td>Date</td>
                                    <td>Name</td>
                                    <td>Phone</td>
                                    <td>Quantity</td>
                                    <td>Price</td>
                                </tr>

                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{order.createdAt.slice(0, 10)}</td>
                                        <td>{order.customer.name}</td>
                                        <td>{order.customer.phone}</td>
                                        <td>{order.items.length}</td>
                                        <td>{order.calculation.total} BDT</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </>
    );
};

export default orders;
