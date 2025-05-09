"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Define a type for the slide object
interface Slide {
  subTitle: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

// Define the props type for Banner component
interface BannerProps {
  slides: Slide[];
}

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner({ slides }: BannerProps) {
  return (
    <section className="relative block z-[91]">
      <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
        {slides.map((slide: Slide, index: number) => (
          <SwiperSlide key={index} className="group/slide">
            <div className="relative bg-[var(--fixnix-lightpuple)]">
              <div className="absolute inset-0 bg-no-repeat bg-cover bg-center scale-100 mix-blend-multiply transition-all duration-[7000ms] ease-in-out z-10 group-[.swiper-slide-active]/slide:scale-[1.15]"></div>
              
              <div className="relative py-36 sm:py-40 md:py-44 lg:pt-48 lg:pb-50 z-30 container mx-auto px-4">
                <div className="flex flex-col items-start">
                  <div className="w-full">
                    <div className="relative block">
                      <p className="relative block text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white leading-8 md:leading-10 opacity-0 invisible translate-y-[-120px] transition-all duration-[2000ms] delay-[1000ms] group-[.swiper-slide-active]/slide:opacity-100 group-[.swiper-slide-active]/slide:visible group-[.swiper-slide-active]/slide:translate-y-0">
                        {slide.subTitle}
                      </p>
                      
                      <h2 className="relative block text-3xl sm:text-4xl md:text-5xl lg:text-[75px] leading-tight md:leading-tight lg:leading-[85px] font-bold text-white mt-3 sm:mt-4 md:mt-[18px] mb-3 sm:mb-4 md:mb-[22px] opacity-0 invisible translate-y-[-120px] transition-all duration-[2000ms] delay-[1000ms] group-[.swiper-slide-active]/slide:opacity-100 group-[.swiper-slide-active]/slide:visible group-[.swiper-slide-active]/slide:translate-y-0">
                        {slide.title.split("<br/>").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h2>
                      
                      <p className="relative block text-base md:text-lg text-white font-normal leading-7 opacity-0 invisible translate-y-[-120px] transition-all duration-[2000ms] delay-[1000ms] group-[.swiper-slide-active]/slide:opacity-100 group-[.swiper-slide-active]/slide:visible group-[.swiper-slide-active]/slide:translate-y-0">
                        {slide.text.split("<br/>").map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                      
                      <div className="relative flex items-center mt-6 sm:mt-8 md:mt-10 lg:mt-[42px] opacity-0 invisible translate-y-[120px] transition-all duration-[2000ms] delay-[1000ms] group-[.swiper-slide-active]/slide:opacity-100 group-[.swiper-slide-active]/slide:visible group-[.swiper-slide-active]/slide:translate-y-0">
                        <Link 
                          href={slide.buttonLink} 
                          className="relative overflow-hidden text-[var(--fixnix-darkpurple)] bg-white px-6 py-3 rounded-md transition-all duration-500 hover:text-white before:content-[''] before:absolute before:inset-0 before:bg-[var(--fixnix-lightpuple)] before:scale-0 before:transition-transform before:duration-500 before:-z-10 hover:before:scale-100"
                        >
                          <span className="relative z-10">{slide.buttonText}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Pagination dots */}
        <div 
          className="swiper-pagination z-10 bottom-[59px] left-1/2 w-full max-w-[1200px] transform -translate-x-1/2 flex items-center justify-start px-4" 
          id="main-slider-pagination"
        ></div>
        
        {/* Navigation arrows - aligned to right side in vertical column for main-slider-three */}
        <div className="w-full max-w-[1200px] px-4 absolute top-[57%] left-1/2 z-[100] transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-end justify-end h-0 leading-none">
          <div className="swiper-button-prev h1p relative w-[50px] h-[50px] flex justify-center items-center text-lg text-white/20 border-2 border-white/20 rounded-full m-0 mb-2.5 p-3.5 text-center transition-all duration-500 hover:text-white hover:border-white cursor-pointer after:hidden">
            <i className="fas fa-chevron-left" style={{ color: "inherit" }}></i>
          </div>
          <div className="swiper-button-next h1n relative w-[50px] h-[50px] flex justify-center items-center text-lg text-white/20 border-2 border-white/20 rounded-full m-0 p-3.5 text-center transition-all duration-500 hover:text-white hover:border-white cursor-pointer after:hidden">
            <i className="fas fa-chevron-right" style={{ color: "inherit" }}></i>
          </div>
        </div>
      </Swiper>
      
      {/* Custom styles for pagination bullets */}
      <style jsx global>{`
        #main-slider-pagination .swiper-pagination-bullet {
          position: relative;
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(var(--fixnix-white-rgb), 0.5);
          padding: 0px;
          transition: all 100ms linear;
          transition-delay: 0.1s;
          margin: 0;
          margin-right: 10px;
        }
        
        #main-slider-pagination .swiper-pagination-bullet:before {
          content: "";
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 50%;
          border: 3px solid var(--fixnix-white);
          transform: scale(0);
          transition: all 100ms linear;
          transition-delay: 0.1s;
        }
        
        #main-slider-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background-color: transparent;
        }
        
        #main-slider-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active:before {
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}