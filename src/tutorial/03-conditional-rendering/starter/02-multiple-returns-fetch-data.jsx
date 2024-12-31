import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				setIsError(true);
				setIsLoading(false);
				return;
			}
			const user = await response.json();
			setUser(user);
		} catch (error) {
			setIsError(true);
			console.log(error);
		}
		setIsLoading(false);
	};

	// in Vite, the fetchData can be created outside of the useEffect and used like below,
	// howeven with CRA, it will throw an error, needing to provide the fetchData function
	// as a dependency to the useEffect hook, which will create an infinite loop since state
	// changes will trigger the useEffect to run again, which will call the fetchData function
	useEffect(() => {
		setTimeout(() => fetchData(), 1000);
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>You done goofed.</h2>;
	}

	// Destructure the user object MUST happen after all the conditional checks
	// else it will throw an error
	const { avatar_url, name, company, bio } = user;

	return (
		<>
			<h2>Fetch Data </h2>
			<img
				src={avatar_url}
				style={{ width: "150px", borderRadius: "25px" }}
				alt={name}
			/>
			<h2>{name}</h2>
			<h4>{company}</h4>
			<p>{bio}</p>
		</>
	);
};
export default MultipleReturnsFetchData;
