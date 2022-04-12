import "./App.css";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage />}/>
        <Route path="/adminboard" element={ < Admin />}/>    
      </Routes>
    </div>
  );
}

export default App;
