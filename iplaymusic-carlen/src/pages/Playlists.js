/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PlaylistsSongs from "../comp/PlaylistsSongs";
import SliderPlaylists from "../comp/SliderPlaylists";
import Heading from "../comp/sub-comp/Heading";

export default function Playlists() {
  const styles = {
    bgClipPath: css`
      background: orange;

      z-index: -10;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 70%,
        72% 66%,
        58% 74%,
        31% 78%,
        14% 70%,
        0 61%
      );
    `,
  };
  return (
    <div>
      <Heading className="mb-3" text="Playlists"></Heading>
      <SliderPlaylists />
      <PlaylistsSongs />
    </div>
  );
}
