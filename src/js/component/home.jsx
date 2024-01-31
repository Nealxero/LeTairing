import React from "react";
import { Navbar } from "./navbar";
//include images into your bundle
// "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<h1 className="text-center mt-5">LetTairing</h1>
			<figure class="wp-block-image alignwide size-full is-style-rounded"><img src="https://s0.wp.com/wp-content/themes/pub/twentytwentyfour/assets/images/building-exterior.webp" alt="Building exterior in Toronto, Canada"/></figure>
		</div>
	);
};

export default Home;
