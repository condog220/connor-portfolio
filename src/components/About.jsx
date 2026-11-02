import React from "react";
import user from "../img/user.png"

const techStack = ["Java","C#","Python","Go","JavaScript","Tailwind","React","Unity"]

const About = () => {
    return(
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100">About me</h2>
                <div className="mx-auto mt-3 mb-14 h-1 w-16 rounded-full bg-accent"></div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <img
                        src={user}
                        alt="Connor Allen"
                        className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shrink-0"
                    />
                    <div className="md:flex-1 rounded-xl border border-white/10 shadow-xl p-8 md:p-10 bg-secondary text-left">
                        <p className="text-lg text-gray-200">I'm a software engineer building and shipping software professionally. I started out in game development with Unity and C#, and I enjoy digging into challenging problems. These days my focus is on backend engineering and writing reliable, maintainable code.</p>

                        <div className="flex flex-wrap gap-2 pt-8">
                            {techStack.map((stack) => (
                                <span key={stack} className="px-3 py-1 rounded-full bg-accent text-secondary text-sm font-bold">{stack}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;
