"use client";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Banner from "../../components/sections/home3/Banner";
import Welcome from "../../components/sections/home3/Welcome";
import About from "@/components/sections/home2/About";
const BooksSlides = [
  {
    subTitle: "Sacred Texts, Anytime, Anywhere",
    title: "Discover Sufi Wisdom <br/>in Digital Books",
    text: " Access an extensive collection of Sufi literature, manuscripts, and teachings <br/>in digital format, bringing centuries of wisdom to your fingertips.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Timeless Knowledge in Digital Form",
    title: "A Treasure of Sufi<br/> Literature Online",
    text: "Explore rare and contemporary Sufi texts, offering deep insights into<br/> spirituality, philosophy, and the mystical traditions of Kashmiri Sufism.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Read, Reflect, Learn, Grow, Transform",
    title: " The Gateway to Sufi<br/> Knowledge Online",
    text: "Enhance your spiritual journey with a curated selection of digital books, <br/>bridging Sufi heritage with modern understanding.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Wisdom Preserved, Digitally Accessible",
    title: " Unlock the Mystical <br/>World of Sufism",
    text: "Explore centuries of Sufi philosophy, poetry, and teachings in a vast digital<br/> library designed for seekers of truth and enlightenment.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "A Digital Library of Enlightenment",
    title: "Sufi Teachings at<br/> Your Fingertips",
    text: " Dive into a rich collection of sacred Sufi writings, available in<br/> digital format for convenient access and lifelong learning.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner slides={BooksSlides}/>

        
    
        {/* <About></About> */}
        
        <section className="team-top text-left-mobile">
          <div className="container mx-auto px-4text-left-mobile">
            <div className="text-center sm:text-left relative block mt-[-6px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                Our Books Collection
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}

              {/* Section Text */}
              <p className="pt-[20px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
                Our collection includes a wide range of Sufi texts, written by
                spiritual luminaries and scholars whose teachings have shaped
                the spiritual landscape of Kashmir and beyond. These digital
                books offer insights into subjects such as the nature of
                reality, the soul’s journey and the science of divine love.
                Whether you are a novice or a seasoned seeker, these books will
                guide you on your path to spiritual enlightenment.
              </p>
            </div>
          </div>
        </section>

        {/* Product Start */}

        <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <div className="p-4 border rounded-lg  bg-fixnix-lightpurple shadow-sm relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-2 pr-10  border rounded-lg bg-fixnix-lightpurple "
                />
                <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
              </div>

              <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                <h3 className="font-semibold mb-2">Price</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    className="w-16 p-1 border rounded-lg text-center"
                  />
                  <span>-</span>
                  <input
                    type="text"
                    className="w-16 p-1 border rounded-lg text-center"
                  />
                  <button className="px-3 py-1 bg-fixnix-lightpurple text-white rounded-lg">
                    Go
                  </button>
                </div>
              </div>
              <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="space-y-2">
                  <li >
                    <Link
                      href="/scholarlyinsights"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Scholarly Insights
                    </Link>
                  </li>
                  <li className="font-bold">
                    <Link
                      href="/visualresources"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Visual Resources
                    </Link>
                  </li>
                  <li className="font-bold">
                    <Link
                      href="/digitalbooks"
                      className="hover:text-fixnix-darkpurple"
                    >
                      {" "}
                      Digital Books
                    </Link>
                  </li>

                

                  
                  <li >
                    <Link
                      href="/audiospectrums"
                      className=" text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Audio Spectrum
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Products */}
            <div className="md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
                <p>Showing 1–9 of 12 results</p>
                <select className="p-2 border bg-gray-100 rounded-lg">
                  <option className="hover:bg-fixnix-lightpurple">
                    Sort by popular
                  </option>
                  <option>Sort by Price</option>
                  <option>Sort by Ratings</option>
                </select>
              </div>
              <div className="grid grid-cols-1 shadow-sm sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Product Card */}
  {[...Array(9)].map((_, i) => (
    <div
      key={i}
      className="border shadow-light-purple rounded-lg p-4"
      style={{ boxShadow: "fixnix-lightpurple" }} // Light purple shadow
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={`/assets/images/shop/music1.png`}
          alt="Product"
          className="w-full h-48 object-cover hover:scale-125"
        />
      </div>
      <div className="mt-4 text-center">
        <div className="text-yellow-500">
          {[...Array(5)].map((_, j) => (
            <i key={j} className="fa fa-star"></i>
          ))}
        </div>
        <h4 className="mt-2 font-bold text-lg">
          <Link href="product-details" className="text-fixnix-darkpurple">
            Product {i + 1}
          </Link>
        </h4>
        
        <p className="text-md font-bold text-fixnix-darkpurple text-left">Format:<span className="text-gray-600 font-normal"> Digital MP3 / WAV</span></p>
        <p className="text-md font-bold text-fixnix-darkpurple text-left"> Duration:<span className="text-gray-600 font-normal">Approx. 60 min</span> </p>
        
        <p className="text-xl font-bold text-fixnix-darkpurple">${(i + 1) * 10 + 20}.00</p>
        <div className="mt-3">
          <Link
            href="/productdetails"
            className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white px-4 py-2 rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
