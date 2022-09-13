/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import AVTR1 from "./assets/avatar1.jpg"
import AVTR2 from "./assets/avatar2.jpg"
import AVTR3 from "./assets/avatar3.jpg"
import AVTR4 from "./assets/avatar4.jpg"

import { useContext } from "react"
import ColorContext from "../context/colorContext"
// import Swiper core and required modules
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const data = [
  {
    albumCover: AVTR1,
    albumName: "Old Town Road",
    artist: "Billy Ray Cyrus",
    amountSongs: "12",
  },
  {
    albumCover: AVTR2,
    albumName: "Victory Lab",
    artist: "Nipsey Hussle",
    amountSongs: "8",
  },
  {
    albumCover: AVTR3,
    albumName: "Thank U, Next",
    artist: "Ariana Grande",
    amountSongs: "13",
  },
  {
    albumCover: AVTR4,
    albumName: "Death Race For Love",
    artist: "Juice WRLD",
    amountSongs: "11",
  },
  {
    albumCover: AVTR1,
    albumName: "Old Town Road",
    artist: "Billy Ray Cyrus",
    amountSongs: "12",
  },
  {
    albumCover: AVTR2,
    albumName: "Victory Lab",
    artist: "Nipsey Hussle",
    amountSongs: "8",
  },
  {
    albumCover: AVTR3,
    albumName: "Thank U, Next",
    artist: "Ariana Grande",
    amountSongs: "13",
  },
  {
    albumCover: AVTR4,
    albumName: "Death Race For Love",
    artist: "Juice WRLD",
    amountSongs: "11",
  },
]

const NewReleases = () => {
  const colors = useContext(ColorContext)
  const styles = {
    viewAll: css`
      color: ${colors.primary};
    `,
  }

  return (
    <section id="testimonials">
      <div className="flex justify-between pr-6 pl-4 mt-4 mb-4 items-center">
        <h2 className="font-extrabold">New Releases</h2>
        <a className="font-extralight" css={styles.viewAll} href="/newreleases">
          View All
        </a>
      </div>

      {data.map(({ albumCover, artist, albumName, amountSongs }, index) => {
        return (
          <section className="flex pl-1" key={index}>
            <img
              className="w-20 
              overflow-hidden m-3 rounded-xl shadow-lg "
              src={albumCover}
            />
            <label className="flex justify-between w-full items-center">
              <div className="flex-col w-40 ">
                <h2 className="font-bold text-md pb-1">{albumName}</h2>
                <p className="font-light text-xs pt-1">{artist}</p>
              </div>
              <div className="flex pr-6 font-light text-sm">
                <p>{amountSongs} Songs</p>
              </div>
            </label>
          </section>
        )
      })}
    </section>
  )
}

export default NewReleases
