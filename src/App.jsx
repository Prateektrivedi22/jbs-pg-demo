import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Facilities from "./components/Facilities";
import RoomTypes from "./components/RoomTypes";
import FoodMenu from "./components/FoodMenu";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <About /> 
      <Facilities />
      <RoomTypes />
      <FoodMenu />
      <Gallery/>
      <Location />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;