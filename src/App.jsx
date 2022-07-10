import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import ProductPage from './views/pages/ProductPage/ProductPage';
import Cart from './views/pages/Cart/Cart';
import Products from './views/pages/Products/Products';
import AboutUs from './views/pages/AboutUs/AboutUs';
import Login from './views/pages/auth/signin/SigninPage';
import Register from './views/pages/auth/signup/SignupPage';
import HomePage from './views/pages/home/HomePage'
import Checkout from './views/pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/signup' element={<Register />}></Route>
        <Route exact path='/signin' element={<Login/>}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/product-details' element={<ProductPage />}></Route>
        <Route exact path='/checkout' element={<Checkout />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
