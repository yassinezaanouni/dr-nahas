import Image from "next/legacy/image";

const FloatingCard = ({ icon, number, text, isInverted, tw, tw2 }) => {
  return (
    <div
      className={`f-ai-c gap-3 rounded-2xl bg-white p-4 text-xs font-black shadow-2xl shadow-black/30 md:gap-8 md:py-6 md:px-8 md:pr-16 ${tw} md:text-lg`}
    >
      <div className={` f-ai-c ${tw2}`}>
        <img src={icon} alt="" />
      </div>
      <p>
        <span className={`${isInverted ? "text-primary" : ""}`}>
          {number}++{isInverted ? <br></br> : <></>}
        </span>
        <span className={`${!isInverted ? "text-primary" : ""}`}> {text}</span>
      </p>
      <style jsx>
        {`
          p {
            font-size: clamp(0.8rem, 0.4rem + 2vw, 1.2rem);
          }
        `}
      </style>
    </div>
  );
};

export default FloatingCard;
