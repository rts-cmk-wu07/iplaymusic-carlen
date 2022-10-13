import PlayButton from "../comp/sub-comp/Playbutton";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";

import ColorContext from "../context/colorContext";
const Song = ({ title, artist, duration, image }) => {
	const colors = useContext(ColorContext);
	const styles = {
		theme: css`
			color: ${colors.text};
		`,
	};
	return (
		<div className="flex pl-4 mb-4 z-30">
			<img src={image} className="h-16" alt="" />
			<div className="flex justify-between w-72 items-center">
				<div className="flex flex-col w-full ml-3">
					<span
						className="font-semibold pb-1"
						css={styles.theme}>
						{title}
					</span>
					<span
						className="pt-1"
						css={styles.theme}>
						{artist}
					</span>
				</div>
				<div className="flex pr-2 font-light text-sm">
					<span css={styles.theme}>{duration}</span>
				</div>
			</div>
		</div>
	);
};

export default Song;
