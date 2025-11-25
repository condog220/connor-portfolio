import React from "react";

const NavBar = () => {

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center pt-6">
                <a href="#" className="text-2xl font-bold text-gray-300">
                    Connor Allen
                </a>
                <div className="hidden md:flex space-x-8">
                    {['About', 'Projects', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-accent transition-colors font-bold">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;