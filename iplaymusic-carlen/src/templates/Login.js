import { useEffect, useState } from "react";

const Login = () => {
	const CLIENT_ID = "160368485e05486f9e10b1ce62fd6616";
	const REDIRECT_URI = "http://localhost:3000/";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize/";
	const RESPONSE_TYPE = "token";

	const [token, setToken] = useState("");

	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("acces_token"))
				.split("=")[1];

			window.location.hash = "";
			window.localStorage.setItem("token", token);
		}
		setToken(token);
	}, []);
	return (
		<div>
			<a
				href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
				Login to spotify
			</a>
		</div>
	);
};

export default Login;
