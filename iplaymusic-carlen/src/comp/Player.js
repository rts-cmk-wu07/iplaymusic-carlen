/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  const musicTracks = [
    {
      name: "Mystery",
      src: "https://res.cloudinary.com/mp3",
    },
    {
      name: "Mystery",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
    {
      name: "Mystery",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
  ];

  const [isTracking, setIsTracking] = useState(0);
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
  };
  return (
    <div css={styles.audioplayer}>
      <AudioPlayer
        style={{background: "linear-gradient(#ee0979, #341931)" }}
        autoPlay={false}
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
  );
};

export default Player;
