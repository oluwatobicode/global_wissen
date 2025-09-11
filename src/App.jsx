import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partner";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Partners />
      <Stats />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
