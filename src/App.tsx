
import { motion } from 'framer-motion';
import BrandsSection from "./component/BrandsSection";
import Footer from "./component/Footer";
import HeaderWithDropdown from "./component/Header";
import HeroSection from "./component/HeroSection";
import ProjectsSection from "./component/ProjectsSection";
import ServicesSection from "./component/ServicesSection";
import StatisticsSection from "./component/StatisticsSection";
import SubscribeSection from "./component/SubscribeSection";
import TestimonialsSection from "./component/TestimonialsSection";
import React from 'react';

const LandingPage: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#D7F5DC] min-h-screen">
      <HeaderWithDropdown />
      <main>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <BrandsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <StatisticsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialsSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SubscribeSection />
        </motion.div>
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
