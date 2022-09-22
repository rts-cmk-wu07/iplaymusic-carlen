/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
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
      creator: "adele"
    },

    {
      name: "Mystery",
      src: "http://github.com/cookieman2002/iplay-music-mp3/blob/main/bensound-memories.mp3?raw=true",
      creator: "master oogway"
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
    `,
    overlay: css`
    background-color: ${colors.bg};
    `, 
    overlaytext: css`
    color: ${colors.text};
    `
    
  };
    
  function playerHandler() {
    setIsPlaying(!isPlaying);
    console.log(isPlaying);
  }
  return (
    <div
      css={styles.audioplayer}
      className="flex justify-center flex-col items-center"
    >
      <span onClick={playerHandler}>Extend</span>

      <div css={styles.overlaytext} className={`${isPlaying ? "h-full " : null}`}>
        <div css={styles.overlay} className={`${isPlaying ? "h-screen absolute w-screen top-0 flex justify-center flex-col items-center ": "hidden" } `}>
        <IonIcon name="close" className=" text-3xl top-0 left-0 absolute" onClick={() => playerHandler(!isPlaying)} />
        <img src="https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg" className="rounded-full h-32 w-32 " alt="" />
        </div>
        <div>

        <AudioPlayer
          style={{
            background: "linear-gradient(#ee0979, #341931)",
            width: "100vw"    

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
