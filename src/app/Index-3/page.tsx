import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home3/About";
import Banner from "../../components/sections/home3/Banner";
import Services from "../../components/sections/home3/Services";
import Blog from "../../components/sections/home3/Blog";
import Testimonial from "../../components/sections/home3/Testimonial";

import Welcome from "../../components/sections/home3/Welcome";
import Skill from "../../components/sections/home3/Skill";
import Process from "../../components/sections/home3/Process";
import Brand from "../../components/sections/home3/Brand";
import Contact from "../../components/sections/home3/Contact";
import Funfact from "../../components/sections/home3/Funfacts";
import Features from "@/components/sections/home3/Features";
const features = [
  { text: "Rooted in Kashmiri Sufi Wisdom"  },
  { text: "Driven by Sacred Scientific Inquiry" },
  { text: "Empowering Inner Growth & Learning" },
  { text: "Uniting Consciousness, Culture & Community" },
];
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        
      <section className="relative py-[120px] pb-[90px]">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <div className="relative text-center p-10 bg-white shadow-lg rounded-xl">
            {/* Move 'We Are' label inside the box */}
            <div className="absolute top-0 left-0 bg-fixnix-lightpurple text-white py-1 px-3 rounded-tl-xl rounded-br-xl text-sm font-medium z-20 inline-block">
              We Are
            </div>

            {/* Number inside a circle */}
            <div className="flex justify-center mx-auto items-center w-14 h-14 text-2xl text-white bg-[var(--fixnix-lightpuple)] rounded-full transition-all duration-500 hover:bg-[var(--fixnix-darkpurple)]">
              {index + 1} {/* Display numbers */}
            </div>

            {/* Feature Text */}
            <h3 className="mt-4 text-[17px] font-semibold leading-[30px] text-[var(--fixnix-darkpurple)] transition-all duration-500 hover:text-[var(--fixnix-lightpuple)]">
              {feature.text}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        <About />
        <Services />
        <Welcome />
        <Skill />
        <Funfact />
        <Testimonial />
        <Process />
        <Brand />
        <Contact />
        <Blog />
      </Layout>
    </>
  );
}
