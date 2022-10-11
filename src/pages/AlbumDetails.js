/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import ColorContext from "../context/colorContext";
import axios from "axios";
import TagsRender from "../comp/sub-comp/TagsRender";
import Heading from "../comp/sub-comp/Heading";
import Song from "../comp/Song";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TokenContext from "../context/TokenContext";
const AlbumDetails = () => {
  const amoSongs = 12;
  const colors = useContext(ColorContext);
  const styles = {
    bgImage: css`
      padding: 12px;
      background: url(http://placekitten.com/351/300);
      height: 300px;
    `,
    theme: css`
      color: ${colors.text};
    `,
  };
  const { id } = useParams();
  const [singleAlbum, setSingleAlbum] = useState([]);
  var [token] = useContext(TokenContext);
  useEffect(
    function () {
      axios
        .get(`https://api.spotify.com/v1/albums/${id}`, {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => {
          const data = response.data;
          setSingleAlbum(data);
        })
        .catch((err) => console.error(err));
    },
    [token, setSingleAlbum]
  );
  return (
    <div>
      <div css={styles.bgImage}>
        <Heading text={singleAlbum.name} color="white" />
        <p className="text-white">{amoSongs} Songs</p>
      </div>
      <section className="p-3">
        <h3 css={styles.theme}>All songs</h3>
        <div className="flex flex-col w-full">
          <Song
            songtitle="Country road"
            songtime="3:24"
            artist="Billy Ray Cyrus"
          />
        </div>
      </section>
    </div>
  );
};

export default AlbumDetails;
