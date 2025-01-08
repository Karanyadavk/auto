import { Navbar } from "@/components/Navbar";
import { Carousel as CarouselLanding } from "@/components/ui/Carousel";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute top-0 left-0 z-10 w-full">
        <Navbar />
      </div>
      <CarouselLanding />
      <footer className='absolute bottom-0 w-full flex items-center justify-center gap-3 py-4 text-white text-sm'>
        <p>© 2023 Sony&apos;s Auto all rights reserved privacy</p>
        <div className='flex items-center gap-3'>
          <Facebook fill='#fff' stroke='transparent' size={24} className='hover:cursor-pointer' /> 
          <Instagram size={20} className='hover:cursor-pointer' /> 
          <Youtube size={24} className='hover:cursor-pointer' /> 
        </div>
      </footer>
    </div>
  );
}
