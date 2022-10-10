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
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR2,
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR3,
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR4,
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR1,
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR2,
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR3,
    genre: "Top 50 Rock Ballads",
  },
  {
    albumCover: AVTR4,
    genre: "Top 50 Rock Ballads",
  },
]

const SliderPlaylists = () => {
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
    <section className="" id="">
      <div className="pl-24">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
        >
          {data.map(({ albumCover, genre }, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="w-32 
              overflow-hidden m-4 rounded-xl shadow-lg"
                >
                  <img alt="Album Cover" src={albumCover} />
                </div>
                <h2 css={styles.fontColor} className="font-extrabold">
                  {genre}
                </h2>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default SliderPlaylists
