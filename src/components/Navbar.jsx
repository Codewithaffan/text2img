import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            {/* ✅ Show Logged-in User's Name */}
            <p className="text-gray-600">Hi, {user.displayName || user.email}</p>

            {/* ✅ Logout Button */}
            <button
              onClick={logout}
              className="bg-red-500 text-white px-6 py-2 text-sm rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            {/* ✅ Show Pricing & Login When Logged Out */}
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-7 py-2 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
