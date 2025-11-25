import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return(
        <section id="contact" className="">
                <div className="container mx-auto text-center">
                    <h1 className="text-2xl font-bold mb-12">Contact me</h1>
                    <div className="mx-auto">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 py-4">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="px-4 py-3 w-1/2 rounded-xl border-2 border-gray-600 bg-secondary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-6">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="px-4 py-3 w-1/2 rounded-xl border-2 border-gray-600 bg-secondary"
                                    placeholder="youremail@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-6">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="px-4 py-3 w-1/2 rounded-xl border-2 border-gray-600 bg-secondary"
                                    placeholder="Your message here."
                                ></textarea>
                            </div>
                            <div>
                                <button
                                type="submit"
                                className="rounded-xl bg-secondary px-6 py-4 border-2 border-gray-600"
                                >Submit</button>
                            </div>
                        </form>
                        <div className="flex flex-row justify-center items-center gap-6 py-6">
                            <a href="https://github.com/condog220" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <FaGithub size={32} />
                            </a>
                            <a href="https://www.linkedin.com/in/connor-allen-21912b2a3/" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <FaLinkedin size={32} />
                            </a>
                            <a href="mailto:connora220@outlook.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <FaEnvelope size={32} />
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Contact;