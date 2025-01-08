import Logo1 from "@/assets/Images/CompanyLogos/EdgeLogo.webp";
import Logo2 from "@/assets/Images/CompanyLogos/VolkerLogo.webp";
import { Car, Cog, KeyRound } from "lucide-react";


export const FaqData = [
    {
        icon: <Car fill="currentColor" /> ,
        question: "Do You Want to sell a car?",
        answer: "What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!"
    },
    {
        icon: <KeyRound fill="currentColor" /> ,
        question: "Are You looking for a new car?",
        answer: "Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are."
    },
    {
        icon: <Cog /> ,
        question: "How to schedule a service online?",
        answer: "Maecenas consectetur nulla dolor, ac porttitor nunc hendrerit quis. Proin vitae rhoncus purus, id commodo massa. Aliquam erat volutpat."
    },
]



export const MarqueeData = [
    Logo1,
    Logo2,
    Logo1,
    Logo2,
    Logo1,
    Logo2,
]