import { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "Jonny boy",
		age: 28,
		hobby: "Sail the seven seas",
	});

	const hangleClick = () => {
		setPerson({ name: "John Doe", age: 30, hobby: "Reading" });
	};

	return (
		<>
			<h2>useState object example</h2>
			<h2>{person.name}</h2>
			<h3>{person.age}</h3>
			<p>Enjoys: {person.hobby}</p>
			<button className="btn" onClick={hangleClick}>
				Change Name
			</button>
		</>
	);
};

export default UseStateObject;
