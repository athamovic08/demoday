import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null); // null = not logged in
  const [showModal, setShowModal] = useState(false); // Registration modal
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [language, setLanguage] = useState("Uzb");
  const [region, setRegion] = useState("Uzbekistan");
  const [showBooksCategories, setShowBooksCategories] = useState(false);

  const bookCategories = [
    "Logic",
    "Psychology",
    "Historic",
    "Books to Read",
    "Children Biography Books",
    "Children Transportation Books",
    "Fantasy Books",
    "Money Investing Books",
  ];

  

  const handleCategoryClick = (category) => {
    // Scroll to the section
    const id = category.replace(/\s+/g, "-").toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ name: formData.name });
    setShowModal(false);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
      
      {/* LEFT: LOGO */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto"/>
      </div>

      {/* CENTER: PAGES */}
      <ul className="flex space-x-6 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/contact">Contact</a></li>
        <li 
          className="relative"
          onMouseEnter={() => setShowBooksCategories(true)}
          onMouseLeave={() => setShowBooksCategories(false)}
        >
          <a href="/books" className="hover:text-blue-600 font-semibold">Books</a>

          {/* DROPDOWN */}
          {showBooksCategories && (
            <ul className="absolute top-full left-0 mt-2 w-72 bg-white border shadow-lg rounded-md z-50">
              {bookCategories.map((category) => (
                <li 
                  key={category} 
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>

      {/* RIGHT: USER */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign In
          </button>
        ) : (
          <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="Uzb">Uzb</option>
              <option value="Rus">Rus</option>
              <option value="Eng">Eng</option>
            </select>
        )}

        {/* LANGUAGE & REGION - faqat user bo‘lsa ko‘rinadi */}
        {user && (
          <>

            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Russia">Russia</option>
              <option value="France">France</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Japan">Japan</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
            </select>
            
            <div className="flex items-center space-x-2">
            <span>Hi, {user.name}</span>
            <img src="/profile.png" alt="Profile" className="h-8 w-8 rounded-full"/>
          </div>
            
          </>
        )}
      </div>

      {/* MODAL: Registration Form */}
      {showModal && (
        <div className="fixed inset-0 shadow-lg bg-gray-100/70 backdrop-black-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white  border-[1px]   rounded-4xl p-6 w-80 relative">
            <h2 className="text-xl font-bold mb-4">Registration</h2>
            <form onSubmit={handleRegister} className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border px-3 py-2 rounded-2xl w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border px-3 py-2 rounded-2xl w-full"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="border px-3 py-2 rounded-2xl w-full"
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-2xl">
                Register
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-gray-500 mt-2 underline"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

    </nav>
  );
}
