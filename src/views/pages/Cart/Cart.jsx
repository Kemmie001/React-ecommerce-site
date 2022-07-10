import MainLayout from "../../components/Layout/MainLayout";
import { Wrapper } from "./styles";
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Cart = () => {
    
    const [products, setproducts] = useState([
        {
            name: 'Monkstrap Shoe',
            quantity: 3,
            price: 25000,
            image: '/assets/collection1.png',
            size: 41,
        },
        {
            name: 'Blue Lady Shoe',
            quantity: 2,
            price: 15000,
            image: '/assets/collection2.png',
            size: 39,
        },
        {
            name: 'Mokstrap Shoe',
            quantity: 3,
            price: 25000,
            image: '/assets/collection1.png',
            size: 41,
        },
    ])
    const [subtotal, setsubtotal] = useState(products.reduce((accumulator, product) => {
        return accumulator + (product.price * product.quantity);
      }, 0))
    const addProduct = (id) => {
        const newProducts = products
        const item = newProducts[id]
        item.quantity++
        setproducts([...newProducts])
        setsubtotal(newProducts.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
          }, 0))
    }
    const substractProduct = (id) => {
        const newProducts = products
        const item = newProducts[id]
        item.quantity--
        setproducts([...newProducts])
        setsubtotal(newProducts.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quantity);
          }, 0))
    }
    const delProduct = (index) => {
        const newProducts = products
        newProducts.splice(index, 1)
        setproducts([...newProducts])
    }
    return ( 
        <MainLayout>
            <Wrapper >
                <h3 className="title">
                    Your Cart
                </h3>
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
        products.map((product, index) => 
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
                <p onClick={() => {
                    if (product.quantity > 1){
                    substractProduct(index)
                    }
                }}>-</p>
                <p>{product.quantity}</p>
                <p onClick={() => addProduct(index)}>+</p>
            </span>
            <RiDeleteBin5Line onClick={() => delProduct(index)} className="del" />
        </div>
    </td>
    <td className="end">N{product.quantity * product.price}</td>
  </tr>
        )}
  
  </tbody>
</table>
<div className="total">
    <div>
    <div className="subtotal">
        <h6>Subtotal</h6>
        <h3>{subtotal}</h3>
    </div>
    <p>Tax included and shipping calculated at checkout</p>
    <button className="btn-primary">
        Checkout
    </button>
    </div>
</div>
<div className="sug-product">
                <div>
                <h3 >
                   Suggested products
                </h3>
                </div>
                <div className="products">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
</div>
</Wrapper>
</MainLayout>
     );
}
 
export default Cart;