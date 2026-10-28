import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/About.Me";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
