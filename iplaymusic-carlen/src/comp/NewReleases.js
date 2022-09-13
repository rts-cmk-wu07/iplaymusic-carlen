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
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR2,
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR3,
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR4,
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR1,
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR2,
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR3,
    artist: "Billy Ray Cyrus",
  },
  {
    albumCover: AVTR4,
    artist: "Billy Ray Cyrus",
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
      <div className="flex justify-between mr-6 ml-4 mt-4 ">
        <h2 className="font-extrabold">New Releases</h2>
        <a css={styles.viewAll} href="/newreleases">
          View All
        </a>
      </div>

      {data.map(({ albumCover, artist }, index) => {
        return (
          <div className="flex" key={index}>
            <img
              className="w-16 
              overflow-hidden m-3 rounded-xl shadow-lg"
              src={albumCover}
            />
            <div className="flex justify-between w-full items-center">
              <div className="flex-col  w-40">
                <h2>asdan</h2>
                <p className="font-light text-xs">{artist}</p>
              </div>
              <div className="flex pr-4">
                <p>12 songs</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default NewReleases
