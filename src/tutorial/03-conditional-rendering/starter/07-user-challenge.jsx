import { useState } from "react";

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const callback = (isLogin) => {
		if (isLogin) {
			setUser({ name: "john" });
		} else {
			setUser(null);
		}
	};

	return (
		<>
			<h2>user challenge</h2>
			{user ? (
				<LogedIn name={user.name} onClick={() => callback(false)} />
			) : (
				<LogedOut onClick={() => callback(true)} />
			)}
		</>
	);
};

const LogedIn = ({ name, onClick }) => {
	return (
		<>
			<h4>hello there, {name}</h4>
			<button className="btn" onClick={onClick}>
				Logout
			</button>
		</>
	);
};

const LogedOut = ({ onClick }) => {
	return (
		<>
			<h4>please login</h4>
			<button className="btn" onClick={onClick}>
				Login
			</button>
		</>
	);
};

export default UserChallenge;
