import { Link } from "react-router-dom";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    function MobileButtonHandleClick(){
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-white sticky top-0 z-50 rounded rounded-b-lg border-b border-slate-100">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-9 lg:px-12">
                <div className="flex items-center justify-between py-6">
                    {/* Left Navigation */}
                    <nav className="hidden lg:flex items-center space-x-9">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/skills"
                            className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
                        >
                            Programing Skills
                        </Link>
                    </nav>

                    {/* Center Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                                <img
                                    className="w-12 h-12 object-cover"
                                    src="/imgs/48540-4.png"
                                    alt="logo"
                                />


                            </div>
                            <span className="text-2xl font-bold text-gray-900">Yurii Tereshkovych</span>
                        </Link>
                    </div>

                    {/* Right Navigation */}
                    <nav className={`hidden lg:flex items-center space-x-9`}>
                        <Link
                            to="/about"
                            className="text-gray-600 hover:text-cyan-700 px-3 py-3 text-sm font-medium transition-colors"
                        >
                            About Me
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-cyan-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-cyan-800 transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button type="button" className="text-gray-600 hover:text-cyan-700 p-3" onClick={MobileButtonHandleClick}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                        key="box"
                        initial={{ opacity: 0, y: 60, scale: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 60, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`lg:hidden border-t border-gray-200`}>
                        <div className="px-6 py-3 space-y-3">
                            <Link
                                to="/"
                                className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
                            >
                                Services
                            </Link>
                            <Link
                                to="/portfolio"
                                className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
                            >
                                Portfolio
                            </Link>
                            <Link
                                to="/blog"
                                className="block text-gray-600 hover:text-cyan-700 px-3 py-3 text-base font-medium"
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="block bg-cyan-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-cyan-800 transition-colors mt-3 text-center"
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>


        </header>
    );
}


export default Header;