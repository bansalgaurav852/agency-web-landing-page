// src/components/Footer.tsx
import React from 'react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

const Footer: React.FC = () => (
    <footer className="bg-green-500 text-white py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-2xl font-bold mb-4">WEB LOGO</h3>
                <p className="mb-4">Some footer text about the Agency. Just a little description to help people understand you better.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-200"><SiFacebook /></a>
                    <a href="#" className="hover:text-gray-200"><SiInstagram /></a>
                    <a href="#" className="hover:text-gray-200"><SiX /></a>
                    <a href="#" className="hover:text-gray-200"><SiLinkedin /></a>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Services</a></li>
                    <li><a href="#" className="hover:underline">Portfolio</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Branding</a></li>
                    <li><a href="#" className="hover:underline">Digital Marketing</a></li>
                    <li><a href="#" className="hover:underline">SEO</a></li>
                    <li><a href="#" className="hover:underline">Web Design</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="mb-4">1234 Street Name, City Name</p>
                <p className="mb-4">+123 456 7890</p>
                <p className="mb-4">info@example.com</p>

            </div>
        </div>
    </footer>
);

export default Footer;
