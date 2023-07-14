import { BrowserRouter, Route, Routes } from "react-router-dom";
import Business from "./components/Business";
import General from "./components/Iphone";
import Health from "./components/Health";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Science from "./components/Science";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/general" element={<General/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
