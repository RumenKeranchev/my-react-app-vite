import { useState } from "react";
import { data, people } from "../../../data";

const Person = ({ name, handleClick }) => {
	return (
		<div
			style={{
				border: "1px solid black",
				padding: "1rem",
			}}
		>
			<h4 style={{ fontWeight: "bold" }}>{name}</h4>
			<button onClick={handleClick} className="btn">
				remove
			</button>
		</div>
	);
};

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	const handleRemoveClick = (id) => {
		setPeople(people.filter((f) => f.id !== id));
	};

	const hangleClearAll = () => {
		setPeople([]);
	};

	return (
		<>
			<h2>useState array example</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "1rem",
				}}
			>
				{people.map(({ id, name }) => (
					<Person
						key={id}
						name={name}
						handleClick={() => handleRemoveClick(id)}
					/>
				))}
			</div>
			<button
				className="btn"
				onClick={hangleClearAll}
				style={{ marginTop: "1rem" }}
			>
				clear items
			</button>
		</>
	);
};

export default UseStateArray;
