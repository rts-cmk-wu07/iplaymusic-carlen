import NewReleases from "../comp/NewReleases"
import SliderAlbums from "../comp/SliderAlbums"
import Heading from "../comp/sub-comp/Heading"

export default function AllAlbums() {
  return (
    <div>
      <Heading className="mb-3" text="All Albums"></Heading>
      <SliderAlbums />
      <NewReleases />
    </div>
  )
}
