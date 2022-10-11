import PlaylistsSongs from "../comp/Playlists";
import SliderPlaylists from "../comp/SliderPlaylists";
import Heading from "../comp/sub-comp/Heading";
// import PlaylistsHeader from "../comp/sub-comp/PlaylistsHeader";

export default function Playlists() {
  return (
    <div>
      <Heading className="mb-3" text="Playlists"></Heading>
      {/* <PlaylistsHeader /> */}
      <SliderPlaylists />
      <PlaylistsSongs />
    </div>
  );
}
