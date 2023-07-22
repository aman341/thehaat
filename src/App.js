import { AllRoutes } from "./Routes/AllRoutes";
import "./App.css";
import { GetApp } from "./Components/GetApp";
import { FourSection } from "./Components/FourSection";
import Navbar from "./Components/Navbar";
import OfferCard from "./Pages/OfferCard";
import Footer from "./Components/Footer";
// import ProductDescription from "./Components/ProductDescription";

export function App() {
  return (
    <div id="main-div">
      {/* <ProductDescription /> */}
      <Navbar />
      <OfferCard />
      <AllRoutes />
      <GetApp />
      <FourSection />
      <Footer />
    </div>
  );
}