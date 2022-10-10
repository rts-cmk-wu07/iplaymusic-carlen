/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

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
    top: "TOP 50",
    country: "US - UK",
    color: "green",
  },
  {
    top: "TOP 50",
    country: "GLOBAL",
    color: "blue",
  },
  {
    top: "TOP 50",
    country: "Spain",
    color: "red",
  },
  {
    top: "TOP 50",
    country: "Sweden",
    color: "yellow",
  },
  {
    top: "TOP 50",
    country: "Denmark",
    color: "green",
  },
  {
    top: "TOP 50",
    country: "Germany",
    color: "blue",
  },
  {
    top: "TOP 50",
    country: "China",
    color: "red",
  },
  {
    top: "TOP 50",
    country: "Ukraine",
    color: "yellow",
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
        slidesPerView={2}
        navigation
      >
        {data.map(({ top, country, color }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center pt-10">
                <div
                  className=" w-72 h-36 flex
              overflow-hidden rounded-xl shadow-lg"
                >
                  <div
                    className={` flex flex-col justify-center items-center w-full
                    ${
                      color === "green"
                        ? "bg-catColor-400"
                        : color === "blue"
                        ? "bg-catColor-100"
                        : color === "red"
                        ? "bg-catColor-800"
                        : color === "yellow"
                        ? "bg-catColor-700"
                        : "bg-catColor-600"
                    }`}
                  >
                    <p className="text-white text-2xl font-semibold">{top}</p>

                    <h2 className="text-white text-md font-light">{country}</h2>
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
