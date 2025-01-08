"use client"

import { TestimonialCarouselData } from "@/data/CarouselData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";



export const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : TestimonialCarouselData.length - 1));
    }

    const handleNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex < TestimonialCarouselData.length - 1 ? nextIndex + 1 : 0));
    }

    return (
        <div className="min-h-64 py-8 w-full flex flex-col items-center border-y border-gray-300 text-black">
            
            <div className="h-full w-full flex flex-col gap-8 text-sm text-gray-700">
                <h1>{TestimonialCarouselData[currentIndex].title}</h1>
                <p>{TestimonialCarouselData[currentIndex].description}</p>
                <div className="flex items-center gap-12 text-base">
                    <h1 className="uppercase">{TestimonialCarouselData[currentIndex].owner}</h1>
                    <div className="flex items-center gap-2 text-gray-400">
                        {TestimonialCarouselData[currentIndex].icon}
                        <h1 className="font-semibold">{TestimonialCarouselData[currentIndex].car}</h1>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 place-self-end">
                <div className="hover:cursor-pointer hover:text-[#007AFF]" onClick={handlePrev}>
                    <ChevronLeft className="" size={32} />
                </div>
                <div className="hover:cursor-pointer hover:text-[#007AFF]" onClick={handleNext}>
                    <ChevronRight className="" size={32} />
                </div>
            </div>
        </div>
    )
        
}