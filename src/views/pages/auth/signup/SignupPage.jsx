import React from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { Wrapper } from "../styles";



const Register = () => {
    return (
        <Wrapper>
        <Header/>
        <div className="register">
            <div className="register-form">
                <div className="register-title">
                <h3>Register now</h3>
                <p>Set up your onibata account and shop with us </p>
                </div>
                <form>
                    <input type="text" placeholder="First Name" id="" />
                    <input type="text" placeholder="Last Name" id="" />
                    <input type="email" placeholder="Email" />
                    <input type="passsword" placeholder="Password" id="" />
                    <input type="password" placeholder="Confirm Password" id="" />
                    <p className="terms">
                    By clicking Register, you agree to Onibata’s Terms of Use and Privacy Policy. Onibata may send you email messages. however, you may change your preferences in your account settings. We’ll never post without your permission.
                    </p>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
        <Footer />
        </Wrapper>
    );
}
 
export default Register;