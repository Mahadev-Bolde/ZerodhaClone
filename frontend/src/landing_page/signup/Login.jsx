import React, { useState } from "react";
import "./Signup.css"; // reuse same CSS
import Signup from "./Signup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodhaclone-qwjp.onrender.com/login",
        {
          ...form,
        },
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          let userInitial = form.email[0] + form.email[1];
          window.location.href = `https://zerodha-clone-git-main-mahadev-boldes-projects.vercel.app?user=${userInitial}`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Login</h2>
        <p className="signup-subtitle">Access your Zerodha account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Login
          </button>
          <p className="login-text">
            Don’t have an account?{" "}
            <span>
              <Link to="/Signup">Sign up</Link>
            </span>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
