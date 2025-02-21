import { Outlet } from "react-router-dom";
import Navbar from "./Componets/Navbar.jsx";
import Footer from "./Componets/Footer.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen">
        <Outlet /> {/* This will render the current route's component */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
