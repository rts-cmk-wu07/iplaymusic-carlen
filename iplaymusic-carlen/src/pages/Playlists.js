import PlaylistsSongs from "../comp/PlaylistsSongs"
import Heading from "../comp/sub-comp/Heading"

export default function Playlists() {
  return (
    <div>
      <Heading className=" mb-3" text="Playlists"></Heading>
      <PlaylistsSongs />
    </div>
  )
}
