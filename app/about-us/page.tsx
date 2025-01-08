import { Appbar } from "@/components/Appbar";
import { Open_Sans } from "next/font/google";
import AboutImage1 from "@/assets/Images/About/AboutImage1.webp";
import AboutImage2 from "@/assets/Images/About/AboutImage2.webp";
import { Check } from "lucide-react";
import { MediaGalleryCarousel } from "@/components/MediaGalleryCarousel";
import { Accordion } from "@/components/ui/Accordion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Team } from "@/components/Team";
import { Marquee } from "@/components/Marquee";
import { Footer } from "@/components/Footer";


const open = Open_Sans({
    subsets: ['latin'],
    weight: ['700'],
    display: "swap"
})

export default function About() {
    return (
        <div>
            <div>
                <Appbar />
                <div className="bg-gray-700 h-60 w-full text-white flex flex-col gap-6 items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-4xl font-bold">About Us</h1>
                        <div className="flex items-center gap-0.5">
                            <div className="h-2 w-12 rounded-tl-lg rounded-br-lg bg-orange-600"></div>
                            <div className="h-2 w-6 rounded-tl-lg rounded-br-lg bg-orange-600"></div>
                        </div>
                    </div>
                    <p className="text-center text-sm">Customer service is not a <br />
                    department, it</p>
                </div>
                <div className="flex flex-col px-16">
                    <div className="px-4 py-2 border-b text-xs text-gray-500">
                        Sony&apos;s Auto {">"} About us
                    </div>
                    <div className="flex flex-col gap-20 py-24">
                        <div className="flex justify-between gap-8">
                            <img src={AboutImage1.src} alt="aboutImage1" />
                            <div className="flex flex-col gap-4">
                                <h1 className={`${open.className} text-3xl`}>WELCOME TO THE <span className="text-[#CC6119]">MOTORS</span></h1>
                                <p>Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.</p>
                                <p>We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.</p>
                                <p> <i> — MIKEY DIOKLES,</i> President of Motors</p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-8">
                            <div className="flex flex-col gap-4">
                                <h1 className={`${open.className} text-3xl border-b pb-4 border-gray-300`}>CORE VALUES</h1>
                                <h2>We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your lifestyle.</h2>
                                <div className="flex flex-col gap-4">
                                    {['Stress-free finance department.', "Robust selection of popular vehicles.", "350 offers on site, trusted by a community.", "Maintain your car to stay safe on the road", "We know how to handle a wide range of car services."].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Check size={20} stroke="#007AFF" />
                                            <h1>{item}</h1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <img src={AboutImage2.src} alt="aboutImage2" />
                        </div>
                    </div>
                </div>
                <MediaGalleryCarousel />
                <div className="flex w-full gap-4 px-16 py-16">
                    <div className="flex flex-col w-1/2">
                        <h1 className="text-[#242037] text-3xl font-bold mb-8">OUR ADVANTAGES</h1>
                        <Accordion />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <h1 className="text-[#242037] text-3xl font-bold mb-8">CUSTOMER TESTIMONIALS</h1>
                        <TestimonialCarousel />
                    </div>
                </div>
                <Team />
                <Marquee />
                <Footer />
            </div>
        </div>
    )
}
