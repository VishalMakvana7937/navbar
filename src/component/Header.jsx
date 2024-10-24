import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Header Section */}
            <header className="text-white bg-gray-950">
                <div className="container grid items-center h-16 grid-cols-2 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    
                    {/* Logo or Brand Name */}
                    <div className="text-2xl font-bold">
                        <a href="/">BrandLogo</a>
                    </div>
        
                    {/* Centered Navigation Links */}
                    <nav className="hidden text-1xl md:block lg:block xl:block">
                        <ul className="flex justify-center space-x-6">
                            <li><a href="/about" className="hover:text-gray-400">About</a></li>
                            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Right Side - Shopping Icon and Mobile Menu */}
                    <div className="flex justify-end">
                        <FaShoppingBag className="hidden text-2xl sm:hidden md:block lg:block" />
                        <CiMenuFries className="block text-3xl cursor-pointer sm:block md:hidden lg:hidden" onClick={toggleMenu} />
                    </div>
                </div>
            </header>

            {/* Top Side Popup Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out z-50 ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                {/* Close Button */}
                <div className="flex items-center justify-between p-4 bg-gray-900">
                    <h2 className="text-xl">Menu</h2>
                    <AiOutlineClose className="text-3xl cursor-pointer" onClick={closeMenu} />
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col p-4 space-y-4">
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>

            {/* Overlay to close menu when clicking outside */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black opacity-50"
                    onClick={closeMenu}
                />
            )}
        </>
    );
};

export default Header;
