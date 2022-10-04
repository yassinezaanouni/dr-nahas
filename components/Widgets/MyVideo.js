import React from "react";
import { useRef, useState } from "react";

const MyVideo = ({ url }) => {
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
      <video ref={myVideo} src={url} preload="metadata"></video>
    </div>
  );
};

export default MyVideo;
