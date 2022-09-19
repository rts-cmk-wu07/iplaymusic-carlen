import { useState } from "react"
import IonIcon from "@reacticons/ionicons"

const Playbutton = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  function buttonPlayer(e) {
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      className="flex justify-center items-center rounded-full w-12 h-12 border border-solid border-primary-100 p-3 from-gradient-100 to-gradient-200 bg-gradient-to-r"
      onClick={buttonPlayer}
    >
      <IonIcon className="text-white" name={isPlaying ? "pause" : "play"} />
      {/* <FeatherIcon
        icon={isPlaying ? "pause" : "play"}
        fill="white"
        stroke="white"
      /> */}
    </button>
  )
}

export default Playbutton
