// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import menu from "../../assets/home/featured.jpg";

const FromMenu = () => {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src={menu}
        alt="Featured Menu"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[520px]">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 md:p-14 max-w-3xl text-center"
        >
          {/* Top Small Title */}
          <p className="text-yellow-400 tracking-[6px] text-xs uppercase mb-3">
            --- Check It Out ---
          </p>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Our Menu
          </h1>

          {/* Date */}
          <p className="text-gray-300 text-sm mb-5">
            March 20, 2023
          </p>

          {/* Description */}
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8">
            Discover our chef’s specially crafted dishes made with fresh,
            premium ingredients and authentic flavors. Each item is designed
            to bring you a memorable dining experience that you will love
            again and again.
          </p>

          {/* Read More Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-3 rounded-full border border-yellow-400 text-yellow-400 font-semibold tracking-widest hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FromMenu;
