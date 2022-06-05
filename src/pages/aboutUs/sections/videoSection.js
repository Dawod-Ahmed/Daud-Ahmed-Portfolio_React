import React, { useState } from "react";
import { VideoPosterImage, VideoPlayBtn } from "../../../assets/assets";
import { Player, BigPlayButton } from "video-react";

const VideoSection = () => {
  const [playBtnPosition, setPlayBtnPosition] = useState("");
  const hidePlaybtn = () => {
    setPlayBtnPosition("video-secton-play-btn");
    console.log(setPlayBtnPosition);
  };

  return (
    <>
      <section
        className={`video-section w-100 ${playBtnPosition}`}
        onClick={hidePlaybtn}
      >
        {" "}
        <Player
          playsInline
          poster={VideoPosterImage}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </section>
    </>
  );
};

export default VideoSection;
