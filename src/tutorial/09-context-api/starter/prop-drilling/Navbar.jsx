import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
	const [user, setUser] = useState(null);

	const handleLogin = () => {
		setUser({ name: "John Doe" });
	};

	const handleLogout = () => {
		setUser(null);
	};

	// props passed to NavLinks are for its child component
	// and wont be used in the NavLinks component itself and this
	// is a classic example of prop drilling
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 20px",
			}}
		>
			<h3 style={{ fontWeight: "bolder", margin: 0 }}>Context API</h3>
			<NavLinks user={user} login={handleLogin} logout={handleLogout} />
		</nav>
	);
};

export default Navbar;
