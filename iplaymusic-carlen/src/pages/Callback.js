import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import TokenContext from "../context/TokenContext";

export default function Callback() {
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	var code = searchParams.get("code");
	var state = searchParams.get("state");

	var setTokenData = useContext(TokenContext)[1];
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
				setTokenData(response.data);
				navigate("/");
			});
	}, [setTokenData, code, state, navigate]);

	return <div>...</div>;
}
