import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-8">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Connor Allen</p>
                <div className="flex gap-4">
                    <a href="https://github.com/condog220" aria-label="GitHub" className="hover:text-accent transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/connor-allen-21912b2a3/" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
