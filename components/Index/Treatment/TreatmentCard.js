import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect } from "react";
const TreatmentCard = ({ title, image, icon, className }) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="relative -z-10 h-[16.45rem] w-[15rem] overflow-hidden rounded-xl macbook:h-[25.25rem]  macbook:w-[23.125rem]">
        <Image src={image} alt={title} layout={"fill"} />
      </div>
      {/* <div className="absolute right-4 top-4 opacity-80  transition-all duration-700 group-hover:opacity-100 lg:opacity-0">
        <Image src={"/icons/treatment/plus.svg"} alt="title" height="38" width="38" />
      </div> */}

      <div>
        <div className="card f-ai-c absolute inset-x-5 top-1/2 -translate-y-1/2  gap-4 rounded-lg bg-white p-2 transition-all duration-500 md:gap-8">
          <div className="f-ai-c aspect-square w-[2.5rem] justify-center rounded-2xl bg-[#E3F8FF] p-2 md:w-[3.75rem]">
            <div className=" f-ai-c aspect-square w-20 justify-center rounded-full bg-primary/20 ">
              <Image src={icon} alt={title} width="20" height="21" />
            </div>
          </div>
          <h3 className="font-black text-primary">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
