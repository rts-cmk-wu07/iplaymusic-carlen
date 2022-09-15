import ArtistOfTheMonth from "../comp/ArtistOfTheMonth"
import FeaturedArtists from "../comp/FeaturedArtists"
import TopArtistByCountry from "../comp/TopArtistByCountry"

export default function AllArtists() {
  return (
    <div>
      <ArtistOfTheMonth />
      <FeaturedArtists />
      <TopArtistByCountry />
    </div>
  )
}
