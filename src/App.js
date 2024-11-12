import Home from "./Pages/home";
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
