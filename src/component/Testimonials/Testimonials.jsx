import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    quote: "Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Jane Doe",
    rating: 4,
  },
  {
    quote: "Amazing product, exceeded expectations! The team was very responsive and helpful throughout.",
    name: "John Smith",
    rating: 5,
  },
  {
    quote: "A smooth and seamless experience. Highly recommended to anyone looking for quality service.",
    name: "Alice Johnson",
    rating: 5,
  },
];

const transition = { type: "spring", duration: 0.6 };

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;
  const { quote, name, rating } = reviews[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="py-16 bg-white flex justify-center items-center">
      <div className="max-w-2xl w-full text-center relative px-4 md:px-0">
        <p className="text-yellow-600 text-sm mb-2">---What Our Clients Say---</p>
        <h2 className="text-3xl font-semibold mb-4">TESTIMONIALS</h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>

        {/* Quote and text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition }}
            exit={{ opacity: 0, x: -50, transition }}
          >
            <FaQuoteLeft className="mx-auto text-4xl text-gray-800 mb-4" />
            <p className="text-gray-700 text-md md:text-lg mb-4">{quote}</p>
            <p className="text-yellow-600 font-semibold">{name}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
