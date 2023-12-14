import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "./feedback.css";
import Button from "../../components/common/Button";
import Rating from "../../components/common/Rating";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

const Feedback = () => {
	const [letterClass, setLetterClass] = useState("textAnimate");
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		rating: 5,
		feedback: "",
	});
	const [isPopUpVisible, setIsPopUpVisible] = useState(false);

	const handleRating = (newRating) => {
		setFormValues({ ...formValues, rating: newRating });
	};

	const sendDataToFirebase = async () => {
		try {
			await addDoc(collection(db, "users"), {
				timestamp: serverTimestamp(),
				...formValues,
			});
		} catch (error) {
			console.log("Error adding document:", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// submit form data to firebase database
		sendDataToFirebase();

		// reset all the form values
		setFormValues({
			name: "",
			email: "",
			rating: 1,
			feedback: "",
		});
		setIsPopUpVisible(true);
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
					<div className="w-full lg:w-1/2 feedback_first_col">
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

					<div className="w-full lg:w-1/2 text-white text-base relative">
						<form
							onSubmit={handleSubmit}
							className={`"w-full" ${isPopUpVisible ? "hidden" : "block"}`}
						>
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
									value={formValues.name}
									onChange={(e) =>
										setFormValues({ ...formValues, name: e.target.value })
									}
									className="w-1/2 rounded-md outline-none focus:ring-1 focus:ring-white"
								/>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									value={formValues.email}
									onChange={(e) =>
										setFormValues({ ...formValues, email: e.target.value })
									}
									className="w-1/2 rounded-md outline-none focus:ring-1 focus:ring-white"
								/>
							</div>
							<textarea
								name="feedback"
								id="feedback"
								value={formValues.feedback}
								required
								placeholder="Share your thoughts and suggestions..."
								onChange={(e) =>
									setFormValues({ ...formValues, feedback: e.target.value })
								}
								className="my-5 w-full min-h-[250px] bg-[#113a50] !text-[16px] leading-snug p-5 rounded-md outline-none focus:ring-1 focus:ring-white"
							></textarea>
							<>
								<label htmlFor="rating">Give me your rating:</label>
								<Rating
									currentRating={formValues.rating}
									handleRating={handleRating}
								/>
							</>
							<Button text="Send" type="submit" />
						</form>
						{/* popup window */}
						<div
							className={`${
								!isPopUpVisible ? "hidden" : "block"
							} absolute top-0 p-4 bg-[#113a50]`}
						>
							<p>
								Yasss! 🙌 Your feedback has soared through cyberspace and landed
								safely in my feedback treasure chest. You're officially a
								feedback superstar! 🌟 💃 Keep rocking and stay fabulous! 💖
							</p>
							<button
								onClick={() => setIsPopUpVisible(false)}
								className="px-7 py-5 mt-5 font-[sans-serif] bg-icon text-white text-[16px] tracking-wider rounded-md font-light outline-none focus:ring-1 focus:ring-white hover:bg-white hover:text-gray-800"
							>
								Got more to say?
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
