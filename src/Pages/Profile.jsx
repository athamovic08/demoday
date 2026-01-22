import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleAddToCart = (product) => {
    alert(`${product.title} qo'shildi!`);
    setCart([...cart, product]);
  };

  return (
    <div className="pt-[90px] px-10 pb-20 bg-gray-50 min-h-screen">
      {user && (
        <div className="flex flex-col items-center gap-4">
          <img
            src="src/assets/Sample_User_Icon.png"
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <h2 className="text-2xl font-bold">{user.name} {user.surname}</h2>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.comment}</p>

          <button>Zakazlarin</button>
        </div>
      )}

      {/* CARDS */}
      <div className="mt-10">
        <Cart onAddToCart={handleAddToCart} />
      </div>

    
    </div>
  );
}
