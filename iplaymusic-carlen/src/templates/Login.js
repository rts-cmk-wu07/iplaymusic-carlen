import querystring from "querystring";

const Login = () => {
	var parameters = querystring.stringify({
		response_type: "code",
		client_id: "160368485e05486f9e10b1ce62fd6616",
		scope:
			"user-read-private user-read-email user-library-read user-library-modify user-top-read user-follow-read user-read-recently-played user-read-currently-playing user-read-playback-state user-modify-playback-state user-read-playback-position ",
		REDIRECT_URI:
			process.env.NODE_ENV === "development"
				? "http://localhost:3000/callback"
				: "http://192.168.0.123:3000/callback",

		state: "34fFs29kd09235235235235235236734sadasada123421",
	});
	console.log(parameters);
	return (
		<div>
			<a href={`https://accounts.spotify.com/authorize?${parameters}`}>
				Login to spotify
			</a>
		</div>
	);
};
export default Login;
