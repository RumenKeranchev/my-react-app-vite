import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const Card = ({ src, name, link }) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "auto 2fr",
				gridTemplateRows: "1fr 1fr",
				border: "1px solid #f7f7f7",
				alignItems: "center",
				justifyItems: "start",
				padding: "0.6rem",
				borderRadius: "5px",
				backgroundColor: "#f7f7f7",
			}}
		>
			<img
				src={src}
				style={{
					width: "50px",
					height: "50px",
					borderRadius: "50%",
					gridRow: "span 2",
					margin: "1rem",
					marginLeft: "0",
					border: "1px solid #000",
				}}
			/>
			<h4 style={{ margin: "0", fontWeight: "600" }}>{name}</h4>
			<a href={link} style={{ textDecoration: "none" }}>
				Profile
			</a>
		</div>
	);
};

const FetchData = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const dlUsers = await response.json();
				setUsers(dlUsers);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<section style={{ backgroundColor: "skyblue", padding: "1rem" }}>
			<h2>fetch data example</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns:
						"repeat(auto-fill, minmax(200px, 1fr))",
					gap: "0.5rem",
				}}
			>
				{users.map(({ id, avatar_url, html_url, login }) => (
					<Card
						key={id}
						src={avatar_url}
						name={login}
						link={html_url}
					/>
				))}
			</div>
		</section>
	);
};
export default FetchData;
