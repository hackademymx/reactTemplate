import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create, Home, HomeCreate } from "pages";
import { FormExample } from "pages/formExample";
import Navbar from "components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Create />} />
        <Route path="/home-create/" element={<HomeCreate />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="/form" element={<FormExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
