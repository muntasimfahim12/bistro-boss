import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import SectionTitle from "../../component/sectionTitle/SectionTitle";

const FeaturedMenu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const items = [
    { img: slide1, title: "Fresh Salads" },
    { img: slide2, title: "Hot Soups" },
    { img: slide3, title: "Premium Coffee" },
    { img: slide4, title: "Sweet Cakes" },
    { img: slide5, title: "Tasty Desserts" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <SectionTitle 
        heading="From Our Menu" 
        subHeading="---Popular Items---" 
      />

      <section className=" mb-6">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination, Autoplay]}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="zoom-in"
                  className="group relative rounded-2xl overflow-hidden shadow-2xl bg-white"
                >
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[340px] object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 w-full p-6 text-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide mb-2">
                      {item.title}
                    </h3>

                    <button className="mt-2 px-6 py-2 text-sm font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition duration-300 shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default FeaturedMenu;
