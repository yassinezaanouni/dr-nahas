import Image from "next/image";
const FloatingCard = ({ icon, number, text, isInverted }) => {
  return (
    <div className=" f-ai-c w-full  gap-8 rounded-2xl bg-white py-6 px-8 font-black shadow-2xl shadow-black/30">
      <Image src={icon} width="41.5" height={"29"} />
      <p>
        <span className={`${isInverted ? "text-primary" : ""}`}>
          {number}++
        </span>{" "}
        <span className={`${!isInverted ? "text-primary" : ""}`}>{text}</span>
      </p>
    </div>
  );
};

export default FloatingCard;
