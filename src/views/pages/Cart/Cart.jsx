import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
// import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  clearCart,
} from "../../../features/cartSlice";

const URL = process.env.REACT_APP_BASE_URL;

const Cart = () => {
  const [isLoading, setisLoading] = useState(false);
  const products = useSelector((state) => state.cart);
  const orders = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  const handleRemoveCartItem = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };
  const navigate = useNavigate();

  const placeOrder = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem("onibata-user");
    const user_details = JSON.parse(user);
    for (let i = 0; i < products.cartItems.length; i++) {
      const order = {
        product_id: products.cartItems[i].id,
        quantity: products.cartItems[i].cartQuantity,
      };
      if (!orders.includes(order.product_id)) {
        orders.push(order);
      }
    }
    const userData = {
      username: user_details.username,
      auth_token: user_details.token,
      orders: orders,
    };
    setisLoading(true);

    try {
      const res = await axios.post(`${URL}order`, userData);
      setisLoading(false);

      if (res.data.status === "success") {
        navigate("/checkout");
        dispatch(clearCart());
      } else {
        navigate("/checkout");
        toast.error("This shoe is out of Stock", {
          position: "bottom-left",
        });
      }
    } catch (err) {
      toast.error(err.data.message, {
        position: "bottom-left",
      });
      setisLoading(false);
    }
  };

  return (
    <MainLayout>
      <Wrapper>
        <h3 className="title">Your Cart</h3>
        {products.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your Cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <span>
                  <FaArrowLeft /> Start Shopping{" "}
                </span>
              </Link>
            </div>
          </div>
        ) : (
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
                {products.cartItems &&
                  products.cartItems.map((product, index) => (
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
                            <p onClick={() => handleDecreaseCart(product)}>-</p>
                            <p>{product.cartQuantity}</p>
                            <p onClick={() => handleIncreaseCart(product)}>+</p>
                          </span>
                          <RiDeleteBin5Line
                            className="del"
                            onClick={() => handleRemoveCartItem(product)}
                          />
                        </div>
                      </td>
                      <td className="end">
                        N{product.cartQuantity * product.regular_price}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="total">
              <div>
                <div className="subtotal">
                  <h6>Subtotal</h6>
                  <h3>N{products.cartTotalAmount}</h3>
                </div>
                <p>Tax included and shipping calculated at checkout</p>
                <button onClick={placeOrder} className="btn-primary">
                  Checkout
                </button>
                <Link style={{ color: "#9E005D" }} to="/">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FaArrowLeft /> Continue Shopping{" "}
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}

        <div className="sug-product">
          <div>
            <h3>Suggested products</h3>
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
};

export default Cart;
