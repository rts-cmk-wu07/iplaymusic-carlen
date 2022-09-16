import Links from "../comp/Links"

const Home = () => {
  return (
    <div>
      <Links color="blue" link="/eventfeed" linkText="Event feed" />
      <Links color="green" link="/catagory" linkText="Catagory" />
      <Links color="red" link="/allalbums" linkText="All Albums" />
      <Links link="/allartists" linkText="All Artists" />
    </div>
  )
}

export default Home
