import { useState } from "react";

const ControlledInputs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<h4>controlled inputs</h4>
			<div className='form-row'>
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					className='form-input'
					id='name'
					value={name}
					autoComplete='off'
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='form-row'>
				<label htmlFor='email' className='form-label'>
					Email
				</label>
				<input
					type='email'
					className='form-input'
					id='email'
					autoComplete='off'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button type='submit' className='btn btn-block'>
				submit
			</button>
		</form>
	);
};
export default ControlledInputs;
