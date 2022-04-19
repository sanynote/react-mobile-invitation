import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./information/Information";
import Invitation from "./invitation/Invitation";
// import imgA from '%PUBLIC_URL%/visual_00.jpg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
