import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "./feedback.css";
import Button from "../../components/common/Button";
import Rating from "../../components/common/Rating";

const Feedback = () => {
	const [letterClass, setLetterClass] = useState("textAnimate");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [rating, setRating] = useState(1);
	const [feedback, setFeedback] = useState("");

	const handleRating = (newRating) => {
		setRating(newRating);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		setTimeout(() => {
			setLetterClass("textAnimateHover");
		}, 3000);
	}, []);

	return (
		<div className="feedbackPage container sm:px-8">
			<div className="lg:absolute top-[17%] left-[10%] px-10">
				<div className="flex flex-col lg:flex-row gap-10 py-5">
					<div className="w-full lg:w-1/2">
						<h1 className="text-7xl leading-7 font-coolvetica text-secondary font-normal relative mb-20 left-3 ">
							<AnimatedLetters
								letterClass={letterClass}
								strArray={[
									"S",
									"p",
									"i",
									"l",
									"l",
									" ",
									"t",
									"h",
									"e",
									" ",
									"b",
									"e",
									"a",
									"n",
									"s",
									"!",
								]}
								index={15}
							/>
						</h1>
						<p>
							Hey there! I really value your feedback, my friend! I'm super
							curious to know what you think about my website and portfolio.
							Your opinion means a lot to me!
						</p>
						<p>
							Would you mind taking a moment to fill out the form on the right
							and share your thoughts about my portfolio website? Whether you
							have any suggestions for improvements or cool ideas for
							advancements, your input will totally help me level up my work and
							create an awesome user experience.
						</p>
						<p>Thank you for your time and valuable feedback!</p>
					</div>

					<div className="w-full lg:w-1/2 text-white text-base">
						<form onSubmit={handleSubmit} className="w-full">
							{/* <h2 className="text-7xl leading-7 font-coolvetica text-secondary font-normal relative -top-12">
								Share Your Thoughts!
							</h2> */}
							<div className="flex gap-x-5">
								<input
									type="text"
									name="name"
									id="name"
									autoFocus
									required
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-1/2 rounded-md outline-none focus:ring-1 focus:ring-white"
								/>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-1/2 rounded-md outline-none focus:ring-1 focus:ring-white"
								/>
							</div>
							<textarea
								name="feedback"
								id="feedback"
								value={feedback}
								required
								placeholder="Share your thoughts and suggestions..."
								onChange={(e) => setFeedback(e.target.value)}
								className="my-5 w-full min-h-[250px] bg-[#113a50] !text-[16px] leading-snug p-5 rounded-md outline-none focus:ring-1 focus:ring-white"
							></textarea>
							<>
								<label htmlFor="rating">Give me your rating:</label>
								<Rating currentRating={rating} handleRating={handleRating} />
							</>
							<Button text="Send" type="submit" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
