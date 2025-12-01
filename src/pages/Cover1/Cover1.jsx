// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Cover1 = ({ img, title, subtitle }) => {
  return (
    <section className="relative h-[620px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={img}
        alt="Cover"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Center Transparent Text Bar */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[80%] border border-white/40 
                     bg-black/40 
                     py-14 px-6 md:px-20 
                     text-center"
        >
          {/* Title */}
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl 
                       font-serif font-light tracking-[0.3em] mb-4"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-gray-200 text-sm md:text-base 
                       uppercase tracking-widest"
          >
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cover1;
