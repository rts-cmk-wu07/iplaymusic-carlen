import Links from "../comp/Links"

const Home = () => {
  return (
    <div>
      <Links color="blue" link="/eventfeed" linkText="Event feed" />
      <Links color="green" link="/catagory" linkText="Catagory" />
      <Links color="red" link="/allalbums" linkText="All Albums" />
      <Links color="red" link="/albumdetails" linkText="Albums Details" />
      <Links color="blue" link="/playlists" linkText="Playlists" />
    </div>
  )
}

export default Home
