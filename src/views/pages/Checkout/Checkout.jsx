
import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";
import { Link } from 'react-router-dom'
import { FaGreaterThan, FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {  getTotals } from "../../../features/cartSlice";
import { PaystackButton } from 'react-paystack'
import {toast} from 'react-toastify';
import axios from 'axios'
import Spinner from "../../components/Spinner/Spinner";


const Checkout
 = () => {
    const user = localStorage.getItem("onibata-user");
    const user_details = JSON.parse(user)
    const products = useSelector((state) => state.cart)
    const [isLoading, setisLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
        getAddress()
    }, [products, dispatch])
    const [displayScreen, setdisplayScreen] = useState('shipping')
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
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY

  const amount = (products.cartTotalAmount * 100)// Remember, set in kobo!

  const [email, setEmail] = useState("")

  const [name, setName] = useState("")

  const [phone, setPhone] = useState("")
  const [address, setaddress] = useState({})
  let {country, town, street, postal_code} = address
  const onChangeAddress = (e) => {
    setaddress((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}
// Get User Address
const getAddress = async () => {
    // e.preventDefault()
    
    const userData = {
       username: user_details.username,
       auth_token: user_details.token,
    }

      try {
        const res = await axios.post('https://loftywebtech.com/onibata/api/address', userData)
        if(res.data.status === 'success'){
            setaddress(res.data.message)
            console.log(res.data.message)
        } else {
          toast.error("An error occurred", {
        position: "bottom-left",
       });
      }
      } catch (err) {
        toast.error(err.data.message, {
            position: "bottom-left",
           });
      }
  }
  // Update User Address
  const  updateAddress = async (e) => {
    e.preventDefault()
    const userData = {
        username: user_details.username,
        auth_token: user_details.token,
        country,
        town,
        street,
        postal_code 
    }
    setisLoading(true)

      try {
        const res = await axios.put('https://loftywebtech.com/onibata/api/update-address', userData)
        setisLoading(false)
        if(res.data.status === 'success'){
            toast.success(res.data.message, {
                position: "bottom-left",
               });
        } else {
          toast.error(res.data.message, {
        position: "bottom-left",
       });
      }
      } catch (err) {
        setisLoading(false)
      }
  }
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
                                <Link to="/cart" className="checkout-link">Cart <FaGreaterThan className="icon"/></Link>                                <span className={`checkout-link ${displayScreen === 'shipping' && 'link'} `}  onClick={() => setdisplayScreen('shipping')}>Shipping <FaGreaterThan className="icon"/></span>
                                <span className={`checkout-link ${displayScreen === 'payment' && 'link'} `}  onClick={() => setdisplayScreen('payment')}>Payment </span>
                            </div>
                        </div>
                    </nav>
                    { displayScreen === 'shipping' &&
                    <div>
                    <h5>Shipping Address</h5>
                    <form >
                        <article>
                        <input type="text" value={country} required name="country" id="" onChange={onChangeAddress} placeholder="Country"/>
                        <p className="change" > Change</p>
                        </article>
                        <article>
                        <input type="text" value={town} required name="town" id=""onChange={onChangeAddress}  placeholder="State"/>
                        <p className="change"> Change</p>
                        </article>
                        <article>
                        <input type="text" value={street} required name="street" id="" onChange={onChangeAddress}  placeholder="Street"/>
                        <p className="change"> Change</p>
                        </article>
                        <article>
                        <input type="text" value={postal_code} required name="postal_code" onChange={onChangeAddress}  id="" placeholder="Postal Code"/>
                        <p className="change"> Change</p>
                        </article>
                        {/* <section className="city">
                            <label htmlFor="ship-methop"></label>
                            <article>
                            <input type="text" required name="ship-method" id="" placeholder="Standard Shipping"/>
                            <p className="price">N5000</p>
                            </article>
                        </section> */}
                        <div className="btn">
                            <button type="click" onClick={() => setdisplayScreen('payment')} className="btn-primary">
                                Continue Payment
                            </button>
                            <button type="submit"  onClick={updateAddress} className="btn-next">
                            {isLoading ? <Spinner />  : "Change Address"}
                            </button>
                        </div>
                    </form>
                    </div>} 

                    {
                       displayScreen === 'payment'  && 
                       <div>
                        {
                             products.cartItems.length === 0 ? (
                                <div className="cart-empty">
                                    <p>Your Cart is currently empty</p>
                                    <div className="start-shopping">
                                        <Link to="/">
                                            <span><FaArrowLeft/> Start Shopping </span>
                                        </Link>
                                    </div>
                                </div>
                            ) : 
                    
                       <div className="">
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
                    }
                </div>
                <div className="order-bg">
                {
                    products.cartItems.length === 0 ? (
                                <div className="cart-empty">
                                    <p>Your Cart is currently empty</p>
                                    <div className="start-shopping">
                                        <Link to="/">
                                            <span><FaArrowLeft/> Start Shopping </span>
                                        </Link>
                                    </div>
                                </div>
                            ) : 
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