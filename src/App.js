import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Utilities } from "./components/Utilities";
import { Mint } from "./components/Mint";
import Partners from "./components/Partners";
import Accordian from "./components/Accordian";
import Meet from "./components/Meet";
import Kong from "./components/Kong";
import Timeline from "./components/Timeline";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navusestate";

function App() {
  return (
    <>
      <Header />
      <About />
      <Utilities />
      <Kong />
      <Mint />
      <Timeline/>
      <Partners />
      <Meet />
      <Preloader/>
      <Accordian /> 
      {/* <Navbar /> */}
    </>
  );
}

export default App;
