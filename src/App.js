import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./sections/Services";
import Blog from "./sections/Blog";
import Mission from "./sections/Mission";
import CTA from "./sections/CTA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#services" element={<Services />} />
        <Route path="#blog" element={<Blog />} />
        <Route path="#mission" element={<Mission />} />
        <Route path="#cta" element={<CTA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
