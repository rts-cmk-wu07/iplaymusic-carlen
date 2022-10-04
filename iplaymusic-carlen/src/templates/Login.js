import querystring from "querystring";
import Randomizer from "react-randomizer";

const Login = () => {
	var state = Randomizer.randomNumber(1, 9999999999);
	var date = new Date();
	date = date.setSeconds(date.getSeconds() + 20);
	document.cookie = `state=${state}; expires=${date}`;

	var parameters = querystring.stringify({
		response_type: "code",
		client_id: "160368485e05486f9e10b1ce62fd6616",
		scope:
			"user-read-private user-read-email user-library-read user-library-modify user-top-read user-follow-read user-read-recently-played user-read-currently-playing user-read-playback-state user-modify-playback-state user-read-playback-position ",
		REDIRECT_URI:
			process.env.NODE_ENV === "production"
				? "http://iplaymusic-carlen.netlify.app/callback"
				: "http://localhost:8888/callback",

		state,
	});

	return (
		<div>
			<a href={`https://accounts.spotify.com/authorize?${parameters}`}>
				Login to spotify
			</a>
		</div>
	);
};
export default Login;
