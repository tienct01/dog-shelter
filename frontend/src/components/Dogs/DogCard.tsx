import { useContext, useEffect, useRef, useState } from "react";
import { Dog } from "../../App";
import AdoptContext from "../../contexts/adoptContext";
import updateLocalData from "../../dataFromLocalStorage/updateLocalData";
import "./dogcard.css";

const DogCard = ({ _id, name, description, img }: Dog) => {
	const { adoptedList, setAdoptedList } = useContext(AdoptContext);
	const [adopted, setAdopted] = useState<boolean>(false);
	const handleClick = () => {
		if (adopted) {
			setAdoptedList(adoptedList.filter((value) => value !== _id));
		} else {
			setAdoptedList([...adoptedList, _id]);
		}
		setAdopted((val) => !val);
	};
	useEffect(() => {
		if (adoptedList.find((val) => val === _id)) {
			setAdopted(true);
		}
		updateLocalData(adoptedList);
	});
	return (
		<div className="dog-card">
			<div
				className="dog-img-container"
				style={{ backgroundImage: `url(${img})` }}></div>
			<div className="breed">{name}</div>
			<div className="description">{description}</div>
			<button
				className={adopted ? "btn btn-adopted" : "btn"}
				onClick={handleClick}>
				{adopted ? "Adopted" : "Adopt"}
			</button>
		</div>
	);
};

export default DogCard;
