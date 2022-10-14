/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useState } from "react";
import ColorContext from "../context/colorContext";
import axios from "axios";
import Heading from "../comp/sub-comp/Heading";
import Song from "../comp/Song";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TokenContext from "../context/TokenContext";
import CurrentSongContext from "../context/currentSongContext";
const AlbumDetails = () => {
	const [currentSong, setCurrentSong] = useContext(CurrentSongContext);
	var [tracks, setTracks] = useState([]);
	const amoSongs = 12;
	const colors = useContext(ColorContext);
	const { id } = useParams();
	const [singleAlbum, setSingleAlbum] = useState([]);
	var [token] = useContext(TokenContext);
	const styles = {
		bgImage: css`
			padding: 12px;
			background: url(http://placekitten.com/351/300);
			height: 300px;
		`,
		theme: css`
			color: ${colors.text};
		`,
	};
	useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/albums/${id}`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					const data = response.data;
					setSingleAlbum(data);
					console.log(data);
				})
				.catch((err) => console.error(err));
		},
		[token, setSingleAlbum]
	);
	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/albums/" + id + "/tracks", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					const data = response.data.items;
					setTracks(data);
				});
		},
		[token, id, setTracks]
	);
	
	return (
		<div>
			<div className="relative">
				<Heading
					text={singleAlbum.name}
					color="white"
				/>
				<p className="text-white absolute z-10 top-20">
					{singleAlbum.total_tracks} Songs
				</p>
				{singleAlbum.images && (
					<img
						src={singleAlbum.images[0]?.url}
						className="h-128 z-0 top-0 -mt-24"
						alt=""
					/>
				)}
			</div>
			<section className="p-3 relative z-0">
				<h3 css={styles.theme}>All songs</h3>
				<div className="flex flex-col w-full">
					{singleAlbum.tracks &&
						singleAlbum.tracks.items.map((track) => (
							<>
								{console.log(track)}
								<Song
									
									title={track.name}
									artist={track.artists && track.artists[0].name}
									image={singleAlbum.images && singleAlbum.images[0].url}
								/>
							</>
						))}
				</div>
			</section>
		</div>
	);
};

export default AlbumDetails;
