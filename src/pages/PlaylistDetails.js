/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "../comp/sub-comp/Heading";

import ColorContext from "../context/colorContext";
import TokenContext from "../context/TokenContext";

export default function PlaylistDetails() {
	const colors = useContext(ColorContext);
	const styles = {
		viewAll: css`
			color: ${colors.primary};
		`,
		fontColor: css`
			color: ${colors.text};
		`,
	};

	const { id } = useParams();

	var [token] = useContext(TokenContext);
	var [playlist, setPlaylist] = useState([]);
	var [tracks, setTracks] = useState([]);
	const msToMinutesAndSeconds = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	};
	useEffect(
		function () {
			axios
				.get(`https://api.spotify.com/v1/playlists/${id}`, {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					const data = response.data;
					setPlaylist(data);
				})
				.catch((error) => console.log(error));
		},
		[token, id, setPlaylist]
	);
	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/playlists/" + id + "/tracks", {
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
	console.log("playlist", playlist);
	console.log("tracks", tracks);
	return (
		<div>
			<Heading
				className="pl-3"
				text={playlist.name}
				color="white"
			/>
			<h3
				className="text-center text-lg"
				css={styles.fontColor}>
				{playlist.description}
			</h3>
			<p
				className="text-center text-m"
				css={styles.fontColor}>
				{tracks?.map((track) => {
					return (
						<>
							<div className="flex">
								<img
									className="w-10 h-10 rounded-lg"
									src={track.track.album.images[0].url}
									alt="album cover"
								/>
								<div className="ml-3">
									<p className="text-lg">{track.track.name}</p>
									<p className="text-sm">{track.track.artists[0].name}</p>

									<p className="text-sm">
										{msToMinutesAndSeconds(track.track.duration_ms)}
									</p>

									<p className="text-sm">{track.track.album.name}</p>

									<p className="text-sm">{track.track.album.release_date}</p>
								</div>
							</div>
						</>
					);
				})}
			</p>
		</div>
	);
}

{
	/* <div>
									<img
										className="scale-50 rounded-lg -mt-8"
										src={track.track.album.images[0].url}
										alt="album cover"
									/>
								</div>
								<div className="ml-3">
								<p>{track.track.name}</p></div>
								<p>{track.track.album.name}</p>
								<p>{track.track.artists[0].name}</p>

								<p>{msToMinutesAndSeconds(track.track.duration_ms)}</p> */
}
