import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { setCookie } from "react-use-cookie";
import TokenContext from "../context/TokenContext";

export default function Callback() {
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const code = searchParams.get("code");
	const state = searchParams.get("state");

	const setTokenData = useContext(TokenContext);
	useEffect(() => {
		axios
			.post(
				"/.netlify/functions/token",
				JSON.stringify({
					code,
					state,
				})
			)
			.then((response) => {
				const resData = {
					accessToken: response.data.access_token,
					refreshToken: response.data.refresh_token,
					expiratedDate: new Date().getTime() + response.data.expires_in * 1000,
				};
				setTokenData(resData);

				setCookie("tokenData", JSON.stringify(resData));
				navigate("/");
			});
	});

	return <div>...</div>;
}
