import { useState } from "react";
import FeatherIcon from "feather-icons-react";

const Playbutton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  function buttonPlayer(e) {
    {
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <button
      className="rounded-full border border-solid border-primary-100 p-3 from-gradient-100 to-gradient-200 bg-gradient-to-r"
      onClick={buttonPlayer}
    >
      <FeatherIcon
        icon={isPlaying ? "pause" : "play"}
        fill="white"
        stroke="white"
      />
    </button>
  );
};

export default Playbutton;
