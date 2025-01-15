import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

// Create a context that will be used to pass the user
// state and login/logout functions to the UserContainer component,
// bypassing the NavLinks component (the values of the context are available to
// all child components of Navbar).
export const NavContext = createContext();

// Create a custom hook that will be used to consume the context
// that helps importing the useContext and the NavContext together.
export const useNavContext = () => useContext(NavContext);

const Navbar = () => {
	const [user, setUser] = useState(null);

	const handleLogin = () => {
		setUser({ name: "John Doe" });
	};

	const handleLogout = () => {
		setUser(null);
	};

	return (
		// the main body must be wrapped in the context provider to pass the
		// user state and login/logout functions to the UserContainer component
		<NavContext.Provider
			value={{ user, login: handleLogin, logout: handleLogout }}
		>
			<nav
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "10px 20px",
				}}
			>
				<h3 style={{ fontWeight: "bolder", margin: 0 }}>Context API</h3>
				<NavLinks />
			</nav>
		</NavContext.Provider>
	);
};

export default Navbar;
