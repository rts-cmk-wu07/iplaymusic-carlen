import ArtistOfTheMonth from "../comp/ArtistOfTheMonth"
import FeaturedArtists from "../comp/FeaturedArtists"
import Heading from "../comp/sub-comp/Heading"
import TopArtistByCountry from "../comp/TopArtistByCountry"

export default function AllArtists() {
  return (
    <div>
      <Heading className="mb-3" text="All Artists"></Heading>
      <ArtistOfTheMonth />
      <FeaturedArtists />
      <TopArtistByCountry />
    </div>
  )
}
