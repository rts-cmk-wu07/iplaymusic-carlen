/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

	const { playlistId } = useParams();

	var [token] = useContext(TokenContext);
	var [playlist, setPlaylist] = useState([]);
	var [tracks, setTracks] = useState([]);

	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/playlists/" + playlistId + "/", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					const data = response.data.items;
					setPlaylist(data);
				});
		},
		[token, playlistId, setPlaylist]
	);
	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})
				.then((response) => {
					const data = response.data.items;
					setTracks(data);
				});
		},
		[token, playlistId, setTracks]
	);
	console.log("playlist", playlist);
	console.log("tracks", tracks);
	console.log("token", token);
	return (
		<div>
			<h3
				className="text-center text-lg"
				css={styles.fontColor}>
				{/* {data.name} */}
			</h3>
			<p
				className="text-center text-m"
				css={styles.fontColor}>
				{/* By: {data.owner.display_name} */}
			</p>
		</div>
	);
}
