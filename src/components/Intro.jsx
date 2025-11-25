import React from "react";

const Main = () => {
    return(
        <section id="main" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container text-center mx-auto text-gray-300">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hello, I'm <span className="font-bold">Connor Allen</span>
                </h1>
                <p className="font-bold text-4xl">
                    Aspiring Software Engineer
                </p>
                <div className="flex justify-center gap-12 pt-10">
                    <a href="#projects" className="rounded-full px-10 py-4 font-bold text-primary bg-accent hover:translate-y-1 duration-100">Projects</a>
                    <a href="#contact" className="rounded-full px-10 py-4 font-bold text-primary bg-accent hover:translate-y-1 duration-100">Contact</a>
                </div>
            </div>
        </section>

    )
}

export default Main;