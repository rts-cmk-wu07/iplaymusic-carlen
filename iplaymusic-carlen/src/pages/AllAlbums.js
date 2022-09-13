import NewReleases from "../comp/NewReleases"
import SliderAlbums from "../comp/SliderAlbums"
import Heading from "../comp/sub-comp/Heading"

export default function AllAlbums() {
  return (
    <div>
      <Heading className="text-3xl font-bold" />
      <SliderAlbums />
      <NewReleases />
    </div>
  )
}
