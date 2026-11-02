import React from "react";
import { FaGithub, FaLock } from "react-icons/fa";
import projectData from "../data/projects.json";

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100">Projects</h2>
                <div className="mx-auto mt-3 mb-4 h-1 w-16 rounded-full bg-accent"></div>
                <p className="text-gray-400 text-center mb-12">Personal projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <div key={project.title} className="flex flex-col text-left rounded-xl p-6 border border-white/10 bg-secondary shadow-lg hover:-translate-y-1 hover:border-accent/60 transition duration-200">
                            <h3 className="font-bold mb-3 text-xl text-gray-100">{project.title}</h3>
                            <p className="mb-6 text-gray-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.languages.map((language) => (
                                    <span key={language} className="rounded-full bg-primary border border-white/10 px-3 py-1 text-xs text-gray-200">
                                        {language}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-auto pt-6">
                                {project.link ? (
                                    <a href={project.link} className="inline-flex items-center gap-2 rounded-xl bg-accent text-secondary font-bold px-4 py-2 hover:brightness-110 transition">
                                        <FaGithub /> GitHub
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-2 text-gray-400 text-sm">
                                        <FaLock /> Not available to view
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;
