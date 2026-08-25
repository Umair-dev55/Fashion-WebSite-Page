import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCollections from "./components/FeaturedCollections";
import BrandStats from "./components/BrandStats";
import BestSellers from "./components/BestSellers";
import DealOfTheDay from "./components/DealOfTheDay";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <BrandStats />
      <BestSellers />
      <DealOfTheDay />
      <Footer />
    </div>
  );
}
