"use client"

import { FaqData } from "@/data/FaqData";
import { ChevronDown, MoveRight } from "lucide-react";
import { useState } from "react";


export const Accordion = () => {
    const [openIndexes, setOpenIndexes] = useState(Array(FaqData.length).fill(false));

  const toggleAccordion = (index:number) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index];
    setOpenIndexes(newOpenIndexes);
  };

  return (
    <div className="w-full min-h-1/3 font-sans">
      <div className="flex flex-col">
        {FaqData.length > 0 &&
          FaqData.map((item, index) => (
            <div key={index} className=" border-t border-gray-300 flex flex-col">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-3 md:py-5 text-slate-800"
              >
                <div className="flex justify-center items-center gap-2 md:gap-8">
                  <div className={` ${openIndexes[index] ? "text-[#CC6118]" : "text-[#6C98E2]"}`}>
                    {item.icon}
                  </div>
                  <span className="text-[2.5vw] md:text-[1.5vw] font-bold">{item.question}</span>
                </div>
                <span
                  className={`text-slate-800 transition-transform duration-300 ${
                    openIndexes[index] ? "rotate-180" : ""
                  }`}
                >
                    <ChevronDown />
                </span>
              </button>
              <div className={`py-2 px-14 bg-white text-gray-800 ${openIndexes[index] ? "block" : "hidden"}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    )
}