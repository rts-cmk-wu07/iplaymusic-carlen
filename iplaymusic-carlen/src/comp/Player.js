/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContext } from "react";
import ColorContext from "../context/colorContext"


const Player = () => {
  const colors = useContext(ColorContext)
  const [isPlaying, setIsPlaying] = useState(false);
  const musicTracks = [
    {
      name: "name",
      src: "https://github.com/cookieman2002/iplay-music-mp3/blob/main/Cantina%20Band.mp3?raw=true",
    },
    {
      name: "Mystery",
      src: "http://github.com/cookieman2002/iplay-music-mp3/blob/main/bensound-memories.mp3?raw=true",
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
        background-color: red;
        border-radius: 0px;
        width: 100%;
      }
      
    `,
    overlay: css`
    background-color: ${colors.bg};

    && span{
      color: ${colors.text}
    }
    `,
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
      {isPlaying && (
        <div css={styles.overlay} className="absolute z-10 bg-gradient-to-r top-0  w-screen h-screen">
          <IonIcon name="close" className="text-3xl"  onClick={() => playerHandler(!isPlaying)} />
          <div>

          </div>
        </div>
      )}
      <div>

      <span onClick={playerHandler}>Extend</span>
      <AudioPlayer
        style={{ background: "linear-gradient(#ee0979, #341931)" }}
        autoPlay
        src={musicTracks[isTracking].src}
        onPlay={musicTracks[isTracking].src}
        header={`now playing ${musicTracks[isTracking].name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        showSkipControls={true}
        showJumpControls={false}
        />
        </div>
    </div>
  );
};

export default Player;
