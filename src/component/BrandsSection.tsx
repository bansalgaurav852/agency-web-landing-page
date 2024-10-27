// src/components/BrandsSection.tsx
import React from 'react';



const brands = [
    { name: 'Google', src: '/logos/Google.png' },
    { name: 'Trello', src: '/logos/Trello.png' },
    { name: 'Monday', src: '/logos/Monday.png' },
    { name: 'Notion', src: '/logos/Notion.png' },
    { name: 'Slack', src: '/logos/Slack.png' },
];

const BrandsSection: React.FC = () => {
    return (
        <section className="bg-white py-10">
            <div className="contacontaineriner mx-auto flex  justify-center">
                {brands.map((brand, index) => (
                    <img
                        key={index}
                        src={brand.src}
                        alt={brand.name}
                        className="p-2 mx-auto  overflow-x-scroll"
                    />
                ))}
            </div>
        </section>
    );
};

export default BrandsSection;
