"use client";
import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/sections/home3/Banner";

type Slide = {
  subTitle?: string;
  title: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
};

type Block =
  | { type: "heroSlider"; slides: Slide[] }
  | { type: "sectionHeader"; tagline?: string; title: string; html?: string }
  | {
      type: "sidebar";
      searchPlaceholder?: string;
      categories: { label: string; href: string; active?: boolean }[];
    }
  | { type: "listToolbar"; showingText?: string; sortOptions?: string[] }
  | {
      type: "cardGrid";
      cards: { title: string; text?: string; image?: string; href?: string }[];
    }
  | { type: "richText"; html: string };

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "heroSlider") {
    return <Banner slides={(block as any).slides} />;
  }
  if (block.type === "sectionHeader") {
    return (
      <div className="text-center">
        {block.tagline && (
          <span className="relative inline-block text-[18px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
            {block.tagline}
            <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
            <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
        )}
        <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">
          {block.title}
        </h2>
        {block.html && (
          <div
            className="pt-[10px] text-left-mobile text-gray-600"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        )}
      </div>
    );
  }
  if (block.type === "sidebar") {
    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg  bg-fixnix-lightpurple shadow-sm relative">
          <input
            type="text"
            placeholder={block.searchPlaceholder || "Search"}
            className="w-full p-2 pr-10  border rounded-lg bg-fixnix-lightpurple "
          />
          <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {block.categories.map((c, idx) => (
              <li key={idx} className={c.active ? "font-bold" : undefined}>
                <Link
                  href={c.href}
                  className="hover:text-fixnix-darkpurple text-fixnix-lightpurple font-semibold hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  if (block.type === "listToolbar") {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
        <p>{block.showingText || "Showing results"}</p>
        <select className="p-2 border bg-gray-100 rounded-lg">
          {(block.sortOptions || ["Sort by popular", "Sort by Ratings"]).map(
            (opt, idx) => (
              <option key={idx}>{opt}</option>
            )
          )}
        </select>
      </div>
    );
  }
  if (block.type === "cardGrid") {
    return (
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {block.cards.map((card, index) => (
          <div
            key={index}
            className="bg-fixnix-lightpurple shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative group">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 opacity-0 group-hover:opacity-100 transition duration-700 bg-fixnix-lightpurple">
                <Link href={card.href || "#"}>
                  <i className="fa fa-plus text-white text-2xl"></i>
                </Link>
              </div>
            </div>
            <div className="px-4 py-3">
              <h3 className="text-xl font-semibold mt-2 text-white">
                <Link href={card.href || "#"} className="text-white">
                  {card.title}
                </Link>
              </h3>
              {card.text && (
                <p className="text-sm text-gray-100 mt-2 italic">{card.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "richText")
    return (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  return null;
}

export default function AcademyPage() {
  const pathname = usePathname();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    const slug = parts[1];
    async function fetchData() {
      try {
        const res = await fetch(`/v1/content/academy/${slug}`, {
          cache: "no-store",
        });
        const json = await res.json();
        setData(json.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchData();
  }, [pathname]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!data) return <div className="p-8">Not found</div>;

  return (
    <Layout headerStyle={2} footerStyle={1}>
      {/* Render hero slider first if provided */}
      {data.blocks.find((b: any) => b.type === "heroSlider") && (
        <BlockRenderer
          block={data.blocks.find((b: any) => b.type === "heroSlider")}
        />
      )}

      <section className="team-top text-left-mobile">
        <div className="container mx-auto px-4 text-left-mobile space-y-6 mt-[40px]">
          {/* Section header, if present */}
          {data.blocks
            .filter((b: any) => b.type === "sectionHeader")
            .map((b: Block, i: number) => (
              <BlockRenderer key={`header-${i}`} block={b} />
            ))}

          {/* Two-column content: sidebar + main */}
          <section className="!py-12">
            <div className="container mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar column */}
                <div className="md:col-span-1 space-y-6">
                  {data.blocks
                    .filter((b: any) => b.type === "sidebar")
                    .map((b: Block, i: number) => (
                      <BlockRenderer key={`sidebar-${i}`} block={b} />
                    ))}
                </div>

                {/* Main content column */}
                <div className="md:col-span-3 space-y-6">
                  {data.blocks
                    .filter(
                      (b: any) =>
                        b.type === "listToolbar" ||
                        b.type === "richText" ||
                        b.type === "cardGrid"
                    )
                    .map((b: Block, i: number) => (
                      <BlockRenderer key={`main-${i}`} block={b} />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
