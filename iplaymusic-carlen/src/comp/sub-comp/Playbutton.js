import { useState } from "react"
import Button from "./Button"

const Playbutton = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  function buttonPlayer(e) {
    {
      setIsPlaying(!isPlaying)
    }
  }

  return <Button icon="play" />
}

export default Playbutton
