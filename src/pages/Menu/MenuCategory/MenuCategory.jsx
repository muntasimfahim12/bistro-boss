// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};



const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MenuCategory = ({ items, title = [] }) => {
  // ✅ Empty state handler
  if (!items.length) {
    return (
      <div className="flex justify-center items-center py-20 text-gray-400 text-lg">
        No items available in this category.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center px-4 mb-12 pt-12 items-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 place-items-center"
      >
        {items.map((item) => (
          <motion.div
            key={item._id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-full"
          >
            <MenuItem item={item} />
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Professional Order Button ===== */}
      <Link to={`/order/${title}`}>
        <button
          className="mt-8 px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500
                     text-black hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl
                     transition-all duration-300 text-lg"
        >
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
