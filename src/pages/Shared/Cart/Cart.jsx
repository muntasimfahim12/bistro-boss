import React, { useEffect, useState } from "react";
import AddCart from "../AddCart/AddCart";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/menu.json") // public folder হলে "/" ঠিক আছে
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(
          (item) => item.category === "popular"
        );
        setCart(popularItems);
      });
  }, []);

  return (
    <section className="py-12 flex justify-center">
      {/* ✅ Centered Container */}
      <div className="max-w-7xl w-full px-6">
        {/* ✅ 3 Cards in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {cart.slice(0, 3).map((item) => (
            <AddCart key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
