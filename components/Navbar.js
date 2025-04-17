import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Using react-scroll for active link highlighting

// Hamburger Icon Component
const MenuIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

// Close Icon Component
const CloseIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu state
    const [isScrolled, setIsScrolled] = useState(false); // Navbar background state

    // Effect to handle scroll detection for background change
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check in case page loads already scrolled
        handleScroll();
        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', to: 'home' }, // 'to' matches the ID of the section
        { title: 'About', to: 'about' },
        { title: 'Skills', to: 'skills' },
        { title: 'Projects', to: 'projects' },
        { title: 'Contact', to: 'contact' },
    ];

    // Animation Variants for the mobile menu
    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
    };

    // Animation variants for the nav items in mobile
     const mobileNavItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.nav
            initial={false} // Don't animate initial state based on scroll
            animate={isScrolled ? "scrolled" : "top"}
            variants={{
                top: { backgroundColor: 'rgba(17, 24, 39, 0)', backdropFilter: 'blur(0px)' }, // transparent at top
                scrolled: { backgroundColor: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(8px)' }, // Dark blurred bg on scroll
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed w-full top-0 left-0 z-50 shadow-md transition-colors duration-300"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Branding/Logo */}
                    <div className="flex-shrink-0">
                        <ScrollLink
                             to="home" // Links back to top
                             smooth={true}
                             duration={200}
                             spy={true}
                             offset={-70} // Adjust offset if needed
                             className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors"
                         >
                           Pruthvi M Javali
                         </ScrollLink>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.title}
                                    activeClass="text-blue-400 border-b-2 border-blue-400" // Style for active link
                                    to={link.to}
                                    spy={true} // Enables activeClass to be applied automatically
                                    smooth={true}
                                    offset={-60} // Adjust offset to account for navbar height
                                    duration={300} // Scroll duration
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 border-b-2 border-transparent" // Base style + hover + transition + transparent border
                                >
                                    {link.title}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="md:hidden bg-gray-800/95 backdrop-blur-sm shadow-lg pb-3 pt-2 space-y-1 sm:px-3 px-2 absolute w-full" // Absolute positioning for dropdown
                     >
                         {/* Apply staggerChildren for list item animation */}
                         <motion.ul
                           variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 }}}}
                           initial="hidden"
                           animate="visible"
                           className="space-y-1" // Use ul for semantics
                          >
                            {navLinks.map((link) => (
                               <motion.li key={link.to} variants={mobileNavItemVariants}>
                                 <ScrollLink
                                    activeClass="bg-gray-700 text-white" // Different active style for mobile
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-60} // Consistent offset
                                    duration={500}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                 >
                                    {link.title}
                                 </ScrollLink>
                              </motion.li>
                           ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;