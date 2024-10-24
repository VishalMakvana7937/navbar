import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

// Right side open menu
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

    // Animation variants for framer-motion
    const menuVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: '100%', opacity: 0 }
    };

    const overlayVariants = {
        open: { opacity: 0.5, display: 'block' },
        closed: { opacity: 0, transitionEnd: { display: 'none' } }
    };

    return (
        <>
            {/* Header Section */}
            <header className="text-white bg-gray-950">
                <div className="container grid items-center h-16 grid-cols-2 px-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    
                    {/* Logo or Brand Name */}
                    <div className="text-2xl font-bold">
                        <a href="/" className="hover:text-gray-400 transition-all duration-300">
                            BrandLogo
                        </a>
                    </div>
        
                    {/* Centered Navigation Links */}
                    <nav className="hidden md:block lg:block">
                        <ul className="flex justify-center space-x-8 text-lg">
                            <li>
                                <a href="/about" className="hover:text-gray-400 transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-gray-400 transition-colors duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-gray-400 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side - Shopping Icon and Mobile Menu */}
                    <div className="flex justify-end items-center">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 20 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <FaShoppingBag className="hidden text-2xl md:block lg:block cursor-pointer hover:text-gray-400 transition-all duration-300" />
                        </motion.div>
                        <CiMenuFries 
                            className="block text-3xl cursor-pointer sm:block md:hidden lg:hidden"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>

                {/* Right Side Popup Menu with Framer Motion */}
                <motion.div
                    className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white z-50 shadow-lg"
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={menuVariants}
                    transition={{ type: 'tween', duration: 0.3 }}
                >
                    {/* Close Button */}
                    <div className="flex items-center justify-between p-4 bg-gray-900">
                        <h2 className="text-xl">Menu</h2>
                        <AiOutlineClose className="text-3xl cursor-pointer" onClick={closeMenu} />
                    </div>

                    {/* Menu Links */}
                    <ul className="flex flex-col p-6 space-y-6">
                        <li><a href="/profile" className="hover:text-gray-400 transition-all duration-300">About</a></li>
                        <li><a href="/settings" className="hover:text-gray-400 transition-all duration-300">Services</a></li>
                        <li><a href="/logout" className="hover:text-gray-400 transition-all duration-300">Contact</a></li>
                    </ul>
                </motion.div>

                {/* Overlay with Framer Motion */}
                <motion.div
                    className="fixed inset-0 z-40 bg-black"
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                    onClick={closeMenu}
                />
            </header>
        </>
    );
};

export default Header;
