/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

import TagsRender from "../comp/sub-comp/TagsRender";
import Heading from "../comp/sub-comp/Heading";
import Song from "../comp/Song";
const AlbumDetails = ({ amoSongs }) => {
  const colors = useContext(ColorContext);
  const styles = {
    bgImage: css`
      padding: 12px;
      background: url(http://placekitten.com/351/300);
      height: 300px;
    `,
  };
  return (
    <div>
      <div css={styles.bgImage}>
        <Heading text="Old time road" color="white" />
        <p>{amoSongs}</p>
        <span>genres hashtags</span>
        <div className="flex ">
          <TagsRender tagText="country" containerTag />
          <TagsRender tagText="country road" containerTag />
        </div>
      </div>
      <section className="p-3">
        <h3>All songs</h3>
        <div className="flex flex-col w-full">
          <Song
            songtitle="Country road"
            songtime="3:24"
            artist="Billy Ray Cyrus"
          />
          <Song
            songtitle="Country road"
            songtime="3:24"
            artist="Billy Ray Cyrus"
          />
          <Song
            songtitle="Country road"
            songtime="3:24"
            artist="Billy Ray Cyrus"
          />
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
