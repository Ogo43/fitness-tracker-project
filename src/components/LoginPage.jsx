import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (username.trim() !== "" && password.trim() !== "") {
      // Save user info (optional) and login status in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      // Navigate to dashboard after login
      navigate("/dashboard");
    } else {
      alert("Please enter both username and password!");
    }

    // Reset form fields
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="max-w-[40%] mx-auto mt-[3rem] px-4 pt-8 pb-15 border-gray-400 border-solid border-1 rounded-2xl font-sans"
      >
        <div className="text-center leading-[1.6]">
          <h1 className="text-4xl w-[60%] mx-auto font-serif mb-3">
            Track Your Fitness Progress
          </h1>
          <p>Login your workout and track your activity</p>
        </div>

        <div className="mt-10">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="flex justify-center items-center m-[1rem]">
          <button
            type="submit"
            className="w-[30%] bg-blue-500 py-3 text-white rounded-4xl hover:bg-blue-700"
          >
            Login
          </button>
        </div>

        <div className="flex justify-center items-center gap-3 my-8">
          <hr className="w-50 border-gray-300" />
          <span>Or</span>
          <hr className="w-50 border-gray-300" />
        </div>

        <div className="social-media-btn">
          <button type="button">
            <img
              src="/src/assets/facebook.png"
              alt="facebook-logo"
              className="social-media-logo"
            />
            Sign up with Email
          </button>
          <button type="button">
            <img
              src="/src/assets/New-Google-Logo.jpg"
              alt="google-logo"
              className="social-media-logo"
            />
            Sign up with Google
          </button>
          <button type="button">
            <img
              src="/src/assets/Apple.png"
              alt="apple-logo"
              className="w-8 mr-3"
            />
            Sign up with Apple
          </button>
        </div>

        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
