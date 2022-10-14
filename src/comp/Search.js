import axios from "axios";
import { useContext, useState } from "react";
import TokenContext from "../context/TokenContext";
import Song from "./Song";
import IonIcon from "@reacticons/ionicons";
const Search = () => {
	const [searchKey, setSearchKey] = useState("");
	const [itemsData, SetItemsData] = useState([]);
	let [searching, setSearching] = useState(false);
	const [token] = useContext(TokenContext);
	const searchItems = async (e) => {
		e.preventDefault();
		const { data } = await axios.get("https://api.spotify.com/v1/search", {
			headers: { Authorization: "Bearer " + token.access_token },
			params: {
				q: searchKey,
				type: "track",
				market: "US",
			},
		});

		SetItemsData(data.tracks.items);
	};
	console.log(itemsData);

	const itemsList = () => {
		return itemsData.map((e) => (
			<div
				className="z-40 items-center flex justify-between pt-2"
				key={e.id}>
				<Song
					title={e.name}
					image={e.album.images[0].url}
					artist={e.artists[0].name}
				/>
			</div>
		));
	};

	return (
		<div>
			{searching ? (
				<div className="">
					<button
						onClick={() => {
							setSearching(false);
						}}
						className="relative z-50 left-[-5vw] top-5">
						<IonIcon
							name="close-circle-outline"
							size="20"
						/>
					</button>
					<div className="bg-black/50 inset-0 absolute z-40">
						<form
							className="flex justify-center mt-24"
							onSubmit={searchItems}>
							<input
								className="w-64 h-10 mb-10 relative p-2 z-40 rounded-lg"
								type="search"
								onChange={(e) => setSearchKey(e.target.value)}
							/>
						</form>
						<div className="flex flex-col bg-white relative z-40 h-[59vh] overflow-y-scroll ml-6 mr-6 rounded-lg">
							{itemsList()}
						</div>
					</div>
				</div>
			) : (
				<div
					onClick={() => {
						setSearching(true);
					}}
					className="mr-5 mt-5 flex items-center gap-1">
					<span>Search</span>

					<IonIcon name="search" />
				</div>
			)}
		</div>
	);
};

export default Search;
