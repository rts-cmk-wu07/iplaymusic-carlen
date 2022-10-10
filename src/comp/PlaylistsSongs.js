/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useContext, useEffect, useState } from "react";
import ColorContext from "../context/colorContext";

import Song from "./Song";
import axios from "axios";
import TokenContext from "../context/TokenContext";

// const data = [
// 	{
// 		albumCover: AVTR1,
// 		song: "Old Town Road",
// 		artist: "Billy Ray Cyrus",
// 		time: "3:58",
// 	},
// 	{
// 		albumCover: AVTR2,
// 		song: "Victory Lab",
// 		artist: "Nipsey Hussle",
// 		time: "2:46",
// 	},
// 	{
// 		albumCover: AVTR3,
// 		song: "Thank U, Next",
// 		artist: "Ariana Grande",
// 		time: "4:12",
// 	},
// 	{
// 		albumCover: AVTR4,
// 		song: "Death Race For Love",
// 		artist: "Juice WRLD",
// 		time: "3:37",
// 	},
// 	{
// 		albumCover: AVTR1,
// 		song: "Old Town Road",
// 		artist: "Billy Ray Cyrus",
// 		time: "3:12",
// 	},
// 	{
// 		albumCover: AVTR2,
// 		song: "Victory Lab",
// 		artist: "Nipsey Hussle",
// 		time: "4:12",
// 	},
// 	{
// 		albumCover: AVTR3,
// 		song: "Thank U, Next",
// 		artist: "Ariana Grande",
// 		time: "3:37",
// 	},
// 	{
// 		albumCover: AVTR4,
// 		song: "Death Race For Love",
// 		artist: "Juice WRLD",
// 		time: "3:12",
// 	},
// ];

const PlaylistsSongs = (props) => {
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
	var [tracks, setTracks] = useState([]);
	useEffect(
		function () {
				axios
					.get("https://api.spotify.com/v1/me/playlists", {
						headers: {
							Authorization: "Bearer " + token.access_token,
						},
					})

					.then((response) => {
						const data = response.data;
						setTracks(data);
						console.log(response);
					});
		},

		[token, props.id, setTracks]
	);

	return (
		<section id="testimonials">
			<div className="flex pr-6 pl-4 mt-4 mb-4 items-center">
				<h2
					css={styles.fontColor}
					className="font-extrabold">
					New Releases
				</h2>
			</div>

			{tracks.items?.map(({ track }) => {
				return (
					<section
						css={styles.fontColor}
						className="flex pl-1">
						<label className="flex justify-between items-center">
							<div className="flex font-light text-sm">
								<Song
									key={track.id}
									id={track.id}
									artist={track.artists[0].name}
									title={track.name}
									duration={track.duration_ms}
								/>
							</div>
						</label>
					</section>
				);
			})}
		</section>
	);
};

export default PlaylistsSongs;
