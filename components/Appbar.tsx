import { CalendarCheck, Car, Facebook, Gauge, Instagram, MapPin, Phone, Search, Twitter, UserRound, Youtube } from "lucide-react"
import Logo from "@/assets/Images/logo.webp"
import { NavbarData } from "@/data/NavbarData"
import { Montserrat } from "next/font/google";


const mont = Montserrat({
    subsets: ['latin'], // Add appropriate subsets if needed
    weight: ['600', '700'], // Specify the weights you need
});

export const Appbar = () => {
    return (
        <div className="text-white">
            <div className="bg-[#232628] flex items-center justify-end text-xs gap-4 text-gray-400 p-2">
                <div className="flex items-center gap-0.5 hover:text-white hover:cursor-pointer">
                    <Phone fill="currentColor" stroke="transparent" size={16} />
                    <h1>+1 345-324-5773</h1>
                </div>
                <div className="flex items-center gap-0.5 hover:text-white hover:cursor-pointer">
                    <MapPin size={16} />
                    <h1>Box 844 George Town, Grand Cayman.</h1>
                </div>
                <div className="flex items-center gap-0.5 hover:text-white hover:cursor-pointer">
                    <CalendarCheck size={16} />
                    <h1>Mon - Sun 8.00 - 23.00</h1>
                </div>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-0.5 hover:text-white hover:cursor-pointer">
                        <UserRound fill="currentColor" stroke="transparent" size={16} />
                        <h1 className="">Login</h1>
                    </div>
                    <div className="flex items-center">
                        <h1 className="hover:text-white hover:cursor-pointer">Register</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#000000] flex items-center justify-between px-12 py-8">
                <img src={Logo.src} alt="logo" className='w-56' />
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center p-2 text-[#007AFF] border-2 border-[#007AFF] rounded-full hover:cursor-pointer">
                            <MapPin size={16} />
                        </div>
                        <h1 className="w-60 text-sm">P O Box 844, George Town, Grand Cayman, Cayman Islands.</h1>
                    </div>
                    <div className="flex items-center gap-4 hover:cursor-pointer">
                        <div className="flex text-[#007AFF] items-center p-2 border-2 border-[#007AFF] rounded-full">
                            <Phone rotate={90} size={16} fill="#007AFF" />
                        </div>
                        <div>
                            <p className="text-[#007AFF] text-sm">Sales</p>
                            <p className="text-lg font-bold">13453245773</p>
                        </div>
                    </div>
                    <div className="text-[#11F24D] flex items-center gap-2">
                        <div className="p-2 rounded-full bg-[#2F3234] hover:cursor-pointer hover:bg-[#2F3234]/90">
                            <Facebook fill="#11F24D" size={16} />
                        </div>
                        <div className="p-2 rounded-full bg-[#2F3234] hover:cursor-pointer hover:bg-[#2F3234]/90">
                            <Twitter fill="#11F24D" size={16} />
                        </div>
                        <div className="p-2 rounded-full bg-[#2F3234] hover:cursor-pointer hover:bg-[#2F3234]/90">
                            <Instagram size={16} />
                        </div>
                        <div className="p-2 rounded-full bg-[#2F3234] hover:cursor-pointer hover:bg-[#2F3234]/90">
                            <Youtube size={16} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#EAEDF0] text-black flex items-center justify-between">
                <div className="flex items-center">
                    {NavbarData.map((item, index) => (
                        <a
                            href={item.href}
                            key={index}
                            className={`${mont.className} text-xs font-normal text-black px-4 py-6 hover:bg-[#007AFF] transition-all ease-in-out`} // Apply font class here
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center px-4 py-5 gap-1 hover:bg-white hover:text-[#007AFF] transition-all ease-in-out hover:cursor-pointer">
                        <h1 className="text-xs">Compare</h1>
                        <Gauge />
                    </div>
                    <div className="flex items-center px-4 py-5 gap-1 hover:bg-white hover:text-[#007AFF] transition-all ease-in-out hover:cursor-pointer">
                        <h1 className="text-xs">Add Your Item</h1>
                        <Car />
                    </div>
                    <div className="flex items-center justify-center p-2 rounded-full bg-white hover:cursor-pointer hover:bg-[#007AFF] hover:text-white">
                        <UserRound size={16} />
                    </div>
                    <div className="flex items-center border-2 border-white rounded-full justify-center p-2 hover:cursor-pointer hover:bg-[#007AFF] hover:text-white">
                        <Search size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}