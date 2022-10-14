/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Heading from "../comp/sub-comp/Heading";

import ColorContext from "../context/colorContext";
import CurrentSongContext from "../context/currentSongContext";
import TokenContext from "../context/TokenContext";

export default function PlaylistDetails() {
	const [currentSong, setCurrentSong] = useContext(CurrentSongContext);
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
	const handleCurrentSongClickEvent = (track) => {
		if (currentSong !== track) {
			setCurrentSong(track);
		} else {
			return null;
		}
	};
	return (
		<div>
			<Heading
				className="pl-3"
				text={playlist.name}
				color="white"
			/>
			<h3
				className="w-30 text-center text-m pt-10"
				css={styles.fontColor}>
				{playlist.description}
			</h3>
			<p
				className="text-center text-m"
				css={styles.fontColor}>
				{tracks?.map((track) => {
					return (
						<>
							<div
								onClick={() => handleCurrentSongClickEvent(track)}
								className="flex space-around gap-4 pl-3 pb-3 items-center">
								<img
									className="w-12 h-12 rounded-lg"
									src={track.track.album.images[0].url}
									alt="album cover"
								/>
								<div className="ml-2 flex flex-col">
									<span className="text-left text-sm w-60 text-ellipsis truncate">
										{track.track.name}
									</span>
									<span className="text-left text-xs">
										{track.track.artists[0].name}
									</span>
								</div>
								<div>
									<span className="text-sm">
										{msToMinutesAndSeconds(track.track.duration_ms)}
									</span>
								</div>
							</div>
						</>
					);
				})}
			</p>
		</div>
	);
}
