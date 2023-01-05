import Image from "next/image";

const Contact = () => {
    return (
        <section id="contact-section">
            <div id="contact" className="container">
                <div className="contact-left">
                    <h3>Do you have a question</h3>
                    <h3>or want to become a seller?</h3>
                    <p>
                        Fill this form and our manager will contact you next 48
                        hours.
                    </p>

                    <form id="contact-form">
                        <div id="name-box">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your e-mail" />
                        </div>
                        <textarea
                            id="msg"
                            name="contact-form"
                            placeholder="Your message"
                            rows="10"
                        ></textarea>
                    </form>
                </div>
                <div className="contact-right">
                    <Image
                        src="/images/delivery.png"
                        alt="delivery"
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
