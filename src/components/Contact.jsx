import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const iconLink = "flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-colors duration-300";

const Contact = () => {
    return(
        <section id="contact" className="py-24 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Get in touch</h2>
                <div className="mx-auto mt-3 mb-6 h-1 w-16 rounded-full bg-accent"></div>
                <p className="text-gray-400 mb-8">The best way to reach me is by email or LinkedIn.</p>
                <div className="flex flex-row justify-center items-center gap-4">
                    <a href="https://github.com/condog220" aria-label="GitHub" className={iconLink}>
                        <FaGithub size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/connor-allen-21912b2a3/" aria-label="LinkedIn" className={iconLink}>
                        <FaLinkedin size={22} />
                    </a>
                    <a href="mailto:connora220@outlook.com" aria-label="Email" className={iconLink}>
                        <FaEnvelope size={22} />
                    </a>
                </div>
                <p className="mt-6 text-gray-400">connora220@outlook.com</p>
            </div>
        </section>
    )
}

export default Contact;
