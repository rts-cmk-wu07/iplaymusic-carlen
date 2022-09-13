// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react"

import React from "react"
import "./SliderAlbums.css"
import AVTR1 from "./assets/avatar1.jpg"
import AVTR2 from "./assets/avatar2.jpg"
import AVTR3 from "./assets/avatar3.jpg"
import AVTR4 from "./assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from "swiper"

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
]

const SliderAlbums = () => {
  return (
    <section id="testimonials">
      <h2>Featured Albums</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {data.map(({ albumCover }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
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
