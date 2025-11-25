import React from "react";
import crossHairImage from "../img/crosshair.png"
import trafficImage from "../img/traffic.png"

const projectData = [
    {
        title: "AimTrainer",
        description: "A 3D aim training game built in Unity to help players improve their accuracy and reaction time in FPS games.",
        image: crossHairImage,
        link: "https://github.com/condog220/Unity-AimTrainer",
        languages: ["C#", "Unity"]
    },
    {
        title: "AI Traffic Simulation",
        description: "A traffic flow simulation developed in Unity to visualize and analyze traffic patterns and management strategies.",
        image: trafficImage,
        link: "https://github.com/condog220/Traffic-Management",
        languages: ["C#", "Unity"],
    },
    {
        title: "Weather App",
        description: "Weather application that fetches real-time weather data using OpenWeather API and displays it in a user-friendly interface.",
        image: "",
        link: "https://github.com/condog220/Py-WeatherApp",
        languages: ["Python", "OpenWeather API"],
    },
    {
        title: "To-Do List CLI",
        description: "A lightweight command-line tool for managing daily tasks, featuring add, list, and complete functionality.",
        image: "",
        link: "https://github.com/condog220/Go-ToDo",
        languages: ["Go"]
    },
    {
        title: "GitHub Trending CLI",
        description: "A CLI utility that scrapes and displays currently trending repositories on GitHub to keep up with the latest open-source projects.",
        image: "",
        link: "https://github.com/condog220/GitHub-Trending-CLI",
        languages: ["Go"],
    },
    {
        title: "OOP Veterinary System",
        description: "A management system for a veterinary clinic demonstrating Object-Oriented Programming principles in Java, handling patient records and appointments.",
        image: "",
        link: "",
        languages: ["Java"],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="flex text-center justify-center py-20">
            <div className="container text-center">
                <h1 className="text-3xl font-bold">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="rounded-xl p-6 border-2 border-secondary bg-secondary mb-aut">
                            <h3 className="font-bold mb-4 text-xl">{project.title}</h3>
                            <p className="mb-6">{project.description}</p>
                            <div className="flex gap-2 ">
                                {project.languages.map((languages, i) => (
                                    <span className="rounded-full bg-primary px-3 py-1">
                                        {languages}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4">
                                <a href={project.link} className="rounded-xl bg-accent text-secondary font-bold px-3 py-2">GitHub</a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects;