import { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaLaptopCode, FaFileAlt } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../assets/edem_logo.png";
import { BiPhoneCall } from "react-icons/bi";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    // Toggle Menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };


        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu]);

    return (
        <>
            {/* Main Navbar */}
            <nav className="bg-white text-secondary fixed top-0 left-0 w-full z-[9999] shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-[80px] py-2">
                        {/* Logo */}
                        <div>
                            <Link to="/" className="flex items-center">
                                <img src={logo} alt="Portfolio Logo" className="h-[100px] w-auto object-contain" />
                                <span className="ml-2 text-xl font-bold hidden sm:inline-block">Portfolio</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:block text-[16px] font-medium">
                            <ul className="flex items-center gap-8">
                                {/* Home */}
                                <li className="hover:text-primary transition-colors duration-300">
                                    <Link to="/" className="flex items-center h-[72px]">
                                        Home
                                    </Link>
                                </li>

                                {/* Projects Dropdown */}
                                <li className="group relative cursor-pointer">
                                    <div className="hover:text-primary flex items-center gap-[2px] h-[72px]">
                                        About Me
                                        <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                                    </div>

                                    {/* Dropdown */}
                                    <div className="absolute left-0 z-[9999] hidden w-[200px] bg-white shadow-lg p-2 text-black rounded-md group-hover:block border border-gray-100">
                                        <ul className="space-y-2">
                                            <Link to="/about">
                                                <li className="p-2 hover:bg-secondary rounded-md hover:text-white transition-colors duration-200 flex items-center gap-2">
                                                    <FaLaptopCode /> My Expertise
                                                </li>
                                            </Link>
                                            <Link to="/about">
                                                <li className="p-2 hover:bg-secondary rounded-md hover:text-white transition-colors duration-200 flex items-center gap-2">
                                                    <FaFileAlt /> My Journey
                                                </li>
                                            </Link>
                                            <Link to="/about">
                                                <li className="p-2 hover:bg-secondary rounded-md hover:text-white transition-colors duration-200">
                                                    View All
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </li>

                                {/* About */}
                                <li className="hover:text-primary transition-colors duration-300">
                                    <Link to="/research" className="flex items-center h-[72px]">
                                        Research
                                    </Link>
                                </li>

                                {/* Projects */}
                                <li className="hover:text-primary transition-colors duration-300">
                                    <Link to="/projects" className="flex items-center h-[72px]">
                                        Projects
                                    </Link>
                                </li>

                                {/* Blog (optional) */}
                                <li className="hover:text-primary transition-colors duration-300">
                                    <Link to="/hobbies" className="flex items-center h-[72px]">
                                        Hobbies
                                    </Link>
                                </li>

                                {/* Contact */}
                                <li className="hover:text-primary transition-colors duration-300">
                                    <Link to="/contact" className="flex items-center h-[72px]">
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center gap-5">
                            {/* Contact Button */}
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 bg-secondary text-white px-4 py-1 rounded-full hover:bg-primary transition-colors duration-300"
                            >
                                <BiPhoneCall /> Let's Talk
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <div className="lg:hidden">
                                {showMenu ? (
                                    <HiMenuAlt1
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all text-secondary hover:text-primary"
                                        size={30}
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all text-secondary hover:text-primary"
                                        size={30}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Side Menu */}
            <div ref={menuRef}>
                <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
            </div>
        </>
    );
};

export default Navbar;