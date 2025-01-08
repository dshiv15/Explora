import React, { useState } from "react";
import PasswordInput from "../../components/inputs/PasswordInput";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!name) {
        setError("Please enter your name");
        return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
        setError("Please enter the password.");
        return;
    }

    setError("");

    // // Proceed with login logic (e.g., API call)
    // console.log("Login successful with email:", email, "and password:", password);
    // setError(null);
    try {
        const response = await axiosInstance.post("/create-account", {
          
          fullName:name,
          email: email,
          password: password,
        });
      
        // Handle successful login response
        if (response.data && response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
          navigate("/dashboard");
        }
      } catch (error) {
        // Handle login error
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
      
  };

  return (
    <div className="h-screen bg-cyan-50 overflow-hidden relative">
      <div className="login-ui-box right-10 -top-40" />
      <div className="login-ui-box bg-cyan-200 -bottom-40 right-1/2" />
      <div className="container h-screen flex items-center justify-center px-20 mx-auto">
        <div className="w-2/4 h-[90vh] flex flex-col justify-end bg-login-bg-img bg-cover bg-center rounded-lg p-10 z-50">
          <h4 className="text-5xl text-white font-semibold leading-[58px]">
            Capture Your <br /> Journeys
          </h4>
          <p className="text-[19px] text-white leading-0 pr-5 mt-4">
            Record your travel experiences and memories in your personal travel journal.
          </p>
        </div>
        <div className="w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl font-semibold mb-7">Signup</h4>

            <input
              type="text"
              placeholder="Full Name"
              className="input-box border border-gray-300 rounded p-3 w-full mb-4"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box border border-gray-300 rounded p-3 w-full mb-4"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <PasswordInput
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder="Password"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button type="submit" className="btn-primary w-full py-2 text-white bg-primary rounded mt-4">
                CREATE ACCOUNT
            </button>
            <p className="text-xs text-slate-500 text-center my-4">Or</p>
            <button
              type="button"
              className="btn-primary btn-light w-full py-2 text-primary border border-primary rounded"
              onClick={() => navigate("/signUp")}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
