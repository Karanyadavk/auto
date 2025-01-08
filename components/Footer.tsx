import { FooterData } from "@/data/FooterData"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"



export const Footer = () => {
    return (
        <div className="bg-[#25252B] px-16 py-8">
            <div className="flex justify-between border-b border-gray-400 pt-16 pb-12">
                {FooterData.map((item, i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <h1 className="text-[#007AFF] font-bold">{item.title}</h1>
                        {item.links.length > 1 ? 
                            <div>
                                {item.links.map((link, index) => (
                                    <div className="flex items-center" key={index}>
                                        <h1 className="text-gray-300 font-bold">{link.day}</h1>
                                        <h1 className="text-white">{link.time}</h1>
                                    </div>
                                ))}
                            </div>
                            :
                            ""
                        }
                    </div>
                    
                ))}
            </div>
            <div className="flex items-center justify-between pt-4">
                <p className="text-gray-300 text-sm">Copyright © Sony's Auto</p>
                <div className="text-[#007AFF] flex items-center gap-2">
                        <div className="p-2 rounded-full bg-[#2F3234] hover:cursor-pointer hover:bg-[#2F3234]/90">
                            <Facebook fill="currentColor" size={16} />
                        </div>
                        <div className="p-2 rounded-full bg-[#2F3234] hover:cursor-pointer hover:bg-[#2F3234]/90">
                            <Twitter fill="currentColor" size={16} />
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
    )
}