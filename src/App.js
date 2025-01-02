import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
		<div >
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Certifications />
			<Projects />
			<Footer />
    	</div>
		<Analytics />
	</>
  );
}

export default App;
