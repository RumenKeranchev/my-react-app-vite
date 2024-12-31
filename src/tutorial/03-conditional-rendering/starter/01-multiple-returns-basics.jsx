import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	// useEffect that changes this condition after 2 seconds has to be above this return statement
	// because it will be called after 2 seconds and will change the value of isLoading to false
	// and then it will render the h2 tag.
	// if it is below the return statement then it will change the value of isLoading to false,
	// but it will not render the h2 tag because it is already rendered.
	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
