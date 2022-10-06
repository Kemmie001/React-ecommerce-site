import './App.css';
import "react-toastify/ReactToastify.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './views/pages/ProductPage/ProductPage';
import Cart from './views/pages/Cart/Cart';
import Products from './views/pages/Products/Products';
import AboutUs from './views/pages/AboutUs/AboutUs';
import Login from './views/pages/auth/signin/SigninPage';
import Register from './views/pages/auth/signup/SignupPage';
import HomePage from './views/pages/home/HomePage'
import Checkout from './views/pages/Checkout/Checkout';
import NotFound from './views/pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify'
import Protected from './views/components/ProtectedRoute/Protected';
import ResetPassword from './views/pages/auth/ForgotPassword/ResetPassword';
import ProfilePage from './views/pages/Profile/Profile';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <ToastContainer />
       <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/signup' element={<Register />}></Route>
        <Route exact path='/signin' element={<Login/>}></Route>
        <Route exact path='/request-password-reset' element={<ResetPassword/>}></Route>
        <Route
        path="/my-profile"
        element={
        <Protected >
        <ProfilePage/>
        </Protected>
        }
        />
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/product-details/:id' element={<ProductPage />}></Route>
        <Route
        path="/checkout"
        element={
        <Protected >
        <Checkout/>
        </Protected>
        }
        />
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route path="/not-found" element={ <NotFound/> }></Route>
        <Route
            path="*"
            element={<NotFound />}
        ></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
