/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import AVTR1 from "./assets/dog.jpeg"
import AVTR2 from "./assets/mountain.jpeg"
import AVTR3 from "./assets/walrus.jpeg"
import AVTR4 from "./assets/rain.jpeg"

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

const ArtistOfTheMonth = () => {
  const colors = useContext(ColorContext)
  const styles = {
    viewAll: css`
      color: ${colors.primary};
    `,
    fontColor: css`
      color: ${colors.text};
    `,
    artistName: css`
      color: #ee0979;
    `,
  }

  return (
    <section id="testimonials">
      <div className="flex justify-between pr-6 pl-4 mt-4 ">
        <h2 css={styles.fontColor} className="font-extrabold">
          Artist Of The Month
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
        slidesPerView={1.2}
        navigation
      >
        {data.map(({ artistCover, month, artist }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <div
                  className="w-72 h-48 z-10 flex relative
              overflow-hidden m-4 rounded-xl shadow-lg"
                >
                  <img
                    className="h-48 absolute z-10"
                    alt="artist Cover"
                    src={artistCover}
                  />
                  <div className="flex flex-col justify-center items-center w-full pt-20">
                    <p className="z-20 text-white text-md font-semibold pb-1">
                      {month}
                    </p>
                    <h2
                      css={styles.artistName}
                      className="z-20 text-2xl font-bold"
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

export default ArtistOfTheMonth
