import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { addToCart, decreaseCart, getTotals, removeFromCart } from "../../../features/cartSlice";


const Cart = () => {
    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [products, dispatch])
   
    const handleRemoveCartItem = (product) => {
        dispatch(removeFromCart(product))
    }
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product))
    }
    const handleIncreaseCart = (product) => {
        dispatch(addToCart(product))
    }

    return ( 
        <MainLayout>
            <Wrapper >
                <h3 className="title">
                    Your Cart
                </h3>
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
   (
   <>
    <table>
  <thead>
  <tr>
    <th>Products</th>
    <th>Quantity</th>
    <th className="end">Price</th>
  </tr>
  </thead>
  <tbody>
    {
        products.cartItems &&
        products.cartItems.map((product, index) => 
        <tr className="product" key={index}>
    <td>
        <div className="shoe">
            <div className="shoe-img">
            <img src={product.image} alt="" />
            </div>
            <div className="shoe-name">
                <h6>{product.name}</h6>
                <p>Size Eur {product.size}</p>
            </div>
        </div>
    </td>
    <td>
        <div className="quantity">
            <span>
                <p onClick={() => handleDecreaseCart(product)} >-</p>
                <p>{product.cartQuantity}</p>
                <p onClick={() => handleIncreaseCart(product)} >+</p>
            </span>
            <RiDeleteBin5Line className="del" onClick={() => handleRemoveCartItem(product)} />
        </div>
    </td>
    <td className="end">N{ product.cartQuantity * product.regular_price}</td>
  </tr>
        )}
  
  </tbody>
</table>
<div className="total">
    <div>
    <div className="subtotal">
        <h6>Subtotal</h6>
        <h3>N{products.cartTotalAmount}</h3>
    </div>
    <p>Tax included and shipping calculated at checkout</p>
    <button className="btn-primary">
    <Link style={{color:"#9E005D"}} to="/checkout">Checkout</Link>
    </button>
    <Link style={{color:"#9E005D"}}  to="/">
        <span style={{display: 'flex', alignItems: 'center', gap: "8px"}}><FaArrowLeft/> Continue Shopping </span>
    </Link>
    </div>
</div>
   </>
   )
                }


<div className="sug-product">
                <div>
                <h3 >
                   Suggested products
                </h3>
                </div>
                {/* <div className="products">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div> */}
</div>
</Wrapper>
</MainLayout>
     );
}
 
export default Cart;