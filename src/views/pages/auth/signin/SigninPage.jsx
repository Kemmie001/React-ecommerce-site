import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Spinner from "../../../components/Spinner/Spinner";
import { Wrapper } from "../styles";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'



const Login = () => {
    const [isLoading, setisLoading] = useState(false)
    const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

    const {username, password} = formData

    const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        const userData = {
           username,
           password
        }
        setisLoading(true)

          try {
            const res = await axios.post('https://loftywebtech.com/onibata/api/login', userData)
            setisLoading(false)
            if(res.data.status === 'success'){
              const userDetails = {
                token: res.data.message.auth_token,
                isLoggedIn: true,
                username: userData.username
              }
              localStorage.setItem('onibata-user', JSON.stringify(userDetails))
              toast.success("Successfully logged in", {
                position: "bottom-left",
               })
              navigate('/checkout')
            } else {
              toast.error(res.data.message, {
            position: "bottom-left",
           });
          }
          } catch (err) {
            setisLoading(false)
          }
      }
    return (
        <Wrapper>
        <Header/>
        <div className="register">
            <div className="register-form">
                <div className="register-title">
                <h3>Welcome Back!</h3>
                <p>Sign in into your  onibata account and shop with us </p>
                </div>
                <form onSubmit={loginUser}>
                    <input type="text" name="username" value={username} required placeholder="Username" onChange={onChange} />
                    <input type="password" name="password" value={password} required placeholder="Password" id="" onChange={onChange} />
                    <p className="terms">
                    Forgot Password?
                    </p>
                    <button type="submit">{isLoading ? <Spinner/>  : "Login"}</button>
                    
                </form>
            </div>
        </div>
        <Footer />
        </Wrapper>
    );
}
 
export default Login;