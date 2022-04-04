const BluredDiv = ({ icon, tw }) => {
  return (
    <div
      className={` f-ai-c aspect-square w-[60px] justify-center overflow-hidden	 rounded-full md:w-[120px]  ${tw}`}
    >
      <div className="absolute inset-0 -z-10 bg-slate-100/90 blur-md "></div>
      <img src={icon} alt="" style={{ width: "35%" }} />
    </div>
  );
};

export default BluredDiv;
