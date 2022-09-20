/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PlaylistsSongs from "../comp/PlaylistsSongs";
import SliderAlbums from "../comp/SliderAlbums";
import Heading from "../comp/sub-comp/Heading";

export default function Playlists() {
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
  return (
    <div>
      <Heading className="mb-3" text="Playlists"></Heading>
      <SliderAlbums css={styles.bgImage} />
      <PlaylistsSongs />
    </div>
  );
}
