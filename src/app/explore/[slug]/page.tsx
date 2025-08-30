"use client";
import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Banner from "@/components/sections/home3/Banner";
import Features from "@/components/sections/home3/Features";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  subTitle?: string;
  title: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
};

type Block =
  | { type: "heroSlider"; slides: Slide[] }
  | { type: "featureList"; items: { text: string }[] }
  | { type: "richText"; html: string }
  | {
      type: "cardGrid";
      cards: { title: string; text?: string; image?: string; href?: string }[];
    }
  | { type: "sectionHeader"; tagline?: string; title: string; html?: string }
  | {
      type: "imageTextSplit";
      tagline?: string;
      html: string;
      image: string;
      imageAlt?: string;
      imageWidth?: number;
      imageHeight?: number;
      imagePosition?: "left" | "right";
    };

function BlockRenderer({ block }: { block: Block }) {
  if (block.type === "heroSlider")
    return <Banner slides={block.slides as any} />;
  if (block.type === "featureList")
    return <Features title="Why This Matters?" features={block.items} />;
  if (block.type === "sectionHeader") {
    return (
      <div className="text-left ">
        {block.tagline && (
          <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
            {block.tagline}
            <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
          </span>
        )}
        <h2 className="text-fixnix-darkpurple font-bold text-2xl py-2">
          {block.title}
        </h2>
        {block.html && (
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        )}
      </div>
    );
  }
  if (block.type === "imageTextSplit") {
    const content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
        <div>
          <div className="text-left ">
            {block.tagline && (
              <span className="relative inline-block text-sm sm:text-base md:text-lg text-fixnix-lightpurple font-bold uppercase z-[1]">
                {block.tagline}
                <span className="absolute top-[10px] left-[-50px] w-[35px] sm:w-[45px] h-[2px] bg-fixnix-lightpurple"></span>
              </span>
            )}
          </div>
          <div
            className="text-gray-700 mt-4"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden w-[350px] h-[350px]  bg-fixnix-lightpurple">
            <Image
              src={block.image}
              alt={block.imageAlt || "image"}
              width={block.imageWidth || 350}
              height={block.imageHeight || 350}
              className="w-[350px] h-[350px]"
            />
          </div>
        </div>
      </div>
    );
    return block.imagePosition === "left" ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-11 items-center">
        {content}
      </div>
    ) : (
      content
    );
  }
  if (block.type === "richText")
    return (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  if (block.type === "cardGrid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {block.cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              {card.image && (
                <Image
                  src={card.image.startsWith("/") ? card.image : card.image}
                  alt={card.title}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                <Link href={card.href || "#"} className="text-white text-2xl">
                  View Details
                </Link>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-center font-semibold text-fixnix-darkpurple mb-3">
                <Link
                  href={card.href || "#"}
                  className="text-fixnix-darkpurple hover:text-fixnix-lightpurple"
                >
                  {card.title}
                </Link>
              </h3>
              <div className="flex justify-center">
                <Link
                  href={card.href || "#"}
                  className="inline-block bg-fixnix-lightpurple text-white hover:bg-fixnix-darkpurple px-2 py-1 rounded-md"
                >
                  Unveil Insights
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function ExplorerPage() {
  const pathname = usePathname();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    const slug = parts[1];
    async function fetchData() {
      try {
        const res = await fetch(`/v1/content/explorer/${slug}`, {
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
      {data.blocks.find((b: any) => b.type === "heroSlider") && (
        <BlockRenderer
          block={data.blocks.find((b: any) => b.type === "heroSlider")}
        />
      )}
      <div className="py-16 bg-gray-100 text-left-mobile">
        <div className="container mx-auto px-4 space-y-10">
          {data.blocks
            .filter((b: any) => b.type !== "heroSlider")
            .map((b: Block, i: number) => (
              <BlockRenderer key={i} block={b} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
