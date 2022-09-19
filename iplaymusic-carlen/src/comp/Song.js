import PlayButton from "../comp/sub-comp/Playbutton"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"
import ColorContext from "../context/colorContext"
const Song = ({ songtitle, songtime, artist }) => {
  const colors = useContext(ColorContext)
  const styles = {
    theme: css`
      color: ${colors.text};
    `,
  }
  return (
    <div className="flex pl-1 mb-4">
      <PlayButton
        className="w-20 m-3 
              "
      />
      <div className="flex justify-between w-72 items-center">
        <div className="flex-col w-40 ml-2">
          <span css={styles.theme}>{songtitle}</span>
          <span css={styles.theme}>{artist}</span>
        </div>
        <div className="flex pr-6 font-light text-sm">
          <span css={styles.theme}>{songtime}</span>
        </div>
      </div>
    </div>
  )
}

export default Song
