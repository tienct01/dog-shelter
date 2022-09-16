import { useContext } from "react";
import AdoptContext from "../../contexts/adoptContext";
import "../Dogs/dogpage.css";
import DogCard from "../Dogs/DogCard";

const MyDog = () => {
	const { allDogs, adoptedList } = useContext(AdoptContext);
	return (
		<>
			<h3>🐶 Your friends are here 🐶</h3>
			<section className="dog-page">
				{allDogs.map((dog) => {
					if (adoptedList.find((id) => id === dog._id)) {
						return <DogCard {...dog} key={dog._id} />;
					}
				})}
			</section>
		</>
	);
};
export default MyDog;
