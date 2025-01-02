import { useState } from "react";

const ToggleChallenge = () => {
	const [showHeading, setShowHeading] = useState(false);
	const [showBamboozeled, setShowBamboozeled] = useState(false);

	return (
		<>
			<h2>toggle challenge</h2>
			<button
				className="btn"
				onClick={() => setShowHeading(!showHeading)}
			>
				Click me!
			</button>
			{showHeading && (
				<h3 onClick={() => setShowBamboozeled(!showBamboozeled)}>
					{showBamboozeled ? "Bamboozeled >:)" : "Works!"}
				</h3>
			)}
		</>
	);
};

export default ToggleChallenge;
