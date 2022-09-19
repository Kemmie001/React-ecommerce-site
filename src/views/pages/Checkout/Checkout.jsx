
import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";
import { Link } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {  getTotals } from "../../../features/cartSlice";
import { PaystackButton } from 'react-paystack'
// import {toast} from 'react-toastify';
// import axios from 'axios'


const Checkout
 = () => {
    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
        // getOrders()
    }, [products, dispatch])
    const [displayScreen, setdisplayScreen] = useState('information')
    // const [orders, setorders] = useState([])
    // const getOrders = async (e) => {
    //     e.preventDefault()
    //     const user = localStorage.getItem("onibata-user");
    //     const user_details = JSON.parse(user)
    //     const userData = {
    //        username: user_details.username,
    //        auth_token: user_details.token,
    //     }

    //       try {
    //         const res = await axios.post('https://loftywebtech.com/onibata/api/get-orders', userData)
    //         if(res.data.status === 'success'){
    //             setorders(res.data.message.orders)
    //         } else {
    //           toast.error("This shoe is out of Stock", {
    //         position: "bottom-left",
    //        });
    //       }
    //       } catch (err) {
    //         toast.error(err.data.message, {
    //             position: "bottom-left",
    //            });
    //       }
    //   }
    const publicKey = "pk_test_fa9202b0e0d7f1aa2bdb13e0da5631701b9d6a37"

  const amount = (products.cartTotalAmount * 100)// Remember, set in kobo!

  const [email, setEmail] = useState("")

  const [name, setName] = useState("")

  const [phone, setPhone] = useState("")
  const componentProps = {

    email,

    amount,

    metadata: {

      name,

      phone,

    },

    publicKey,

    text: "Pay Now",

    onSuccess: () =>

      alert("Thanks for doing business with us! Come back soon!!"),

    onClose: () => {
        setEmail("")
        setName("")
        setPhone("")
    },

  }
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
                                <span className={`checkout-link ${displayScreen === 'payment' && 'link'} `}  onClick={() => setdisplayScreen('payment')}>Payment </span>
                            </div>
                        </div>
                    </nav>
                     {  displayScreen === 'information' &&
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
                    </div> }
                    { displayScreen === 'shipping' &&
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
                    {
                       displayScreen === 'payment'  && 
                       <div>
                       <h5>Payment Details</h5>
                       <div className="container">
                           <article>
                           <input type="text" name="Name" value={name} id="" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                           </article>
                           <article>
                           <input type="email" name="email" value={email} id="" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
                           </article>
                           <article>
                           <input type="tel" name="phone" value={phone} id="" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} />
                           </article>
                           <div className="btn">
                           <PaystackButton className="btn-primary" {...componentProps} />
                           </div>
                       </div>
                       </div>
                    }
                </div>
                <div className="order-bg">
                {
                    products.cartItems &&
                    products.cartItems.map((product, index) => 
                    <div className="order" key={index}>
                        <div className="order-img" >
                            <img src={product.image}  alt="" />
                        </div>
                        <div className="order-detail">
                            <div>
                                <h6>{product.name}</h6>
                                <span className="size">
                                    Eur {product.size}
                                </span>
                            </div>
                            <p className="price">{product.cartQuantity} X { product.regular_price}</p>
                        </div>
                    </div>
 )}
                    <div className="sub-total">
                        <h5>Subtotal</h5>
                        <p className="price">N{products.cartTotalAmount}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    </MainLayout>
    );
}
 
export default Checkout
;