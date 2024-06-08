import Image from "next/legacy/image";
const ServiceCard = ({ image, title, desc, isSelected }) => {
  return (
    <div
      className={`${
        isSelected ? "selected" : ""
      } card h-[390px] max-w-[259px] cursor-pointer overflow-hidden rounded-xl bg-white transition-all duration-300 `}
    >
      <Image src={image} alt={title} width={"259"} height={"156"} />
      <div className="   p-6">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <style jsx>
        {`
          h3 {
            @apply mb-2 font-bold;
            font-size: clamp(0.9rem, 0.9rem + 2vw, 1rem);
          }
          p {
            @apply text-light;
            font-size: clamp(0.9rem, 0.9rem + 2vw, 1rem);
          }
          .selected,
          .card:hover {
            @apply -translate-y-[2.5rem] shadow-xl;
          }
        `}
      </style>
    </div>
  );
};

export default ServiceCard;
