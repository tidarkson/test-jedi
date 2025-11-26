import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./sections/Services";
import Blog from "./sections/Blog";
import Mission from "./sections/Mission";
import CTA from "./sections/CTA";
import ScrollToTop from "./assets/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#services" element={<Services />} />
        <Route path="#blog" element={<Blog />} />
        <Route path="#mission" element={<Mission />} />
        <Route path="#contact" element={<CTA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
