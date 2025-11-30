
const AddCart = ({ item }) => {
  if (!item) return null;

  const { name, recipe, image, price } = item;

  return (
    <div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden group"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        {/* Rating */}
        <div className="flex items-center justify-center mb-3 text-yellow-400 text-sm">
          ★ ★ ★ ★ ★
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
            4.8
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {recipe}
        </p>

        {/* PRICE */}
        <p className="text-xl font-extrabold text-yellow-600 mb-4">
          ${price}
        </p>

        {/* BUTTON */}
        <button className="px-5 py-1.5 text-sm font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300 shadow-md">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default AddCart;
