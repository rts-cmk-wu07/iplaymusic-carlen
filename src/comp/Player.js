/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "./Player.css";
import { useContext } from "react";
import ColorContext from "../context/colorContext";
import CurrentSongContext from "../context/currentSongContext";
import plate from "./assets/music-plate.png"

const Player = () => {
	const colors = useContext(ColorContext);
	const [currentSong, setCurrentSong] = useContext(CurrentSongContext);
	console.log(setCurrentSong);
	const [isPlaying, setIsPlaying] = useState(false);

	const musicTracks = [
		{
			name: "name",
			src: "https://github.com/cookieman2002/iplay-music-mp3/blob/main/Cantina%20Band.mp3?raw=true",
			creator: "adele",
			image:
				"https://c-fa.cdn.smule.com/rs-s80/arr/fa/94/0c221ed5-f8ce-43d9-abe0-01ea331e81d5_1024.jpg",
		},
		{
			name: "Mystery",
			src: "http://github.com/cookieman2002/iplay-music-mp3/blob/main/bensound-memories.mp3?raw=true",
			creator: "master oogway",
			image:
				"https://cdn.britannica.com/84/206384-050-00698723/Javan-gliding-tree-frog.jpg",
		},
	];

	const [isTracking, setIsTracking] = useState(0);
	const handleClickPrevious = () => {
		setIsTracking((currentTrack) =>
			currentTrack === 0 ? currentSong.length - 1 : currentTrack - 1
		);
	};
	const handleClickNext = () => {
		setIsTracking((currentTrack) =>
			currentTrack < currentSong.length - 1 ? currentTrack + 1 : 0
		);
	};

	const styles = {
		audioplayer: css`
			webkit-appearance: none;
			& audio {
				width: 100%;
				border-radius: 0px;
			}
			& audio::-webkit-media-controls-panel {
				border-radius: 0px;
				width: 100%;
			}
			& span {
				background-color: none;
			}
		`,
		overlay: css`
			background-color: ${colors.bg};
		`,
		overlaytext: css`
			color: ${colors.text};
		`,
	};

	function playerHandler() {
		setIsPlaying(!isPlaying);
		console.log(isPlaying);
	}

	return (
		<div
			css={styles.audioplayer}
			className="flex justify-center flex-col items-center">
			<span className="bg-none">
				<IonIcon
					onClick={playerHandler}
					name="chevron-up-outline"
				/>
			</span>

			<div
				css={styles.overlaytext}
				className={`${isPlaying ? "h-full " : null}`}>
				<div
					css={styles.overlay}
					className={`${
						isPlaying
							? "h-screen absolute z-30 w-screen top-0 flex justify-center flex-col items-center "
							: "hidden"
					} `}>
					<IonIcon
						name="close"
						className=" text-3xl top-0 left-0 absolute "
						onClick={() => playerHandler(!isPlaying)}
					/>
					<img
						src={plate}
						className="motion-safe:animate-spin rounded-full h-64 w-64 "
						alt=""
					/>
				</div>
				<div>
					<AudioPlayer
						css={styles.overlay}
						class="rhap_header rhap_footer rhap_container"
						className={`${isPlaying ? "mb-10" : ""}`}
						style={{
							width: "100vw",
						}}
						src={currentSong?.track?.preview_url}
						onPlay={currentSong?.track?.preview_url}
						header={`Now Playing "${currentSong?.track?.name}"`}
						footer={`From ${currentSong?.track?.artists[0].name}`}
						onClickPrevious={handleClickPrevious}
						onClickNext={handleClickNext}
						onEnded={handleClickNext}
						showSkipControls={true}
						showJumpControls={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Player;
