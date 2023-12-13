import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Rating = ({ currentRating, handleRating }) => {
	const [rating, setRating] = useState(currentRating);
	const [hoverValue, setHoverValue] = useState(null);

	const handleClick = (idx) => {
		// rating = index + 1   i.e. index: 0 1	2 3	4 correponds rating: 1 2 3 4 5
		setRating(idx + 1);
		// pass new rating in the form - parent component
		handleRating(idx + 1);
	};

	return (
		<div className="flex space-x-2">
			{/* create an array of length 5 and spread out it into new array and iterate over the array using map */}
			{[...Array(5)].map((star, idx) => (
				<span
					key={idx}
					className={`text-3xl cursor-pointer transition-all duration-200 ${
						rating > idx ? "text-yellow-400" : "text-gray-300"
					}`}
					// id is used to correpond span it with label tag in parent component
					id="rating"
				>
					<FontAwesomeIcon
						icon={faStar}
						color={`${hoverValue > idx ? "rgb(250 204 21)" : ""}`}
						onMouseEnter={() => setHoverValue(idx + 1)}
						onMouseLeave={() => setHoverValue(null)}
						onClick={() => handleClick(idx)}
					/>
				</span>
			))}
		</div>
	);
};

export default Rating;
