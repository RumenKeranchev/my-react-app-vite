import { useState } from "react";
import { data } from "../../../data";

const User = ({ user, handleDelete }) => {
	return (
		<div
			key={user.id}
			style={{
				display: "grid",
				gridTemplateColumns: "4rem auto",
				gridTemplateRows: "50px",
				alignItems: "center",
				justifyContent: "space-evenly",
				gap: "10px",
				background: "#eddfff",
				borderRadius: "5px",
				padding: "0 10px",
			}}
		>
			<h4
				style={{
					margin: 0,
					textAlign: "center",
				}}
			>
				{user.name}
			</h4>
			<button className='btn' onClick={() => handleDelete(user.id)}>
				Delete
			</button>
		</div>
	);
};

const UsersList = ({ users, handleDelete }) => {
	return (
		<div
			style={{
				width: "510px",
				display: "grid",
				margin: "auto",
				gridTemplateColumns: "1fr 1fr",
				gap: "10px",
			}}
		>
			{users.map((user) => (
				<User key={user.id} user={user} handleDelete={handleDelete} />
			))}
		</div>
	);
};

const UserChallenge = () => {
	const getId = () =>
		users && users.length > 0
			? users.sort((a, b) => b.id - a.id)[0].id + 1
			: 1;

	const [name, setName] = useState("");
	const [users, setUsers] = useState(data);
	const [id, setId] = useState(getId());

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			alert("Please enter a name");
			return;
		}

		users.push({ id, name });
		setUsers(users);
		setId(getId());
	};

	const handleDelete = (id) => setUsers(users.filter((u) => u.id !== id));

	return (
		<div>
			<form className='form' onSubmit={handleSubmit}>
				<h4>Add User</h4>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						type='text'
						className='form-input'
						id='name'
						autoComplete='off'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<button type='submit' className='btn btn-block'>
					submit
				</button>
			</form>
			{users && <UsersList users={users} handleDelete={handleDelete} />}
		</div>
	);
};

export default UserChallenge;
