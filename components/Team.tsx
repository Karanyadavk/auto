import { TeamData } from "@/data/TeamData"
import { Phone, UserRound } from "lucide-react"



export const Team = () => {
    return (
        <div className="h-screen w-full bg-[#F0F2F5] px-16 flex flex-col py-16 justify-between">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold">OUR TEAM</h1>
                <div className="flex items-center gap-0.5">
                    <div className="h-2 w-12 rounded-tl-lg rounded-br-lg bg-orange-600"></div>
                    <div className="h-2 w-6 rounded-tl-lg rounded-br-lg bg-orange-600"></div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {TeamData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 group">
                        <div className="relative">
                            {item.image.length > 1 ? 
                                <img src={item.image} alt="team image" /> 
                                : 
                                <div className="flex items-center justify-center text-gray-400 py-24 group-hover:brightness-50 bg-gray-300">
                                    <UserRound size={96} fill="currentColor" stroke="none" />
                                </div>
                            }
                            <div className="hidden absolute left-1/2 -translate-x-1/2 py-6 w-3/4 bottom-0 group-hover:block">
                                {item.email.length > 1 ? <div className="px-2 py-1 bg-[#007bffab] text-center rounded-full hover:cursor-pointer">{item.email}</div> : ""}
                                {item.mobile.length > 1 ? 
                                    <div className="px-2 py-1 bg-white text-black rounded-full flex items-center gap-1 hover:cursor-pointer mt-2">
                                        <div className="flex text-[#007AFF] items-center p-1 border-2 border-[#007AFF] rounded-full">
                                            <Phone rotate={90} size={12} fill="#007AFF" />
                                        </div>{item.mobile}
                                    </div>
                                    : ""
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-center group-hover:bg-gray-800 py-6">
                            <h1 className="text-base text-black group-hover:text-white uppercase">{item.name}</h1>
                            <h1 className="text-sm group-hover:text-white text-gray-600">{item.position}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}