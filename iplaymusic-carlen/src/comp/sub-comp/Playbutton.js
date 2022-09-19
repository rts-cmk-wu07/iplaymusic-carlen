import { useState } from "react"
import IonIcon from "@reacticons/ionicons"

const Playbutton = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  function buttonPlayer(e) {
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      className="rounded-full border border-solid w-12 h-12 flex justify-center items-center border-primary-100 p-3 from-gradient-100 to-gradient-200 bg-gradient-to-r mr-4"
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
