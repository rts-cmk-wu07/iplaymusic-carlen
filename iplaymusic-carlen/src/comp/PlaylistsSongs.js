/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import AVTR1 from "./assets/avatar1.jpg"
import AVTR2 from "./assets/avatar2.jpg"
import AVTR3 from "./assets/avatar3.jpg"
import AVTR4 from "./assets/avatar4.jpg"

import { useContext, useEffect } from "react"
import { useStateProvider } from "../utils/StateProvider"
import { reducerCases } from "../utils/Constants"
import ColorContext from "../context/colorContext"

import Song from "./Song"

const data = [
  {
    albumCover: AVTR1,
    song: "Old Town Road",
    artist: "Billy Ray Cyrus",
    time: "3:58",
  },
  {
    albumCover: AVTR2,
    song: "Victory Lab",
    artist: "Nipsey Hussle",
    time: "2:46",
  },
  {
    albumCover: AVTR3,
    song: "Thank U, Next",
    artist: "Ariana Grande",
    time: "4:12",
  },
  {
    albumCover: AVTR4,
    song: "Death Race For Love",
    artist: "Juice WRLD",
    time: "3:37",
  },
  {
    albumCover: AVTR1,
    song: "Old Town Road",
    artist: "Billy Ray Cyrus",
    time: "3:12",
  },
  {
    albumCover: AVTR2,
    song: "Victory Lab",
    artist: "Nipsey Hussle",
    time: "4:12",
  },
  {
    albumCover: AVTR3,
    song: "Thank U, Next",
    artist: "Ariana Grande",
    time: "3:37",
  },
  {
    albumCover: AVTR4,
    song: "Death Race For Love",
    artist: "Juice WRLD",
    time: "3:12",
  },
]

const PlaylistsSongs = () => {
  const colors = useContext(ColorContext)
  const styles = {
    viewAll: css`
      color: ${colors.primary};
    `,
    fontColor: css`
      color: ${colors.text};
    `,
  }

  return (
    <section id="testimonials">
      <div className="flex pr-6 pl-4 mt-4 mb-4 items-center">
        <h2 css={styles.fontColor} className="font-extrabold">
          New Releases
        </h2>
      </div>

      {data.map(({ artist, song, time }, index) => {
        return (
          <section css={styles.fontColor} className="flex pl-1" key={index}>
            <label className="flex justify-between items-center">
              <div className="flex font-light text-sm">
                <Song songtitle={song} songtime={time} artist={artist} />
              </div>
            </label>
          </section>
        )
      })}
    </section>
  )
}

export default PlaylistsSongs
