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

const Category = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = [
    { img: slide1, title: "Salads" },
    { img: slide2, title: "Soups" },
    { img: slide3, title: "Coffee" },
    { img: slide4, title: "Cake" },
    { img: slide5, title: "Desserts" },
  ];

  return (
    <div>
      <SectionTitle />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={1200} // Smooth transition
            autoplay={{
              delay: 2500,
              disableOnInteraction: false, // কখনও autoplay বন্ধ হবে না
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination, Autoplay]}
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  className="group relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Title */}
                  <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl md:text-2xl font-bold uppercase tracking-widest drop-shadow-xl">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Category;
