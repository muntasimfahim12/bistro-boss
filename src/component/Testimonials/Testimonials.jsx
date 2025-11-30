import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const transition = { type: "spring", duration: 0.6 };

export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews from public folder
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Review Fetch Error:", err));
  }, []);

  const total = reviews.length;

  // Safety Guard
  if (total === 0) {
    return (
      <section className="py-16 bg-white text-center">
        <p className="text-gray-500">Loading testimonials...</p>
      </section>
    );
  }

  // Destructure current review
  const { name, details, rating } = reviews[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="py-16 bg-white flex justify-center items-center">
      <div className="max-w-2xl w-full text-center relative px-4 md:px-0">
        <p className="text-yellow-600 text-sm mb-2">
          ---What Our Clients Say---
        </p>
        <h2 className="text-3xl font-semibold mb-4">TESTIMONIALS</h2>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
            />
          ))}
        </div>

        {/* Review Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition }}
            exit={{ opacity: 0, x: -50, transition }}
            className="px-4"
          >
            <FaQuoteLeft className="mx-auto text-4xl text-gray-800 mb-4" />
            <p className="text-gray-700 text-md md:text-lg mb-4">{details}</p>
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
