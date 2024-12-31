import { useState, useEffect } from "react";

const MultipleEffects = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);

	// if you want to run the useEffect only once, you can pass an empty array as the second argument,
	// but if you want to run the useEffect only when the value changes, you can pass the value
	// as the second argument. if an effect can depend on multiple values, you can pass an array of them.
	useEffect(() => {
		console.log("hello from first useEffect");
	}, [value, secondValue]);

	useEffect(() => {
		console.log("hello from second useEffect");
	}, [secondValue]);

	return (
		<div>
			<h1>value : {value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				value
			</button>
			<h1>second value : {secondValue}</h1>
			<button
				className="btn"
				onClick={() => setSecondValue(secondValue + 1)}
			>
				second value
			</button>
		</div>
	);
};
export default MultipleEffects;
