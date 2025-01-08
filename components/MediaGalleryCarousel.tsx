"use client";

import { MediaGalleryCarouselData } from "@/data/CarouselData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const MediaGalleryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + MediaGalleryCarouselData.length) % MediaGalleryCarouselData.length);
    };

    const handleNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex + itemsPerPage) % MediaGalleryCarouselData.length);
    };

    const currentItems = MediaGalleryCarouselData.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="bg-[#232628] w-full h-2/3 py-12 text-white">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold">MEDIA GALLERY</h1>
                <div className="flex items-center gap-0.5">
                    <div className="h-2 w-12 rounded-tl-lg rounded-br-lg bg-orange-600"></div>
                    <div className="h-2 w-6 rounded-tl-lg rounded-br-lg bg-orange-600"></div>
                </div>
            </div>
            <div className="h-96 w-full flex flex-col items-center relative text-white">
                <div className="h-full w-full flex items-center gap-8 justify-center">
                    {currentItems.map((item, index) => (
                        <img key={index} src={item} alt={"image" + index} className="w-72 h-48 object-cover brightness-50" />
                    ))}
                </div>
                <div className="flex items-center gap-64">
                    <div className="hover:cursor-pointer hover:border-2 hover:border-[#007AFF] hover:text-[#007AFF]" onClick={handlePrev}>
                        <ChevronLeft size={48} />
                    </div>
                    <div className="hover:cursor-pointer hover:border-2 hover:border-[#007AFF] hover:text-[#007AFF]" onClick={handleNext}>
                        <ChevronRight size={48} />
                    </div>
                </div>
            </div>
        </div>
    );
};
