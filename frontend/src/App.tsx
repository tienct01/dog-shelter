import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DogsPage from "./components/Dogs/DogsPage";
import MyDog from "./components/MyDog/MyDog";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import getLocalData, { ID } from "./dataFromLocalStorage/getLocalData";
import AdoptContext from "./contexts/adoptContext";

export interface Dog {
	_id: string;
	name: string;
	description: string;
	img: string;
}
interface ServerRes {
	dogs: Dog[];
}
function App() {
	const [allDogs, setAllDogs] = useState<Dog[]>([]);
	const [adoptedList, setAdoptedList] = useState<ID[]>([]);

	useEffect(() => {
		const getData = async () => {
			const res = await axios.get<ServerRes>("/api/v1/dogs");
			return res;
		};

		getData().then((res) => setAllDogs(res.data.dogs));
		getData().catch((error) => {
			console.log(error);
		});
		setAdoptedList(getLocalData());
	}, []);
	return (
		<AdoptContext.Provider value={{ allDogs, adoptedList, setAdoptedList }}>
			<Router>
				<NavBar />
				<div className="page-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="dogs"
							element={<DogsPage allDogs={allDogs} />}
						/>
						<Route path="mydog" element={<MyDog />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</AdoptContext.Provider>
	);
}

export default App;
