import UserContainer from "./UserContainer";

const NavLinks = ({ user, login, logout }) => {
	return (
		<ul
			style={{
				textDecoration: "none",
				listStyle: "none",
				display: "flex",
				gap: "1rem",
				flexWrap: "wrap",
				justifyContent: "end",
				alignItems: "center",
			}}
		>
			<li>
				<a href='/'>Home</a>
			</li>
			<li>
				<a href='/'>About</a>
			</li>
			<li>
				<UserContainer user={user} login={login} logout={logout} />
			</li>
		</ul>
	);
};

export default NavLinks;
