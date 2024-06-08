import Image from "next/legacy/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Dropdown = ({
  title,
  icon,
  imgs1,
  imgs2,
  steps,
  p1,
  p2,
  p3,
  h1,
  h2,
  h3,
  p4,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" text-start ">
      <div
        className="f-ai-c max-w-fit cursor-pointer gap-4 "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="w-fit rounded-full bg-primary/30 p-4    md:p-6   ">
          <Image src={icon} width="50" height="50" alt={`${title}`} />
        </div>
        <h2 className="text-2xl tracking-wider	 text-[#626263]">{title}</h2>
        <div className={`${isOpen ? "rotate-180" : " "} transition-all`}>
          <Image
            src="/widgets/arrow-up.svg"
            width="22"
            height="22"
            alt={`${title}`}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, translateY: "-10%" }}
            animate={{ opacity: 1, beforeChildren: true, translateY: "0%" }}
            // transition={{ type: "tween" }}
            exit={{ opacity: 0, translateY: "-5%" }}
            className="dropdown mt-6 flex flex-col gap-4 md:gap-8"
          >
            <p>{p1}</p>
            <p>{p2}</p>
            <div>
              <h3 className="text-xl font-bold text-[#626263]">{h1}</h3>
              <ul>
                {steps.map((step, index) => (
                  <li key={index}>
                    <p>{step}</p>
                  </li>
                ))}
              </ul>
              <div className="imgs f-ai-c mt-4 flex-wrap gap-6 md:gap-10">
                {imgs1.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width="263"
                    height="263"
                    alt={`${title}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#626263]">{h2}</h4>
              <p>{p3}</p>
              <div className="imgs f-ai-c mt-4 flex-wrap gap-6 md:gap-10">
                {imgs2.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    width="263"
                    height="263"
                    alt={`${title}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#626263]">{h3}</h4>
              <p>{p4}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
