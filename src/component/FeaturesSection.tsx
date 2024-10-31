// src/components/FeaturesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const features = ['Grow Your Business', 'Improve brand loyalty', 'Improve Business Model'];

const FeaturesSection: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const iconVariants = {
        initial: { rotate: 0 },
        animate: { rotate: 360 },
    };

    return (
        <section className="container mx-auto py-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
                We provide the Perfect Solution to your business growth
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((title, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md"
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.05 }}
                        variants={cardVariants}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div
                            className="w-12 h-12 bg-green-100 rounded-full mb-4 flex items-center justify-center"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                        >
                            <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-gray-600 mb-4">We help identify the best ways to improve your business</p>
                        <motion.a
                            href="#"
                            className="text-green-500 font-medium"
                            whileHover={{ color: "#2f855a" }}
                            transition={{ duration: 0.3 }}
                        >
                            Learn More <ArrowRight className="inline ml-1" />
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
