import FeaturesSection from "./components/FeaturesSection";
import FeaturesSection2 from "./components/FeaturesSection2";
import HeroSection from "./components/HeroSection";
import Navbar2 from "./components/Navbar2";
import SponsorsSection from "./components/SponsorsSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <div className="px-4 lg:px-20">
        <HeroSection />
        <div className="p-0 lg:py-8">
          <VideoSection />
        </div>
      </div>
      <SponsorsSection />
      <div className="px-0 lg:px-20">
        <FeaturesSection />
        <FeaturesSection2 />
        <FeaturesSection />
        <FeaturesSection2 />
      </div>
    </div>
  );
}
