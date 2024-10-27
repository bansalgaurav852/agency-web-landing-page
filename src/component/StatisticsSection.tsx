// src/components/StatisticsSection.tsx
import React from 'react';

interface Statistic {
    number: string;
    label: string;
    image?: string;
}

const statistics: Statistic[] = [
    { number: '100 +', label: 'Completed Projects', image: "/icons/completed_project.svg" },
    { number: '20 %', label: 'Customer Satisfaction', image: "/icons/customer_satisfaction.svg" },
    { number: '$10M', label: 'Raised by Clients', image: "/icons/raise.svg" },
    { number: '2 yrs', label: 'Years in Business', image: "/icons/timeline.svg" },
];

const StatisticsSection: React.FC = () => (
    <section className="bg-white py-20">
        <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
            {statistics.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                    {stat.image && (
                        <img src={stat.image} alt={stat.label} className="mb-2" />
                    )}
                    <div className="text-gray-600">{stat.label}</div>
                    <div className="text-4xl font-bold text-green-500 mb-2">{stat.number}</div>
                </div>
            ))}
        </div>
    </section>
);

export default StatisticsSection;
