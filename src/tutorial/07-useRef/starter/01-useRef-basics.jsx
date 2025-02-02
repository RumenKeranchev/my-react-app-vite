import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
	const [value, setValue] = useState(0);
	const refContainer = useRef(null);
	// console.log(refContainer);

	// This will not trigger a re-render, hence no infinite loop
	// This will run every time the state changes, which in this
	// case is every time the button 'Increase' is clicked
	useEffect(() => {
		refContainer.current.focus();
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
	};

	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						id='name'
						className='form-input'
						ref={refContainer}
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					submit
				</button>
			</form>
			<h1>value : {value}</h1>
			<button onClick={() => setValue(value + 1)} className='btn'>
				increase
			</button>
		</div>
	);
};

export default UseRefBasics;
