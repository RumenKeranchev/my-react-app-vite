import { useNavContext } from "./Navbar";

const UserContainer = () => {
	const { user, login, logout } = useNavContext();

	return (
		<div>
			{user ? (
				<div
					style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
				>
					<span>
						Hello,{" "}
						<strong>
							<i>{user.name}</i>
						</strong>
					</span>
					<button className='btn' onClick={logout}>
						Logout
					</button>
				</div>
			) : (
				<div
					style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
				>
					<button className='btn' onClick={login}>
						Login
					</button>
				</div>
			)}
		</div>
	);
};

export default UserContainer;
