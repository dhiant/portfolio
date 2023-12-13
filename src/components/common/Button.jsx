import React from "react";

const Button = ({ text, type }) => {
	return (
		<button
			type={type}
			className="px-7 py-5 mt-5 font-[sans-serif] bg-icon text-white text-[16px] tracking-wider rounded-md font-light outline-none focus:ring-1 focus:ring-white hover:bg-white hover:text-black"
		>
			{text}
		</button>
	);
};

export default Button;
