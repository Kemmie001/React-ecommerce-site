import "./App.css";
import "react-toastify/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./views/pages/ProductPage/ProductPage";
import Cart from "./views/pages/Cart/Cart";
import Products from "./views/pages/Products/Products";
import AboutUs from "./views/pages/AboutUs/AboutUs";
import Login from "./views/pages/auth/signin/SigninPage";
import Register from "./views/pages/auth/signup/SignupPage";
import HomePage from "./views/pages/home/HomePage";
import Checkout from "./views/pages/Checkout/Checkout";
import NotFound from "./views/pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import Protected from "./views/components/ProtectedRoute/Protected";
import ResetPassword from "./views/pages/auth/ForgotPassword/ResetPassword";
import ProfilePage from "./views/pages/Profile/Profile";
import Terms from "./views/pages/Terms/Terms";
import Faq from "./views/pages/Faq/Faq";
import ContactUs from "./views/pages/ContactUs/ContactUs";
import ReadBlog from "./views/pages/ReadBlog";
import Blogs from "./views/pages/Blogs/Blogs";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ToastContainer />
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
					<Route exact path="/signup" element={<Register />}></Route>
					<Route exact path="/signin" element={<Login />}></Route>
					<Route exact path="/request-password-reset" element={<ResetPassword />}></Route>
					<Route
						path="/my-profile"
						element={
							<Protected>
								<ProfilePage />
							</Protected>
						}
					/>
					<Route exact path="/about" element={<AboutUs />}></Route>
					<Route exact path="/blogs/:id" element={<ReadBlog />} />
					<Route exact path="/blogs" element={<Blogs />} />
					<Route exact path="/products" element={<Products />}></Route>
					<Route exact path="/product-details/:id" element={<ProductPage />}></Route>
					<Route exact path="/terms" element={<Terms />}></Route>
					<Route exact path="/faq" element={<Faq />}></Route>
					<Route exact path="/contact_us" element={<ContactUs />}></Route>
					<Route
						path="/checkout"
						element={
							<Protected>
								<Checkout />
							</Protected>
						}
					/>
					<Route exact path="/cart" element={<Cart />}></Route>
					<Route path="/not-found" element={<NotFound />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
