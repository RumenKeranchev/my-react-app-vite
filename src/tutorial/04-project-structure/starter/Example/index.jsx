import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

// group export
export const Example = () => {
	return (
		<div>
			<h2>Example Component</h2>
			<FirstComponent />
			<SecondComponent />
		</div>
	);
};

export default Example;
