import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPass from "./pages/ResetPass";
import { Routes, Route } from "react-router-dom";
// import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/adminboard" element={ <Admin/>}/>  */}
        <Route path="/resetPass" element={<ResetPass />} />
      </Routes>
    </div>
  );
}

export default App;
