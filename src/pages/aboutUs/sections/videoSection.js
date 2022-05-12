import React from "react";
import { DaudImg } from "../../../assets/assets";
import { Player, BigPlayButton } from "video-react";
const VideoSection = () => {
  return (
    <>
      <section className="video-section w-100">
        {" "}
        <Player
          playsInline
          poster={DaudImg}
          src="Abouhttps://media.w3.org/2010/05/sintel/trailer_hd.mp4tSection"
        >
          <BigPlayButton position="center" />
        </Player>
      </section>
    </>
  );
};

export default VideoSection;
