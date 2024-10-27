

import React, { useState } from 'react';


const SubscribeSection: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log('Subscribing email:', email);
        // Reset the input after submission
        setEmail('');
    };

    return (
        <section className="py-16 px-4 md:px-8 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-green-500 font-semibold mb-2">SUBSCRIBE</h2>
                <h3 className="text-3xl font-bold mb-4">
                    Subscribe To Get The Latest News About Us
                </h3>
                <p className="text-gray-600 mb-8">
                    Please Drop Your Email Below To Get Daily Update About What We Do
                </p>
                <form onSubmit={handleSubmit} className="flex items-center max-w-md mx-auto">
                    <div className="relative w-full">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pr-24 rounded-full py-3 px-4" // Added padding for better aesthetics
                        />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 bottom-0 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center px-6" // Adjusted padding for the button
                        >
                            Subscribe
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default SubscribeSection;
