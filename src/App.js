import "./App.css";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import adminDashboard from "./pages/adminDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LandingPage />}/>
        <Route path="/adminDashboard" element={ adminDashboard }/>
      
      </Routes>
    </div>
  );
}

export default App;
