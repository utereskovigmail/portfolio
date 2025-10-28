// src/Footer.tsx
import { motion } from "framer-motion";

export default function Footer() {
    const linksNames = ['Home', 'Projects', "Programing skills", 'About Me', 'Contact Me'];
    const links = ['/', '/projects', '/skills', '/about', '/contact'];
    return (
        <footer className="bg-gradient-to-br from-indigo-50 via-white to-pink-100 border-t border-gray-200">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-10 text-center text-gray-700"
            >
                {/* Name / Logo */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Yurii Tereshkovych
                </h2>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium text-gray-600">
                    {
                        linksNames.map((link, idx) => (
                            <a key={link} href={links[idx]} className="hover:text-indigo-600 transition-colors">{link}</a>
                        ))
                    }
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-5 mb-6">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <i className="fa-brands fa-github text-xl"></i>
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                        <i className="fa-brands fa-linkedin text-xl"></i>
                    </a>
                    <a
                        href="mailto:tereshkovych_yurii@gymnasia21.lutsk.ua"
                        className="text-gray-500 hover:text-red-600 transition-colors"
                    >
                        <i className="fa-solid fa-envelope text-xl"></i>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Yurii Tereshkovych — All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
}
