import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
import img7 from "../../../assets/home/banner.jpg";

const Banner = () => {
  const slides = [
    { img: img1, title: "Fresh & Healthy Food", desc: "Best quality food for your health" },
    { img: img2, title: "Delicious Meals", desc: "Taste that makes you happy" },
    { img: img3, title: "Fast Delivery", desc: "Get your food within minutes" },
    { img: img4, title: "Premium Quality", desc: "We maintain top quality" },
    { img: img5, title: "Special Offers", desc: "Attractive discounts for you" },
    { img: img6, title: "Hot & Spicy", desc: "Feel the real flavor" },
    { img: img7, title: "Order Online", desc: "Easy, fast & secure" },
  ];

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        swipeable
        emulateTouch
        stopOnHover
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="h-[70vh] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-white text-sm md:text-lg">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
