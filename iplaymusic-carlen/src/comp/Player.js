/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useCallback, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Player.css";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

const Player = () => {
  const colors = useContext(ColorContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const musicTracks = [
    {
      name: "name",
      src: "https://github.com/cookieman2002/iplay-music-mp3/blob/main/Cantina%20Band.mp3?raw=true",
      creator: "adele",
      image:
        "https://c-fa.cdn.smule.com/rs-s80/arr/fa/94/0c221ed5-f8ce-43d9-abe0-01ea331e81d5_1024.jpg",
    },

    {
      name: "Mystery",
      src: "http://github.com/cookieman2002/iplay-music-mp3/blob/main/bensound-memories.mp3?raw=true",
      creator: "master oogway",
      image:
        "https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg",
    },
  ];

  const [isTracking, setIsTracking] = useState(1);
  const handleClickPrevious = () => {
    setIsTracking((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };
  const handleClickNext = () => {
    setIsTracking((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  const styles = {
    audioplayer: css`
      webkit-appearance: none;
      & audio {
        width: 100%;
        border-radius: 0px;
      }
      & audio::-webkit-media-controls-panel {
        border-radius: 0px;
        width: 100%;
      }
      & span {
        background-color: none;
      }
    `,
    overlay: css`
      background-color: ${colors.bg};
    `,
    overlaytext: css`
      color: ${colors.text};
    `,
    visuContainer: css`
      display: flex;
      justify-content: center;
      align-items: center;
      /* filter: blur(5px) contrast(10);
      mix-blend-mode: screen; */
    `,
    visu: css`
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: #fff;
      transition: 0.5s;
      transform: rotateZ(180deg);
    `,
    visuImage: css`
      margin: 6rem 3.5rem;
    `,
  };

  function playerHandler() {
    setIsPlaying(!isPlaying);
    console.log(isPlaying);
  }
  // function useHookWithRefCallback() {
  //   const ref = useRef(null);
  //   const setRef = useCallback((node) => {
  //     if (ref.current) {
  //     }
  //     if (node) {
  //     }
  //     ref.current = node;
  //   }, []);
  // }
  // const btn = document.querySelector(".rhap_play-pause-button");
  // const audio = document.querySelector("audio");
  // const visu = document.getElementById("visu");
  // btn.addEventListener("click", (e) => {
  //   ctx.resume();
  //   audio.paused ? audio.play() : audio.pause();
  // });

  // window.AudioContext = window.AudioContext || window.webkitAudioContext;
  // const ctx = new window.AudioContext();
  // const analyser = ctx.createAnalyser();
  // const source = ctx.createMediaElementSource(audio);
  // source.connect(analyser);
  // source.connect(ctx.destination);
  // analyser.fftSize = 64;
  // const bufferLength = analyser.frequencyBinCount;

  // let dataArray = new Uint8Array(bufferLength);
  // let elements = [];
  // for (let i = 0; i < bufferLength; i++) {
  //   const element = document.createElement("span");
  //   element.classList.add("element");
  //   elements.push(element);
  //   visu.appendChild(element);
  // }
  // const clamp = (num, min, max) => {
  //   if (num >= max) return max;
  //   if (num <= min) return min;
  //   return num;
  // };
  // const update = () => {
  //   requestAnimationFrame(update);
  //   analyser.getByteFrequencyData(dataArray);
  //   for (let i = 0; i < bufferLength; i++) {
  //     let item = dataArray[i];
  //     item = item > 150 ? item / 1.5 : item * 1.5;
  //     elements[i].style.transform = `rotateZ(${
  //       i * (360 / bufferLength)
  //     }deg) translate(-50%, ${clamp(item, 100, 150)}px)`;
  //   }
  // };
  // update();

  return (
    <div
      css={styles.audioplayer}
      className="flex justify-center flex-col items-center"
    >
      <span className="bg-none">
        <IonIcon onClick={playerHandler} name="chevron-up-outline" />
      </span>

      <div
        css={styles.overlaytext}
        className={`${isPlaying ? "h-full " : null}`}
      >
        <div
          css={styles.overlay}
          className={`${
            isPlaying
              ? "h-screen absolute w-screen top-0 flex justify-center flex-col items-center "
              : "hidden"
          } `}
        >
          <IonIcon
            name="close"
            className=" text-3xl top-0 left-0 absolute "
            onClick={() => playerHandler(!isPlaying)}
          />
          <div css={styles.visuContainer}>
            <div css={styles.visu} className="reletive" id="visu">
              <img
                src={musicTracks[isTracking].image}
                className="motion-safe:animate-spin rounded-full h-48 w-48 "
                css={styles.visuImage}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <AudioPlayer
            className={`${isPlaying ? "mb-11" : ""}`}
            style={{
              background: "linear-gradient(#ee0979, #341931)",
              width: "100vw",
            }}
            autoPlay
            src={musicTracks[isTracking].src}
            onPlay={musicTracks[isTracking].src}
            header={`now playing ${musicTracks[isTracking].name}`}
            footer={`from ${musicTracks[isTracking].creator}`}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            showSkipControls={true}
            showJumpControls={false}
          />
        </div>
      </div>
    </div>
  );
};
export default Player;
