import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName = "defaulter!", images }) {
	return (
		<div>
			<h2>
				{name}
				{nickName && (
					<span
						style={{
							fontWeight: "100",
							fontStyle: "italic",
							textTransform: "none",
						}}
					>
						{" "}
						the {nickName}
					</span>
				)}
			</h2>
			<img
				src={images?.[0]?.small?.url ?? avatar}
				alt={name}
				width='50'
				height='50'
			/>
		</div>
	);
}
