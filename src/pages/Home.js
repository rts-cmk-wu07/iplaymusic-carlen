import Links from "../comp/Links";
import styled from "styled-components";
// import { useContext } from "react";
// import TokenContext from "../context/TokenContext";

const Home = () => {
	// var [token] = useContext(TokenContext);

	return (
		<div className="pl-4 pr-4">
			<div className="flex flex-col justify-center items-center pb-6">
				<Logo className="pt-8 pb-8">
					<a>IPlayMusic</a>
				</Logo>
			</div>
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
				color="blue"
				link="/playlists"
				linkText="Playlists"
			/>
		</div>
	);
};

export default Home;
const Logo = styled.div`
	a {
		padding: 1rem 3.5rem;
		border-radius: 1.6rem;
		border: none;
		background-color: black;
		color: rgb(183, 183, 183);
		font-size: 1.4rem;
		cursor: pointer;
	}
`;
