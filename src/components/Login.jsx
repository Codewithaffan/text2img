import React, { useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup Successful!");
      }
      setShowLogin(false); // Close modal after successful authentication
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-in Successful!");
      setShowLogin(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500 w-80" onSubmit={handleAuth}>
        <h1 className="text-center text-2xl text-neutral-700">{state}</h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            {/* User Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M16 16c-1.33-2-3.67-2-5 0m0 0c-1.33-2-3.67-2-5 0m10 0c-1.33-2-3.67-2-5 0m-5 0v2c0 1.33 1.67 3 5 3s5-1.67 5-3v-2" />
            </svg>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          {/* Email Icon (Use a simple @ symbol if no asset) */}
          <span className="text-gray-500 text-lg">@</span>
          <input
            type="email"
            placeholder="Enter Email"
            required
            className="outline-none text-sm w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          {/* Lock Icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M12 16v2m-4-7V7a4 4 0 0 1 8 0v4" />
          </svg>
          <input
            type="password"
            placeholder="Enter Password"
            required
            className="outline-none text-sm w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>

        <button type="submit" className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        <button
          type="button"
          onClick={handleGoogleAuth}
          className="mt-3 bg-red-500 text-white py-2 rounded-full w-full flex items-center justify-center gap-2"
        >
          {/* Google Icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-9m0 0v-6m0 6v6m0-6h9" stroke="red"/>
            <path d="M3.6 9a9 9 0 0 1 16.8-3.1" stroke="blue"/>
            <path d="M12 21a9 9 0 0 0 7.6-4.4" stroke="green"/>
            <path d="M3.6 15A9 9 0 0 0 12 21" stroke="yellow"/>
          </svg>
          Sign in with Google
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState("Sign Up")}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState("Login")}>
              Login
            </span>
          </p>
        )}

        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 text-xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </form>
    </div>
  );
};

export default Login;
