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
                <div className="container grid items-center h-12 grid-cols-2 px-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:px-4 md:px-4 lg:px-0 xl:px-0 2xl:px-0">
                    
                    {/* Logo or Brand Name */}
                    <div className="text-2xl font-bold">
                        <a href="/">BrandLogo</a>
                    </div>

                    {/* Centered Navigation Links */}
                    <nav className="hidden text-1xl md:block lg:block xl:block 2xl:block">
                        <ul className="flex justify-center space-x-6">
                            <li><a href="/about" className="hover:text-gray-400">About</a></li>
                            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Right Side - Shopping Icon and Mobile Menu */}
                    <div className="flex justify-end">
                        <FaShoppingBag className="hidden text-2xl sm:hidden md:block lg:block xl:block 2xl:block" />
                        <CiMenuFries className="block text-3xl cursor-pointer sm:block md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={toggleMenu} />
                    </div>
                </div>

                {/* Right Side Popup Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out z-50 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    {/* Close Button */}
                    <div className="flex items-center justify-between p-4 bg-gray-900">
                        <h2 className="text-xl">Menu</h2>
                        <AiOutlineClose className="text-3xl cursor-pointer" onClick={closeMenu} />
                    </div>

                    {/* Menu Links */}
                    <ul className="flex flex-col p-4 space-y-4">
                        <li><a href="/profile" className="hover:text-gray-400">Profile</a></li>
                        <li><a href="/settings" className="hover:text-gray-400">Settings</a></li>
                        <li><a href="/logout" className="hover:text-gray-400">Logout</a></li>
                    </ul>
                </div>

                {/* Overlay to close menu when clicking outside */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black opacity-50"
                        onClick={closeMenu}
                    />
                )}
            </header>
        </>
    );
};

export default Header;
