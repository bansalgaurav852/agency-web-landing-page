import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Import the cancel icon
import CustomButton from './CustomButton';

function HeaderWithDropdown() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(prev => !prev);
    };

    return (
        <header className="container mx-auto p-4 flex items-center justify-between">
            <a href="/" className="flex text-2xl font-bold text-green-500">
                <p className="text-black">Design</p><p className="text-orange-500">AGENCY</p>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 text-black">
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#" className="hover:text-gray-900 flex items-center gap-2">
                        Services <FaChevronDown />
                    </a>
                    {isDropdownVisible && (
                        <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-lg z-10">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Web Design</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">SEO Services</a></li>
                                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Content Marketing</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <a href="#" className="hover:text-gray-900">About Us</a>
                <a href="#" className="hover:text-gray-900">Contact Us</a>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMobileMenu}
                    className="text-black focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuVisible ? (
                        <FaTimes className="w-6 h-6" /> // Show cancel icon when menu is open
                    ) : (
                        <FaBars className="w-6 h-6" /> // Show hamburger icon when menu is closed
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuVisible && (
                <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg z-10 md:hidden">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Services</a></li>
                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">About Us</a></li>
                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Contact Us</a></li>
                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Login</a></li>
                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Register</a></li>
                    </ul>
                </div>
            )}

            {/* Login and Register buttons for Desktop */}
            <div className="hidden md:flex space-x-2">
                <button className="border-2 rounded-lg border-[#20B15A] px-4 py-2">Login</button>
                <CustomButton text={'Register'} />
            </div>
        </header>
    );
}

export default HeaderWithDropdown;
