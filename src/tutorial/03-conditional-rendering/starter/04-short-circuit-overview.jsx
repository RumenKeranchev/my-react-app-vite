import { useState } from "react";

const ShortCircuitOverview = () => {
	// falsy
	const [text, setText] = useState("");

	// truthy
	const [name, setName] = useState("Jeremy Clarskon");

	return (
		<>
			<h2>short circuit overview</h2>
			<div>Falsy OR : {or(text)}</div>
			<div>Falsy AND: {and(text)}</div>
			<div>Truthy OR: {or(name)}</div>
			<div>Truthy AND: {and(name)}</div>
		</>
	);
};

function or(value) {
	return value || "default value";
}

function and(value) {
	return value && "default value";
}

export default ShortCircuitOverview;
