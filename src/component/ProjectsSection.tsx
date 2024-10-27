// src/components/Portfolio.js


const Portfolio = () => {
    const portfolioItems = [
        {
            image: '/projects-image/p1.png',
            title: 'Digital Marketing Agency Website',
            description: 'This is a website for a client who wants to achieve their goals and meet their users\' needs while also increasing their reach across all platforms. This is a website rebrand.',
        },
        {
            image: '/projects-image/p2.png',
            title: 'Digital Marketing Agency Website',
            description: 'This is a website for a client who wants to achieve their goals and meet their users\' needs while also increasing their reach across all platforms. This is a website rebrand.',
        },
        {
            image: '/projects-image/p3.png',
            title: 'Digital Marketing Agency Website',
            description: 'This is a website for a client who wants to achieve their goals and meet their users\' needs while also increasing their reach across all platforms. This is a website rebrand.',
        },
        {
            image: '/projects-image/p4.png',
            title: 'Digital Marketing Agency Website',
            description: 'This is a website for a client who wants to achieve their goals and meet their users\' needs while also increasing their reach across all platforms. This is a website rebrand.',
        },
    ];

    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-green-500 font-semibold mb-2">OUR PORTFOLIO</h2>
                <h3 className="text-3xl font-bold mb-8 max-w-2xl">
                    We provide the Perfect Solution to your business growth
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="space-y-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
