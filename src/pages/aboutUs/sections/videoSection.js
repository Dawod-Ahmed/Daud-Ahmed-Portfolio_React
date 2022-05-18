import React from "react";
import { VideoPosterImage } from "../../../assets/assets";
import { Player, BigPlayButton } from "video-react";
const VideoSection = () => {
  return (
    <>
      <section className="video-section w-100">
        {" "}
        <Player
          playsInline
          poster={VideoPosterImage}
          src="Abouhttps://media.w3.org/2010/05/sintel/trailer_hd.mp4tSection"
        >
          {/* <BigPlayButton position="center" /> */}
        </Player>
      </section>
    </>
  );
};

export default VideoSection;
