import Links from "../comp/Links";

const Home = () => {
  return (
    <div>
      <Links link="/eventfeed" linkText="Event feed" />
      <Links link="/catagory" linkText="Catagory" />
      <Links link="/allalbums" linkText="All Albums" />
    </div>
  );
};

export default Home;
