// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import cooking from "../../assets/home/chef-service.jpg";

const Cooking = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden flex justify-center">
      {/* Background Image */}
      <div className="relative w-full max-w-7xl">
        <img
          src={cooking}
          alt="Bistro Boss Cooking"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70 rounded-2xl" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-7 md:p-9 max-w-3xl text-center"
          >
            {/* Subtitle */}
            <p className="text-yellow-400 tracking-[4px] text-[10px] uppercase mb-3">
              Our Special Service
            </p>

            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
              Bistro Boss Experience
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-6">
              We craft each dish with passion, precision, and premium ingredients.
              Our chefs blend tradition with innovation to bring you unforgettable
              flavors in every bite.
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-2.5 rounded-full bg-yellow-400 text-black text-xs md:text-sm font-semibold tracking-wide shadow-md hover:shadow-yellow-400/40 transition"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cooking;
