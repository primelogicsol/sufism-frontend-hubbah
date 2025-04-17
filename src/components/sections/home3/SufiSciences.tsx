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
  { name: "Foundational Matrices", title: "UI/UX Designer", text: "Unveil the divine scaffolding of existence—where the Pen (Qalam) etched realities into being through luminous codes of pre-eternity." },
  { name: "Ecological Intelligence", title: "Marketing Manager", text: "Witness nature as the Breath of the Compassionate—where every leaf, stream, and stone mirrors divine balance (mīzān) and remembrance." },
  { name: "Consciousness Geometries", title: "Product Owner", text: "Trace the soul’s ascent through sacred forms—latā’if, circles, and stars—mapping the inner heavens of experiential gnosis (ma‘rifah)." },
  { name: "Perceptual Gateways", title: "Freelance Developer", text: "Open the subtle senses (bāṭin) beyond physical sight—where intuition becomes vision (basīrah) and silence speaks through unveiling (kashf)." },
  { name: "Reality Frameworks", title: "Entrepreneur", text: "Journey through the layered worlds (‘ālam al-mithāl, al-malakūt, al-jabarūt)—where quantum multiplicity reflects divine oneness (tawḥīd)." },
  { name: "Cosmic Harmonics", title: "Tech Lead", text: "Enter the symphony of divine breath—where dhikr aligns soul to the harmonic architecture of the Names (Asmā’ al-Ḥusnā)." },
  { name: "Energetic Architectures", title: "Data Analyst", text: "Know your being as a luminous circuitry—where spiritual centers (latā’if) channel divine light (nūr) through remembrance and stillness." },
  { name: "Character Alchemy", title: "Security Expert", text: "Refine the nafs through inner jihad—transmuting rusted traits into polished mirrors of divine attributes via Sufi disciplines and adab." },
  { name: "Unity Sciences", title: "Software Engineer", text: "Witness the hidden One in every form—where multiplicity collapses into the Face of the Friend (Wajh Allāh), eternally present." },
  { name: "Healing Mysteries", title: "Cloud Architect", text: "Let divine names descend like medicine—where sacred sound, breath, and presence become elixirs for hearts wounded by distance." },
  { name: "Wisdom Transmission", title: "HR Coordinator", text: "Receive the unseen (ghaib) through chains of light—where the master’s gaze, silence, or a single breath transfers oceans." },
  { name: "Sacred Artistry", title: "QA Specialist", text: "Create with reverence—where form is veil and unveiling, and every curve is a reflection of al-Jamīl, the Beautiful." },
  { name: "Advanced Technologies", title: "Operations Manager", text: "Navigate modern tools as instruments of the Real—where AI, neurotech, and digital networks become means of divine witnessing (shuhūd)." },
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
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Decoding the Divine Design : One Veil at a Time.</h2>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
          Journey Beyond the Seen: Where Science Meets Sainthood.
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
