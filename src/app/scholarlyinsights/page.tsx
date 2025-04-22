import Banner from "@/components/sections/home3/Banner";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
const ResearchSlides=[
  {
    subTitle: "Preserving Wisdom, Advancing Knowledge Forward",
    title: "Exploring Sufi Thought<br/>Through Research",
    text: "  Dive into in-depth research and scholarly publications that uncover the<br/> historical, and scientific dimensions of Kashmiri Sufism.",
    buttonText: "Read More",
    buttonLink: "/membership",
  },
  {
    subTitle: "Unveiling Sufi Insights Through Scholarship",
    title: "A Gateway to Spiritual<br/> Research & Learning",
    text: "Access a wealth of publications exploring the intersection of Sufism, ,<br/>philosophy, science, and spiritual traditions in a modern context.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Sacred Knowledge Meets Academic Inquiry",
    title: "Deepening Understanding <br/>Through Sufi Studies",
    text: "Our research and publications offer profound insights into Kashmiri Sufi teachings,<br/> bridging tradition with contemporary academic exploration.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
  {
    subTitle: " Expanding Minds, Illuminating Sufi Wisdom",
    title: " Documenting the Legacy <br/>of Sufi Thought",
    text: " Explore meticulously curated research on the history, ethics, and spiritual<br/> practices that define Kashmiri Sufi traditions and teachings.",
    buttonText: "Explore",
    buttonLink: "/membership",
  },
  {
    subTitle: "Bridging Tradition with Modern Inquiry",
    title: " Scholarly Exploration <br/>of Sufi Sciences",
    text: " Our publications serve as a foundation for learning, offering critical perspectives <br/>on Sufi philosophy, consciousness, and ethical living.",
    buttonText: "Join Now",
    buttonLink: "/membership",
  },
];
export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner slides={ResearchSlides}/>
      <section className="team-top text-left-mobile">
          <div className="container mx-auto px-4text-left-mobile">
            <div className="text-center sm:text-left relative block mt-[-6px] mb-[49px] z-[1]">
              {/* Section Tagline */}
              <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
              Scholarly Insights
                <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>

              {/* Section Title */}

              {/* Section Text */}
              <p className="pt-[20px] text-left-mobile text-center text-gray-600 text-sm sm:text-base md:text-md lg:text-lg leading-[1.8] sm:leading-[2] md:leading-[1.5]">
              At the heart of our research lies the exploration of Sufi Science, which encompasses not only the metaphysical realms of existence but also the tangible manifestations of the sacred in the natural world. Through our studies, we engage with the eternal questions of life, consciousness, and the cosmos investigating how Sufi teachings about the unity of existence, sacred geometry and energy can be harmonized with modern fields like quantum physics.
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
                  <li className="font-bold">
                    <Link
                      href="/scholarlyinsights"
                      className="hover:text-fixnix-darkpurple"
                    >
                      Scholarly Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/visualresources"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
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

          

        
       
    </Layout>
  );
}