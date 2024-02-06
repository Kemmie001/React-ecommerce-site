import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Spinner from "../../../components/Spinner/Spinner";
import { Wrapper } from "../styles";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const { email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const ResetPassword = async (e) => {
    e.preventDefault();
    const userData = {
      email,
    };
    setisLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}`,
        userData
      );
      setisLoading(false);
      if (res.data.status === "success") {
        console.log(res.data);
        navigate("/");
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
            <h3>Forgot password?</h3>
            <p>Reset password in two quick steps </p>
          </div>
          <form onSubmit={ResetPassword}>
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Email"
              onChange={onChange}
            />
            <br />
            <br />

            <button type="submit">
              {isLoading ? <Spinner /> : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default ResetPassword;
