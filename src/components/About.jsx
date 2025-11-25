import React from "react";
import user from "../img/user.png"

const techStack = ["Java","C#","Python","Go","JavaScript","Tailwind","React","Unity"]

const About = () => {
    return(
        <section id="about" className="py-20">
            <div className="container justify-center items-center mx-auto">
                <h2 className="text-4xl font-bold text-center mb-14 text-gray-300">About me</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="">
                        <img src={user}></img>
                    </div>
                    <div className="md:w-1/2 rounded-xl border-2 py-40 border-secondary shadow-xl px-10 bg-secondary gap-3">
                        <p className="text-lg">I'm a recent graduate seeking new employment as an aspiring software developer.  I have experience with game development and enjoy finding solutions to challenging issues. Right now, I'm concentrating on honing my backend engineer abilities.</p>
                        
                        <div className="flex flex-col sm:flex-row gap-2 pt-12">
                            {techStack.map((stack,index) => (
                                <p className="px-3 py-1 rounded-xl bg-accent text-secondary font-bold">{stack}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;