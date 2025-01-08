import { MarqueeData } from "@/data/FaqData"



export const Marquee = () => {
    return (
        <div className="bg-white p-8 w-full overflow-hidden">
            <div className="flex items-center gap-2 hover:cursor-grab">
                {MarqueeData.map((item, index) => (
                    <img src={item.src} key={index} alt="Company logo" className="w-52" />
                ))}
            </div>
        </div>
    )
}