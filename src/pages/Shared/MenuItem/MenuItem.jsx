const MenuItem = ({ item }) => {
  const { name, recipe, image, price, category } = item;

  return (
    <div className="flex gap-4 border p-4 rounded-lg shadow-md">
      <img style={{borderRadius: '0 200px 200px 200px'}}
        src={image}
        alt={name}
        className="w-28 h-20 object-cover "
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}----------</h3>
        <p className="text-gray-600 text-sm">{recipe}</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">Category:</span> {category}
        </p>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold text-orange-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
