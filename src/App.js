import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Work from "./pages/Work/Work";
import Skills from "./pages/skills/Skills";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* layout page wrapping other components */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="skills" element={<Skills />} />
					<Route path="works" element={<Work />} />
					<Route path="feedback" element={<Feedback />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
