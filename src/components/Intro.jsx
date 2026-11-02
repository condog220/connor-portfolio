import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
    return(
        <section id="main" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="container text-center mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-100">
                    Hello, I'm{" "}
                    <span className="text-accent">Connor Allen</span>
                </h1>
                <p className="font-semibold text-2xl md:text-4xl text-gray-200">
                    Software Engineer
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-10">
                    <a href="#projects" className="rounded-full px-10 py-4 font-bold text-primary bg-accent border-2 border-accent hover:translate-y-1 duration-100">Projects</a>
                    <a href="#contact" className="rounded-full px-10 py-4 font-bold text-accent border-2 border-accent hover:bg-accent/10 hover:translate-y-1 duration-100">Contact</a>
                </div>
                <div className="flex justify-center gap-6 pt-10 text-gray-400">
                    <a href="https://github.com/condog220" aria-label="GitHub" className="hover:text-accent transition-colors">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/connor-allen-21912b2a3/" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                        <FaLinkedin size={28} />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Main;
