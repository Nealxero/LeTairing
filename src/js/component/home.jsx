import React from "react";
import { Navbar } from "./navbar";
import { CardimG } from "./card";
//include images into your bundle
// "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center" id="mainBody">
			<Navbar></Navbar>
			<h1 className="text-center mt-5">LetTairing</h1>
			<div>
				<CardimG></CardimG>
			</div>

		</div>
	);
};

export default Home;
