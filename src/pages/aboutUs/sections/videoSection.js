import React, { useState } from "react";
import { VideoPosterImage, VideoPlayBtn } from "../../../assets/assets";
import { Player, BigPlayButton } from "video-react";
const VideoSection = () => {
  // const [playBtnPosition, setPlayBtnPosition] = useState("");
  const [muteVideo, setmuteVideo] = useState(true);
  const [videoBackLayer, setVideoBackLayer] = useState(false);
  // const hidePlaybtn = () => {
  //   setPlayBtnPosition("video-secton-play-btn");
  //   console.log(setPlayBtnPosition);
  // };
  const closeVideo = () => {
    setmuteVideo(!muteVideo);
    console.log(muteVideo);
    setVideoBackLayer(!videoBackLayer);
  };

  return (
    <>
      <section className={`video-section w-100 `}>
        <button
          type="button"
          class="model-opening-icon"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          onClick={closeVideo}
        >
        
        </button>
      </section>
      <div
        className={`${
          videoBackLayer ? "d-block" : "d-none"
        }  video-back-layer position-fixed w-100`}
        onClick={closeVideo}
      ></div>
      <div
        class={`modal-dialog ${videoBackLayer ? "d-block" : "d-none"}`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close   fw-bold "
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeVideo}
            >
              
            </button>
          </div>
          <div class="modal-body p-0 d-flex justify-content-center align-items-center">
            <Player
              playsInline
              poster={VideoPosterImage}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              autoPlay={true}
              muted={muteVideo}
            >
              <BigPlayButton position="center" />
            </Player>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* <Player playsInline poster={VideoPosterImage} src="dsdsd">
        <BigPlayButton position="center" />
      </Player> */}
      {/* <div
        class={`modal fade ${videoBackLayer ? "d-block" : "d-none"}`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      > */}
    </>
  );
};

export default VideoSection;
