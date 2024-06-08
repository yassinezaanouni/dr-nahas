const FloatingInfo = ({ title }) => {
  return (
    <div className="f-ai-c max-w-fit rounded-3xl bg-primary/10 p-[.3rem] pr-[2vw] ">
      <p className=" inline	 min-w-fit rounded-3xl	bg-primary py-1 px-5 text-center text-xs text-white">
        {title}
      </p>
      <p className=" px-6">
        Promo for dental care in <span>March </span>to <span>April</span>
      </p>
      <style jsx>
        {`
          p {
            font-size: clamp(0.5rem, 0.7rem + 2vw, 0.8rem);
          }
          p span {
            color: var(--clr-primary);
          }
        `}
      </style>
    </div>
  );
};

export default FloatingInfo;
