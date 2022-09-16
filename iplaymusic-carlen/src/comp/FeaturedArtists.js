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
    artistCover: AVTR1,
    month: "September",
    artist: "Jonas Doggies",
  },
  {
    artistCover: AVTR2,
    month: "September",
    artist: "Jonas Broters",
  },
  {
    artistCover: AVTR3,
    month: "September",
    artist: "Jonas Brothers",
  },
  {
    artistCover: AVTR4,
    month: "September",
    artist: "Jonas Brothers",
  },
  {
    artistCover: AVTR1,
    month: "September",
    artist: "Jonas Brothers",
  },
  {
    artistCover: AVTR2,
    month: "September",
    artist: "Jonas Brothers",
  },
  {
    artistCover: AVTR3,
    month: "September",
    artist: "Jonas Brothers",
  },
  {
    artistCover: AVTR4,
    month: "September",
    artist: "Jonas Brothers",
  },
]

const FeaturedArtists = () => {
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
      <div className="flex justify-between pr-6 pl-4 mt-4 ">
        <h2 css={styles.fontColor} className="font-extrabold">
          Featured Artist
        </h2>
        <a
          className="font-extralight"
          css={styles.viewAll}
          href="/artistofthemonth"
        >
          View All
        </a>
      </div>

      <Swiper
        className="items-center"
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
      >
        {data.map(({ artistCover, month, artist }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <div
                  className=" flex flex-col 
               m-4"
                >
                  <img
                    className="rounded-full"
                    alt="artist Cover"
                    src={artistCover}
                  />
                  <div className="flex flex-col justify-center items-center w-full ">
                    <h2
                      css={styles.artistName}
                      className="text-md font-semibold"
                    >
                      {artist}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default FeaturedArtists
