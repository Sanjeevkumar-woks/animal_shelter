import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adopt from "./pages/Adopt";
import GiveAway from "./pages/GiveAway";
import PetsList from "./pages/PetsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adopt" element={<Adopt />} />
        <Route exact path="/give-away" element={<GiveAway />} />
        <Route exact path="/pets-list" element={<PetsList />} />
      </Routes>
    </div>
  );
}

export default App;
