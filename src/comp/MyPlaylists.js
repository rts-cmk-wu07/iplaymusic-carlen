/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";

import { useContext, useEffect, useState } from "react";

import ColorContext from "../context/colorContext";
import TokenContext from "../context/TokenContext";

import PlaylistsList from "./PlaylistsList";

const MyPlaylists = () => {
	const colors = useContext(ColorContext);
	const styles = {
		viewAll: css`
			color: ${colors.primary};
		`,
		fontColor: css`
			color: ${colors.text};
		`,
	};
	var [token] = useContext(TokenContext);
	var [playlists, setPlaylists] = useState([]);
	useEffect(
		function () {
			axios
				.get("https://api.spotify.com/v1/me/playlists", {
					headers: {
						Authorization: "Bearer " + token.access_token,
					},
				})

				.then((response) => {
					const data = response.data.items;
					setPlaylists(data);
				});
		},

		[token, setPlaylists]
	);

	return (
		<section id="testimonials">
			<div className="flex pr-6 pl-4 mt-4 mb-4 items-center">
				<h2
					css={styles.fontColor}
					className="font-extrabold">
					My Playlists
				</h2>
			</div>
			{playlists?.map((playlist) => {
				return (
					<>
						<PlaylistsList
							key={playlist.id}
							data={playlist}
						/>
					</>
				);
			})}
		</section>
	);
};

export default MyPlaylists;
