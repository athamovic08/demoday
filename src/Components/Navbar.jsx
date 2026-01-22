import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="w-full h-[70px] px-6 bg-white flex items-center justify-between border-b border-gray-200 fixed top-0 left-0 z-[1000]">
      {/* LEFT: LOGO + SITE NAME */}
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.vectorstock.com/i/1000v/47/16/book-shop-logo-vector-49804716.jpg"
          alt="Logo"
          className="h-10 w-auto rounded-2xl"
        />
        <span className="font-bold text-xl">BookStore</span>
      </div>

      {/* CENTER: LINKS */}
      <ul className="flex space-x-6 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* RIGHT: SIGNUP / PROFILE */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign Up
          </button>
        ) : (
          <Link to="/profile">
            <button className="px-4 py-2 bg-green-600 text-white rounded">
              Profile
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
