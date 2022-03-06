import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create, Home } from "pages";
import Navbar from "components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Create />} />
        <Route path="/edit/:id" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
