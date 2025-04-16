import React, { useEffect, useState } from "react";
import PlayingAnimation from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Card = () => {
	const [loading, setLoading] = useState(true);

useEffect(() => {
	const fetchData = async () => {
		setLoading(false);
	};
	fetchData(); // Fetch data immediately on component mount

	const intervalId = setInterval(fetchData, 60 * 1000); // ! Fetch data every minute: temporary 

	return () => clearInterval(intervalId); 
}, []);

	return (
		<div className="mt-3 flex justify-center w-full">
			{loading ? (
				<div className="flex justify-center mb-8">
					{/* Replace this with your own loading spinner */}
					<div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12 mb-4"></div>
				</div>
			) : (
				<div className="relative w-full mb-8 border-2 border-gray-500 p-4 rounded-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-30">
					<div className="z-10  flex items-center">
						<FontAwesomeIcon
							icon={faSpotify}
							className="text-black text-5xl me-5 md:me-1 xl:me-8"
						/>
						<p className="font-semibold text-green-500">
							I am available to start working.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;

