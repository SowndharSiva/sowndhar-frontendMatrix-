import {Router,BrowserRouter,Route,Switch} from "react-router-dom"
import './App.css';
import HomePage from "./components/HomePage";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import About from "./components/About";

function App() {
  return (
    <div>
      <HomePage/>
      <Features/>
      <Tokenomics/>
      <Roadmap/>
      <Faq/>
      <About/>
    </div>
  );
}

export default App;
