import { Person } from "./Person";
import { people } from "../../../data";

export const List = () => {
	return (
		<>
			{people.map((item) => (
				<Person {...item} key={item.id} />
			))}
		</>
	);
};
