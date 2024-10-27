// src/components/FeaturesSection.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = ['Grow Your Business', 'Improve brand loyalty', 'Improve Business Model'];

const FeaturesSection: React.FC = () => (
    <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">We provide the Perfect Solution to your business growth</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {features.map((title, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-green-100 rounded-full mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">We help identify the best ways to improve your business</p>
                    <a href="#" className="text-green-500 font-medium">Learn More <ArrowRight className="inline ml-1" /></a>
                </div>
            ))}
        </div>
    </section>
);

export default FeaturesSection;
