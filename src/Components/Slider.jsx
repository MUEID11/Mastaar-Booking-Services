// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider({ services }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-[-1]"
      >
        {services.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="dark:text-gray-800">
  <div className="lg:flex">
    <div className="flex flex-col-reverse items-center justify-center w-full px-6 sm:py-8 lg:h-[32rem] lg:w-1/2 ">
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold  lg:text-4xl">
          {slide.name}
        </h2>

        <p className="mt-4 text-sm  lg:text-base">
          {slide.description}
        </p>

        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
          <a
            href="#"
            className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500"
          >
            Get Started
          </a>
          <a
            href="#"
            className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>

    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
      <div
        className="w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${slide.imageUrl})` }}
      >
        <div className="w-full h-full bg-black opacity-25"></div>
      </div>
    </div>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
