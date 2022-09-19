import PlaylistsSongs from "../comp/PlaylistsSongs"
import SliderAlbums from "../comp/SliderAlbums"
import Heading from "../comp/sub-comp/Heading"

export default function Playlists() {
  return (
    <div>
      <Heading className="mb-3" text="Playlists"></Heading>
      <SliderAlbums />
      <PlaylistsSongs />
    </div>
  )
}
