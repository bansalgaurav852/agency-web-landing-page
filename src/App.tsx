import BrandsSection from "./component/BrandsSection";

import Footer from "./component/Footer";
import HeaderWithDropdown from "./component/header";
import HeroSection from "./component/HeroSection";
import ProjectsSection from "./component/ProjectsSection";
import ServicesSection from "./component/ServicesSection";
import StatisticsSection from "./component/StatisticsSection";
import SubscribeSection from "./component/SubscribeSection";
import TestimonialsSection from "./component/TestimonialsSection";


function LandingPage() {
  return (
    <div className="bg-[#D7F5DC] min-h-screen">
      <HeaderWithDropdown />
      <main>
        <HeroSection />
        <BrandsSection />
        <ServicesSection />
        <StatisticsSection />

        <ProjectsSection />
        <TestimonialsSection />
        <SubscribeSection />

      </main>
      <Footer />
      <div className="mb-4 p-4 flex flex-col-2 justify-between">
        <a target="_blank" href='https://www.figma.com/@thefemijohn'>Special thanks @thefemijohn for Figma design</a>
        <a target="_blank" href='https://gaurav-bansal.vercel.app'>&copy; 2024 Gaurav Bansal. All rights reserved.</a>

      </div>
    </div>
  );
}

export default LandingPage;
