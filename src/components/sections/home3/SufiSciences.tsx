"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

const testimonials = [
  { name: "Ava Thompson", title: "UI/UX Designer", text: "FixNix has truly transformed the way I approach design. Their platform is intuitive and the support is amazing!" },
  { name: "Liam Johnson", title: "Marketing Manager", text: "We've seen a 40% increase in engagement since switching to FixNix. The results speak for themselves." },
  { name: "Sophia Williams", title: "Product Owner", text: "From planning to execution, FixNix helped streamline every aspect of our product lifecycle." },
  { name: "Noah Brown", title: "Freelance Developer", text: "I love how easily I can manage client tasks and feedback all in one place using FixNix." },
  { name: "Isabella Davis", title: "Entrepreneur", text: "FixNix gives me confidence in my business processes. It’s like having a full-time project assistant." },
  { name: "Mason Miller", title: "Tech Lead", text: "The real-time insights and transparency offered by FixNix are exactly what we needed as a growing team." },
  { name: "Emma Wilson", title: "Data Analyst", text: "All of our reports, documentation, and compliance checks are now faster and easier. FixNix saves us hours!" },
  { name: "James Moore", title: "Security Expert", text: "As someone who values security and privacy, I appreciate the detailed audit trails and control FixNix provides." },
  { name: "Mia Taylor", title: "Software Engineer", text: "FixNix integrates seamlessly into our dev stack. Their API is clean, and support is always helpful." },
  { name: "Elijah Anderson", title: "Cloud Architect", text: "For managing infrastructure tasks and documentation, FixNix has been a game-changer." },
  { name: "Charlotte Thomas", title: "HR Coordinator", text: "Managing training and internal reviews has become so much easier. FixNix brings clarity to our workflow." },
  { name: "Benjamin Jackson", title: "QA Specialist", text: "The attention to detail in FixNix's tools ensures nothing falls through the cracks in our testing cycle." },
  { name: "Amelia White", title: "Operations Manager", text: "From onboarding to documentation, FixNix helps me run a tighter ship with fewer errors and more confidence." },
];

export default function Testimonial() {
  return (
    <section className="testimonal-two py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
        <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              SUFI SCIENCE EXPLORER
              <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Customers Review</h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            Hear what our happy customers have to say about our product and services.
          </p>
        </div>

        <Swiper {...swiperOptions} className="w-full">
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between transition-all duration-300  hover:bg-fixnix-darkpurple hover:text-white">
                <div className="mb-4">
                  <p className="text-gray-700 group-hover:text-white">{item.text}</p>
                </div>
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 rounded-full bg-fixnix-lightpurple mr-4 flex-shrink-0 transition-all duration-300 group-hover:bg-white"></div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-white">{item.name}</h4>
                    <span className="text-sm text-gray-500 group-hover:text-white">{item.title}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination mt-6 text-center"></div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="srp cursor-pointer px-3 py-2 bg-gray-300 rounded hover:bg-gray-400">Prev</div>
          <div className="srn cursor-pointer px-3 py-2 bg-gray-300 rounded hover:bg-gray-400">Next</div>
        </div>
      </div>
    </section>
  );
}
