// src/components/ServicesSection.tsx
import React from 'react';
import { TrendingUp, Heart, Briefcase } from 'lucide-react';


// Define the type for each service
interface Service {
    icon: React.ElementType; // The icon is a React component
    title: string;
    description: string;
}

// Define the ServicesSection component
const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            icon: TrendingUp,
            title: 'Grow Your Business',
            description: 'We help identify the best ways to improve your business',
        },
        {
            icon: Heart,
            title: 'Improve Brand Loyalty',
            description: 'We help identify the best ways to improve your business',
        },
        {
            icon: Briefcase,
            title: 'Improve Business Model',
            description: 'We help identify the best ways to improve your business',
        },
    ];

    return (
        <section className="bg-white mt-8 text-white py-16">
            <div className="container mx-auto px-4">
                <p className="text-xl font-bold mb-2 text-green-400">WHAT WE DO</p>
                <p className="text-3xl font-bold mb-12 text-black">We provide the Perfect Solution to your business growth</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon; // Extract the icon component
                        return (
                            <div key={index} className="bg-white text-black rounded-lg p-6 flex flex-col">
                                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <IconComponent className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="mb-4 flex-grow">{service.description}</p>
                                <a href="/" className="text-black font-semibold inline-flex items-center">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
