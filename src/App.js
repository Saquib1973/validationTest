import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { useState } from "react";

function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home log={log} setLog={setLog} />} />
        <Route path="/login" element={<Login log={log} setLog={setLog} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
