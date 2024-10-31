import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        content: "Thank You for your service. I am very pleased with the result. I have seen exponential growth in my business and it's all thanks to your amazing service.",
        name: "Emily Stones",
        title: "CEO, Marketing Guru",
        image: "/lady.png",
    },
    {
        id: 2,
        content: "Your team's expertise and dedication have transformed our online presence. We've seen a significant increase in engagement and conversions.",
        name: "Alex Johnson",
        title: "Founder, TechStart",
        image: "/lady.png",
    },
    {
        id: 3,
        content: "The strategies implemented by your agency have been game-changing for our brand. Our ROI has never been better!",
        name: "Sarah Lee",
        title: "CMO, FashionForward",
        image: "/lady.png",
    },
    {
        id: 4,
        content: "Excellent support and service. I highly recommend them for any business looking to grow.",
        name: "John Doe",
        title: "CTO, WebSolutions",
        image: "/lady.png",
    },
];

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Determine the number of items per slide based on screen size
    const getItemsPerSlide = () => {
        if (window.innerWidth >= 1024) return 3; // Desktop
        if (window.innerWidth >= 768) return 2; // Tablet
        return 1; // Mobile
    };

    const ITEMS_PER_SLIDE = getItemsPerSlide();
    const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="py-16 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-green-500 font-semibold mb-2">TESTIMONIALS</h2>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold max-w-2xl">
                        See What Our Customers Say About Us
                    </h3>
                    <div className="flex space-x-2">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${(currentIndex * 100) / ITEMS_PER_SLIDE}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={`w-full flex-shrink-0 ${currentIndex * ITEMS_PER_SLIDE === 0 ? 'px-4' : ''}`}
                                style={{
                                    width: `${100 / ITEMS_PER_SLIDE}%`, // Set the width dynamically
                                }}
                            >
                                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-gray-500">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default TestimonialSlider;