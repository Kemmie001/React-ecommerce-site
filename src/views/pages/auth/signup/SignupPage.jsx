import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Spinner from "../../../components/Spinner/Spinner";
import { Wrapper } from "../styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    country: "",
    street: "",
    phone: "",
    town: "",
  });

  const {
    username,
    password,
    email,
    firstname,
    lastname,
    country,
    street,
    phone,
    town,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
      email,
      phone,
      firstname,
      lastname,
      country,
      town,
      street,
    };
    setisLoading(true);

    try {
      const res = await axios.post(
        "https://onibata.loftywebtech.com/signup.php",
        userData
      );
      setisLoading(false);
      if (res.data.status === "success") {
        navigate("/signin");
      } else {
        toast.error(res.data.message, {
          position: "bottom-left",
        });
      }
    } catch (err) {
      setisLoading(false);
    }
  };
  return (
    <Wrapper>
      <Header />
      <div className="register">
        <div className="register-form">
          <div className="register-title">
            <h3>Register now</h3>
            <p>Set up your onibata account and shop with us </p>
          </div>
          <form onSubmit={signUpUser}>
            <input
              type="text"
              name="firstname"
              required
              placeholder="First Name"
              id=""
              value={firstname}
              onChange={onChange}
            />
            <input
              type="text"
              name="lastname"
              required
              placeholder="Last Name"
              id=""
              value={lastname}
              onChange={onChange}
            />
            <input
              type="text"
              placeholder="Username"
              required
              name="username"
              id=""
              value={username}
              onChange={onChange}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={onChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              id=""
              value={phone}
              onChange={onChange}
            />
            <input
              type="text"
              name="street"
              placeholder="Street name"
              id=""
              onChange={onChange}
            />
            <input
              type="text"
              name="town"
              placeholder="Town"
              id=""
              onChange={onChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              id=""
              onChange={onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id=""
              onChange={onChange}
            />
            <p className="terms">
              By clicking Register, you agree to Onibata’s Terms of Use and
              Privacy Policy. Onibata may send you email messages. however, you
              may change your preferences in your account settings. We’ll never
              post without your permission.
            </p>
            <button type="submit">
              {isLoading ? <Spinner /> : "Register"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Register;
