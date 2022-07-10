import React from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { Wrapper } from "../styles";



const Login = () => {
    return (
        <Wrapper>
        <Header/>
        <div className="register">
            <div className="register-form">
                <div className="register-title">
                <h3>Welcome Back!</h3>
                <p>Sign in into your  onibata account and shop with us </p>
                </div>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="passsword" placeholder="Password" id="" />
                    <p className="terms">
                    Forgot Password?
                    </p>
                    <button type="submit">Login</button>
                    
                </form>
            </div>
        </div>
        <Footer />
        </Wrapper>
    );
}
 
export default Login;