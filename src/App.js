import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Teams from "./Components/Teams";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <header id="header">
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="teams" element={<Teams />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <footer id="footer">
            <Footer />
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
