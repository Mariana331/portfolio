import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/About.Me";
import { Projects } from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contacts />
    </>
  );
}

export default App;
