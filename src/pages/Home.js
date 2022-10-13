import Links from "../comp/Links";

// import { useContext } from "react";
// import TokenContext from "../context/TokenContext";

const Home = () => {
	// var [token] = useContext(TokenContext);

	return (
		<div className="pl-4 pr-4">
			<Links
				color="blue"
				link="/eventfeed"
				linkText="Event feed"
			/>
			<Links
				color="green"
				link="/catagory"
				linkText="Catagory"
			/>
			<Links
				color="red"
				link="/allalbums"
				linkText="All Albums"
			/>
			<Links
				color="green"
				link="/allartists"
				linkText="All Artists"
			/>
			<Links
				color="red"
				link="/albumdetails"
				linkText="Albums Details"
			/>
			<Links
				color="blue"
				link="/playlists"
				linkText="Playlists"
			/>
		</div>
	);
};

export default Home;
