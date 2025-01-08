'use client'

import { LandingCarouselData } from "@/data/CarouselData"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react";
import { Open_Sans } from "next/font/google";
import LandingText from "@/assets/Images/LandingText.webp"

const open = Open_Sans({
    subsets: ['latin'],
    weight: ['700'],
    display: "swap"
})

const SlideContent = ({ index }: { index: number }) => {
    switch (index) {
        case 0:
            return (
                <div className={`${open.className} flex flex-col items-center absolute top-48 px-36`}>
                    <h1 className={`text-7xl`}>WELCOME</h1>
                    <h1 className={`text-6xl text-[#ACD6F0]`}>TO</h1>
                    <img src={LandingText.src} alt="LandingText" />
                    <p className={`text-3xl pb-3 border-b-2 border-[#ACD6F0]`}>In the Cayman Islands.</p>
                </div>
            );
        case 1:
            return (
                <div className="absolute top-28 left-36">
                    <h1 className="text-[#6A4123] bg-[#FFEAB3] text-5xl p-1">We have the largest Selection of mostly High Quality</h1>
                </div>
            );
        case 2:
            return (
                <div className={`${open.className} absolute top-32 left-16`}>
                    <h1 className="text-6xl">Honda and Toyota Cars, <br /> Sports Utility Vehicles and Family <br /> Vans in Japan</h1>
                </div>
            );
        default:
            return (
                <div className={`${open.className} absolute top-32 right-24`}>
                    <h1 className="text-right text-7xl">Believe Me</h1>
                    <h1 className="text-7xl text-[#C7081B]">Few of them are really Good Deals</h1>
                </div>
            );
    }
}

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : LandingCarouselData.length - 1));
    }

    const handleNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex < LandingCarouselData.length - 1 ? nextIndex + 1 : 0));
    }

    return (
        <div className="h-screen w-full flex items-center relative text-white">
            <div className="absolute left-10 top-[50%] z-10 p-4 bg-black rounded-full hover:cursor-pointer" onClick={handlePrev}>
                <ChevronLeft className="" />
            </div>
            <div className="h-screen w-full relative">
                <img src={LandingCarouselData[currentIndex].image} alt={"image"} className="w-full h-full object-cover brightness-50" />
                <SlideContent index={currentIndex} />
            </div>
            <div className="absolute right-10 top-[50%] z-10 p-4 bg-black rounded-full hover:cursor-pointer" onClick={handleNext}>
                <ChevronRight className="" />
            </div>
        </div>
    )
}