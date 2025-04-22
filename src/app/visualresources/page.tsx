import Layout from "@/components/layout/Layout";
import Whychoose from "@/components/sections/home2/Whychoose";
import Banner from "@/components/sections/home3/Banner";
import Link from "next/link";
const MultimediaSlides = [
  {
    subTitle: "Experience Wisdom Through Digital Learning",
    title: "Explore Sufi Knowledge in<br/> Multimedia Form",
    text: "  Access a vast collection of videos, audio lectures, and<br/> visual archives that bring Kashmiri Sufi teachings to life.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sufi Teachings, Now at Your Fingertips",
    title: "A Digital Hub for<br/> Spiritual Learning",
    text: "Engage with immersive multimedia content, including documentaries, podcasts,<br/> and interactive experiences inspired by Kashmiri Sufism.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Listen, Watch, Reflect, Learn, Grow",
    title: "Unlock the Power<br/> of Visual Learning",
    text: " Explore rare Sufi manuscripts, teachings, and spiritual insights through <br/>our rich multimedia library designed for seekers worldwide.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: "Wisdom Preserved in Sound and Sight",
    title: "  Digital Archives of <br/>Sufi Teachings",
    text: " Discover a multimedia journey through Kashmiri Sufism,<br/> where knowledge is shared through film, music, spoken word, and imagery.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Spiritual Learning in Every Formate",
    title: "Enlightenment Through <br/>Digital Sufi Resources",
    text: " Engage with sacred Sufi wisdom through our extensive collection of digital books,<br/> recorded lectures, and audiovisual storytelling.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={MultimediaSlides}/>
      {/* Blog Two Start */}
      <section className="relative block py-[120px] text-left-mobile">
        <div className="container mx-auto">
          <section className="relative block pb-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-1">
                <span className="relative text-left-mobile inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                  Visual Resources
                  <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                  <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                </span>
                
                <p className="text-gray-600 mt-3">
                  A sacred space where seekers can explore the essence of Divine
                  Unity, consciousness, and the mystical science that connects
                  us to the cosmic dance of creation. Whether through audio
                  recitations of sacred texts, visual representations of sacred
                  geometry, or documentaries that explore the deep connections
                  between spirituality and science, our library aims to nourish
                  the soul and mind alike.
                </p>
              </div>

            
            </div>
          </section>
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
                      className="hover:text-fixnix-darkpurple"
                    >
                      Visual Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/digitalbooks"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      {" "}
                      Digital Books
                    </Link>
                  </li>

                

                  
                  <li className="font-bold">
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

         
          

          
          
        </div>
      </section>
      {/* Blog Two End */}
    </Layout>
  );
}
