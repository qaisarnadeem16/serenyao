"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProductInfoTabsProps {
  description: string;
  review: {
    text: string;
    reviewer: string;
    role: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export default function ProductInfoTabs({ description, review }: ProductInfoTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "review">("description");

  const TabButton = ({ id, label }: { id: "description" | "review"; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-8 py-3 rounded-t-2xl border border-gray transition-colors ${
        activeTab === id
          ? "bg-white text-primary border-b-primary"
          : "bg-main-bg text-text border-b-gray/70"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="pb-20">
      <div className="container">
        <div className="flex gap-4 mb-6">
          <TabButton id="description" label="Description" />
          <TabButton id="review" label="Review" />
        </div>

        <div className="p-8 border-b border-gray">
          {activeTab === "description" ? (
            <>
              <h2 className="text-h4 text-primary mb-4">Description</h2>
              <p className="text-body1 text-text leading-relaxed">{description}</p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-orange text-orange" />
                  ))}
                </div>
              </div>
              <p className="text-body1 text-text leading-relaxed mb-10">{review.text}</p>

              <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
                <div className="flex-1 w-full">
                  {review.image ? (
                    <div className="w-full rounded-[160px] overflow-hidden bg-[#cfd6de]">
                      <Image
                        src={review.image.src}
                        alt={review.image.alt}
                        width={review.image.width}
                        height={review.image.height}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-[220px] bg-[#cfd6de] rounded-[160px]"></div>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-h5 text-primary font-semibold">{review.reviewer}</p>
                  <p className="text-body3 text-text">{review.role}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}


