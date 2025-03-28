import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
