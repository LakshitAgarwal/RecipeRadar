import Footer from "./Componets/Footer";
import HeroSection from "./Componets/HeroSection";
// import MainSection from "./Componets/MainSection";
import Navbar from "./Componets/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* <MainSection /> */}
      <Footer />
    </div>
  );
}

export default App;
