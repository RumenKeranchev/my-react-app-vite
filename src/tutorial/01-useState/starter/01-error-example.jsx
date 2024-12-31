const ErrorExample = () => {
	let counter = 0;
  
	const handleClick = () => {
		counter++;
		console.log(counter);
	};

	return (
		<>
			<h2>{counter}</h2>      
			<button className="btn" onClick={handleClick}>
				click me
			</button>
		</>
	);
};

export default ErrorExample;
