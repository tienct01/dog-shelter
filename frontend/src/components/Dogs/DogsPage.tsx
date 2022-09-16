import { Dog } from "../../App";
import DogCard from "./DogCard";
import "./dogpage.css";
interface DogsPageProps {
	allDogs: Dog[];
}
const DogsPage = (props: DogsPageProps) => {
	const { allDogs } = props;
	return (
		<>
			<h3>🐶 Here 're all my dogs 🐶</h3>
			<section className="dog-page">
				{allDogs.map((dog) => {
					return <DogCard {...dog} key={dog._id} />;
				})}
			</section>
		</>
	);
};
export default DogsPage;
