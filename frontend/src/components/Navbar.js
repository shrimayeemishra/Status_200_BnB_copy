import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container flex items-center justify-between px-6 md:px-20 py-5">
        <Link to="/">
          <h1 className="font-bold text-xl">
            Health <span className="text-[#1fb84e]">D</span>eck
          </h1>
        </Link>
        {/* Search bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 mr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1fb84e]"
          />
        </div>
        {/* End of search bar */}
        <nav className="flex">
          {user && (
            <div className="font-medium space-x-4">
              <Link to="/doctors">Doctors</Link>
              <span>Welcome!</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="font-medium space-x-4">
              <Link to="/doctors">Doctors</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
