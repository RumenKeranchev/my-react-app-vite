import { useState } from "react";

const MultipleInputs = () => {
	const [user, setUser] = useState({ name: "", email: "", password: "" });

	const handleChange = (e) => {
		// if (e.target.name === "name") {
		// 	setUser({ ...user, name: e.target.value });
		// } else if (e.target.name === "email") {
		// 	setUser({ ...user, email: e.target.value });
		// } else if (e.target.name === "password") {
		// 	setUser({ ...user, password: e.target.value });
		// }

		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form className='form'>
				<h4>Multiple Inputs</h4>
				{/* name */}
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						type='text'
						className='form-input'
						id='name'
						name='name'
						value={user.name}
						autoComplete='off'
						onChange={handleChange}
					/>
				</div>
				{/* email */}
				<div className='form-row'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						type='email'
						className='form-input'
						autoComplete='off'
						id='email'
						name='email'
						value={user.email}
						onChange={handleChange}
					/>
				</div>
				{/* email */}
				<div className='form-row'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-input'
						id='password'
						name='password'
						value={user.password}
						autoComplete='off'
						onChange={handleChange}
					/>
				</div>

				<button type='submit' className='btn btn-block'>
					submit
				</button>
			</form>
		</div>
	);
};
export default MultipleInputs;
