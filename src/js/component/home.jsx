import React from "react";
import { Navbar } from "./navbar";


import cafe from "../../img/cafe.jpg";
import desayuno from "../../img/desayuno.jpg"
import cocktails from "../../img/cocktails.jpg"
import magia from "../../img/magia.jpg"
import sandwich from "../../img/sandwichBar.jpg"
import dolly from "../../img/villaDolly.jpg"
import { Carousel } from "./card";
//create your first component

const Home = () => {
	
	const cards = [
		{ title: 'Card 1', content: 'Content for Card 1', image: cafe },
		{title : 'Card 2', content : 'Content Card 2 ', image: desayuno},
		{title : 'Card 2', content : 'Content Card 2 ', image: cocktails},
		{title : 'Card 2', content : 'Content Card 2 ', image: magia},
		{title : 'Card 2', content : 'Content Card 2 ', image: sandwich},
		{title : 'Card 2', content : 'Content Card 2 ', image: dolly},
	  ];

	return (
		<div className="text-center" id="mainBody">
			<Navbar></Navbar>
			<h1 className="text-center mt-5">LetTairing</h1>
			<div>
				<Carousel cards={cards}/>
			</div>
		</div>
	);
};

export default Home;
