import { NavLink } from "react-router-dom";

const Links = ({ link, linkText, color }) => {
	return (
		<NavLink
			className={`flex p-3 rounded-lg mb-3 text-white
          ${
						color === "blue"
							? "bg-catColor-100"
							: color === "green"
							? "bg-catColor-400"
							: color === "red"
							? "bg-catColor-800"
							: "bg-catColor-100"
					}`}
			to={link}>
			{linkText}
		</NavLink>
	);
};

export default Links;
