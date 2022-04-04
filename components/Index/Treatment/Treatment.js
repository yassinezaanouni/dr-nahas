import { useRef, useState } from "react";
import TreatmentCard from "./TreatmentCard";

const Treatment = () => {
  const myVideo = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  function playPause() {
    if (myVideo.current.paused) {
      setIsPlaying(true);
      myVideo.current.play();
    } else {
      setIsPlaying(false);

      myVideo.current.pause();
    }
  }
  return (
    <section className="f-ai-c flex-col">
      <div
        className="vido-container group  relative cursor-pointer"
        onClick={() => {
          playPause();
        }}
      >
        <button
          className={`f-ai-c absolute ${
            isPlaying ? "opacity-0" : ""
          } top-[50%] left-[50%] z-10 aspect-square w-20 -translate-y-[50%] -translate-x-[50%] cursor-pointer justify-center rounded-full bg-slate-50/90
        backdrop-blur-sm  transition-all group-hover:opacity-100 md:w-24`}
        >
          <img
            src={`${isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}`}
            className={`${!isPlaying ? " translate-x-[10%]" : ""}`}
            alt="play"
          />
        </button>
        <video ref={myVideo} src="/treatment.mp4"></video>
      </div>
      <div className=" my-12 text-center lg:my-20">
        <h2 className="mb-4">Befor & After Treatment</h2>
        <p className="text-light">Some examples from lastest Dr nahas work</p>
      </div>
      <div className="f-ai-c flex-wrap justify-center gap-8">
        <TreatmentCard
          image="/img/treatment/treatment1.png"
          icon={"/icons/treatment/treatment2.svg"}
          title="Veneers"
        />{" "}
        <TreatmentCard
          image="/img/treatment/treatment1.png"
          icon={"/icons/treatment/treatment2.svg"}
          title="Veneers"
        />{" "}
        <TreatmentCard
          image="/img/treatment/treatment1.png"
          icon={"/icons/treatment/treatment2.svg"}
          title="Veneers"
        />{" "}
        <TreatmentCard
          image="/img/treatment/treatment1.png"
          icon={"/icons/treatment/treatment2.svg"}
          title="Veneers"
        />{" "}
        <TreatmentCard
          image="/img/treatment/treatment1.png"
          icon={"/icons/treatment/treatment2.svg"}
          title="Veneers"
        />{" "}
        <TreatmentCard
          image="/img/treatment/treatment1.png"
          icon={"/icons/treatment/treatment2.svg"}
          title="Veneers"
        />{" "}
      </div>
    </section>
  );
};

export default Treatment;
