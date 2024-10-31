// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';

const HeroSection: React.FC = () => {
    return (
        <section className="container mx-auto py-20 px-4 flex flex-col-reverse md:flex-row items-center">
            <motion.div
                className="max-w-xl mb-8 md:mb-0 md:max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Increase Your Customers Loyalty and Satisfaction
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    We help businesses like yours earn more customers, stand out from competitors, and make more money.
                </p>
                <CustomButton text="Get Started" />
            </motion.div>

            <motion.div
                className="flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
                <img
                    src="/person.png"
                    alt="Person"
                    className="w-full md:w-3/5 lg:w-1/2" // Adjust width based on screen size
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
