import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { MeetingDetails } from "./Pages/MeetingDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetDetails/:meetId" element={<MeetingDetails />} />
      </Routes>
    </div>
  );
}

export default App;
// https://fanciful-blancmange-b4d3e7.netlify.app/
