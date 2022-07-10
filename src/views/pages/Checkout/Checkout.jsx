
import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";
import { Link } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa";
import { useState } from "react";

const Checkout
 = () => {
    const [displayScreen, setdisplayScreen] = useState('information')
    return (  
    <MainLayout>
         <Wrapper>
            <div className="checkout">
                <div className="checkout-input">
                    <h3>Onibata Mall</h3>
                    <nav className="">
                        <div className="nav">
                            <div className="">
                                <Link to="/cart" className="checkout-link">Cart <FaGreaterThan className="icon"/></Link>
                                <span className={`checkout-link ${displayScreen === 'information' && 'link'} `}  onClick={() => setdisplayScreen('information')}>Information <FaGreaterThan className="icon"/></span>
                                <span className={`checkout-link ${displayScreen === 'shipping' && 'link'} `}  onClick={() => setdisplayScreen('shipping')}>Shipping <FaGreaterThan className="icon"/></span>
                                <span className="checkout-link">Payment </span>
                            </div>
                        </div>
                    </nav>
                     {  displayScreen === 'information' ?
                        <div>
                    <span>
                    <span className="user">
                    <h4>Adekoya Adeola </h4>
                    <h6> ( morenkency@gmail.com)</h6>
                    </span>
                    </span>
                    <span className="news">
                        <input type="checkbox" name="" id="" />
                        <p>Email me with news and offers </p>
                    </span>
                    <h5>Information</h5>
                    <form>
                        <input type="text" name="country" id="" placeholder="Country/Region" />
                        <div className="name">
                            <input type="text" required  name="fname" id="" placeholder="First name" />
                            <input type="text" required name="lname" id="" placeholder="Last name" />
                        </div>
                        <input type="text" name="address" id=""  placeholder="Address"/>
                        <div className="city">
                            <input type="text" required name="city" id="" placeholder="City"/>
                            <input type="text" required name="state" id="" placeholder="State"/>
                            <input type="text" required name="" id="" placeholder="Postal Code"/>
                        </div>
                        <input type="tel" required name="phone" id=""  placeholder="Phone number"/>
                        <div className="btn">
                            <button className="btn-primary">
                                Continue Shipping
                            </button>
                            <button className="btn-next">
                            <Link to="/cart" className="cart">Return to cart</Link>
                            </button>
                        </div>
                    </form>
                    </div> :
                    <div>
                    <h5>Shipping Address</h5>
                    <form>
                        <article>
                        <input type="text" name="contact" id="" placeholder="Contact" />
                        <p className="change"> Change</p>
                        </article>
                        <article>
                        <input type="text" name="ship" id="" placeholder="  Ship to" />
                        <p className="change"> Change</p>
                        </article>
                        <section className="city">
                            <label htmlFor="ship-methop"></label>
                            <article>
                            <input type="text" required name="ship-method" id="" placeholder="Standard Shipping"/>
                            <p className="price">N5000</p>
                            </article>
                        </section>
                        <div className="btn">
                            <button className="btn-primary">
                                Continue Payment
                            </button>
                            <button className="btn-next">
                            <Link to="/cart" className="cart">Return to information</Link>
                            </button>
                        </div>
                    </form>
                    </div>}
                </div>
                <div className="order-bg">
                    <div className="order">
                        <div className="order-img">
                            <img src="/assets/product3.png" alt="" />
                        </div>
                        <div className="order-detail">
                            <div>
                                <h6>Monkstrap shoe</h6>
                                <span className="size">
                                    Eur 45
                                </span>
                            </div>
                            <p className="price">25000</p>
                        </div>
                    </div>
                    <div className="order">
                        <div className="order-img">
                            <img src="/assets/product3.png" alt="" />
                        </div>
                        <div className="order-detail">
                            <div>
                                <h6>Monkstrap shoe</h6>
                                <span className="size">
                                    Eur 45
                                </span>
                            </div>
                            <p className="price">25000</p>
                        </div>
                    </div>
                    <div className="sub-total">
                        <h5>Subtotal</h5>
                        <p className="price">25000</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    </MainLayout>
    );
}
 
export default Checkout
;