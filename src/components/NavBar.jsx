import React, { useState } from "react";

const links = ['About', 'Projects', 'Contact'];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur py-4 border-b border-white/10">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-gray-300">
                    Connor Allen
                </a>
                <div className="hidden md:flex space-x-8">
                    {links.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-accent transition-colors font-bold">
                            {item}
                        </a>
                    ))}
                </div>
                <button
                    className="md:hidden text-gray-300 font-bold"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>
            {open && (
                <div className="md:hidden flex flex-col items-center gap-4 pt-4">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className="text-gray-300 hover:text-accent transition-colors font-bold"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBar;
