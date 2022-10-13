/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import AVTR1 from "./assets/avatar1.jpg"
import AVTR2 from "./assets/avatar2.jpg"
import AVTR3 from "./assets/avatar3.jpg"
import AVTR4 from "./assets/avatar4.jpg"

import { useContext } from "react"
import ColorContext from "../context/colorContext"

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
    fontColor: css`
      color: ${colors.text};
    `,
  }

  return (
    <section id="testimonials">
      <div className="flex justify-between pr-6 pl-4 mt-4 mb-4 items-center">
        <h2 css={styles.fontColor} className="font-extrabold">
          New Releases
        </h2>
        <a className="font-extralight" css={styles.viewAll} href="/newreleases">
          View All
        </a>
      </div>
      {albums.map((items) => (
        <section css={styles.fontColor} className="flex pl-1" key={items.id}>
          <Link to={`/albumdetails/${items.id}`}>
            {items.images.length ? (
              <img
                src={items.images[0].url}
                className="w-20 overflow-hidden m-3 rounded-xl shadow-lg"
                alt=""
              />
            ) : (
              <div>No image Avalible</div>
            )}
            <label className="flex justify-between w-full items-center">
              <div className="flex-col w-40 ">
                <h2>{items.name}</h2>
                <p>{items.artists[0].name}</p>
              </div>
              <div className="flex pr-6 font-light text-sm">
                <p>{items.tracks.items.length} songs</p>
              </div>
            </label>
          </section>
        )
      })}
    </section>
  )
}

export default NewReleases
