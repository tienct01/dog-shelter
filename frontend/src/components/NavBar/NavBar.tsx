import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
	return (
		<>
			<ul className="navbar">
				<Link to="/"> Home </Link>
				<Link to="dogs"> Dogs </Link>
				<Link to="mydog"> My Dogs </Link>
			</ul>
		</>
	);
};
export default NavBar;
