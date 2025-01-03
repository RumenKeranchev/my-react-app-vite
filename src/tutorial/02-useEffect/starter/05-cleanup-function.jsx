import { useEffect, useState } from "react";

const CleanupFunction = () => {
	const [flag, setFlag] = useState(false);

	return (
		<>
			<h2>cleanup function</h2>

			<button className='btn' onClick={() => setFlag(!flag)}>
				Click me!
			</button>

			{flag && <Heading />}
		</>
	);
};

const Heading = () => {
	useEffect(() => {
		console.log("Heading component mounted");

		// Interval will run, even if component is unmounted, so we need to clean it up
		const id = setInterval(() => {
			console.log("Interval is running");
		}, 1000);

		// Cleanup function
		return () => {
			clearInterval(id);
			console.log("cleanup function executed");
		};
	}, []);

	return (
		<h3
			style={{
				textTransform: "none",
				backgroundColor: "#ccc",
				margin: "1rem",
			}}
		>
			Component is mounted each time is rendered!
		</h3>
	);
};

export default CleanupFunction;
