import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
// https://fanciful-blancmange-b4d3e7.netlify.app/
