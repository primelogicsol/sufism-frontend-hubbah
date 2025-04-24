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
               Dialog Series
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
                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="space-y-2">
                  <li className="font-bold">
                    <Link
                      href="/scholarlydialogs"
                      className="hover:text-fixnix-darkpurple"
                    >
                      Dialog Series
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hardtalk"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Hard Talk
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sacredprofessions"
                      className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple"
                    >
                      Sacred Professions
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
                <p>Showing 1–3 results</p>
                <select className="p-2 border bg-gray-100 rounded-lg">
                  <option className="hover:bg-fixnix-lightpurple">
                    Sort by popular
                  </option>
                 
                  <option>Sort by Ratings</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Item 1 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <img src="assets/images/dialogs/9.png" alt="" className="w-full h-64 object-cover rounded-t-xl " />
              <div className="absolute inset-0 flex items-center justify-center  bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700">
                <Link href="/scholarlydialogs">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
             
              <h3 className="text-xl font-semibold mt-2 text-fixnix-darkpurple">
                <Link href="/scholarlydialogs" className="text-white">Dialog Series</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
                Dive into timeless commentaries, Sufi manuscripts, and contemporary reflections merging  wisdom with modern inquiry.
              </p>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <img src="assets/images/dialogs/10.png" alt="" className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 ">
                <Link href="/hardtalk">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/hardtalk" className="text-white" >Hard Talk</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
                Explore sacred diagrams, cosmic maps, and interactive infographics that visualize mystical concepts in scientifically resonant design.
              </p>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative group">
              <img src="assets/images/dialogs/11.png" alt="" className="w-full h-64 object-cover rounded-t-xl" />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                <Link href="/digitalbooks">
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3 ">
              
              <h3 className="text-xl font-semibold mt-2 text-gray-800">
                <Link href="/digitalbooks"className="text-white"> Digital Books</Link>
              </h3>
              <p className="text-sm text-gray-100 mt-2">
                A digital sanctum of classical texts, treatises, and modern explorations, bridging the written word with the ineffable Real.
              </p>
            </div>
          </div>

          {/* Blog Item 4 */}
          
        </div>
            </div>
          </div>
        </div>
      </section>

          

        
       
    </Layout>
  );
}