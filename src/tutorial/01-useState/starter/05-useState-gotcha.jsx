import { useState } from "react";

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const hangleIncrease = () => {
    // asynchronously updating the state
    // clicking multiple times will increase the value by 1
		setTimeout(() => {
			console.log("clicks");
			setValue((currentState) => {
				return currentState + 1;
			});
		}, 3000);
    
    // // synchronously updating the state
    // // clicking multiple times will NOT increase the value by 1
    // setTimeout(() => {
		// 	console.log("clicks");
		// 	setValue(value + 1);
		// }, 3000);
	};

	return (
		<>
			<h2>useState "gotcha"</h2>
			<h3>{value}</h3>
			<button className="btn" onClick={hangleIncrease}>
				Increase
			</button>
		</>
	);
};

export default UseStateGotcha;
