import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (fullname && username && email && password) {
        alert("Account created. You can now login.");
        navigate("/login");
    } else {
        alert("Please fill in all fields.")
    }
     // Reset the form fields back to empty after submit
    setFullname("");
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form onSubmit={handleSignup} className="max-w-[40%] mx-auto mt-[3rem] px-4 pt-8 pb-15 border-gray-400 border-solid border-1 rounded-2xl font-sans">
        <h1 className="text-center text-3xl font-serif mb-7">Create Account</h1>
        <label className="label">Name</label>
        <input
          type="text"
          value={fullname}
          placeholder="Full name"
          required
          onChange={(e) => setFullname(e.target.value)}
          className="input-field"
        />
        <label className="label">Username</label>
        <input
          type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          min="6"
          max="12"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <div className="flex justify-center items-center m-[1rem]">
          <button
            type="submit"
            className="w-[30%] bg-blue-500 py-3 text-white rounded-4xl hover:bg-blue-700"
          >
            Sign Up
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
            Sign up with Facebook
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
          Already have an account?{" "}
          <span onClick={() => navigate("/Login")} className="text-blue-500 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
