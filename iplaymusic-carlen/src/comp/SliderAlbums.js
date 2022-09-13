/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import React from "react"
import "./SliderAlbums.css"
import AVTR1 from "./assets/avatar1.jpg"
import AVTR2 from "./assets/avatar2.jpg"
import AVTR3 from "./assets/avatar3.jpg"
import AVTR4 from "./assets/avatar4.jpg"

import { useContext } from "react"
import ColorContext from "../context/colorContext"
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const data = [
  {
    albumCover: AVTR1,
  },
  {
    albumCover: AVTR2,
  },
  {
    albumCover: AVTR3,
  },
  {
    albumCover: AVTR4,
  },
  {
    albumCover: AVTR1,
  },
  {
    albumCover: AVTR2,
  },
  {
    albumCover: AVTR3,
  },
  {
    albumCover: AVTR4,
  },
]

const SliderAlbums = () => {
  const colors = useContext(ColorContext)
  const styles = {
    viewAll: css`
      color: ${colors.primary};
    `,
  }

  return (
    <section id="testimonials">
      <div className="flex justify-between mr-6 ml-4 mt-4">
        <h2 className="font-extrabold">Featured Albums</h2>
        <a css={styles.viewAll} href="/featuredalbums">
          View All
        </a>
      </div>

      <Swiper
        className=""
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ albumCover }, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="w-32 
              overflow-hidden m-4 rounded-xl"
              >
                <img src={albumCover} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default SliderAlbums
