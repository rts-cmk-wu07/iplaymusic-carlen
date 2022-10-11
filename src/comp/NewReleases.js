/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AVTR1 from "./assets/avatar1.jpg";
import AVTR2 from "./assets/avatar2.jpg";
import AVTR3 from "./assets/avatar3.jpg";
import AVTR4 from "./assets/avatar4.jpg";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ColorContext from "../context/colorContext";
import TokenContext from "../context/TokenContext";
import { Link } from "react-router-dom";

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
];

const NewReleases = () => {
  const colors = useContext(ColorContext);
  const styles = {
    viewAll: css`
      color: ${colors.primary};
    `,
    fontColor: css`
      color: ${colors.text};
    `,
  };
  var [token] = useContext(TokenContext);
  console.log(token);
  const [albums, setAlbums] = useState([]);
  useEffect(
    function () {
      axios

        .get(
          "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
          {
            headers: {
              Authorization: "Bearer " + token.access_token,
            },
          }
        )
        .then((response) => {
          const data = response.data.albums;
          setAlbums(data);
        
        })
        .catch((err) => console.error(err));
    },
    [token, setAlbums]
  );

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
          </Link>

        </section>
      ))}
    </section>
  );
};

export default NewReleases;
