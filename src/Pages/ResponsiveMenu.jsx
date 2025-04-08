import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
    FaHome,
    FaLaptopCode,
    FaFileAlt,
    FaUser,
    FaEnvelope,
    FaFlask,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
    return (
        <div
            className={`fixed top-0 z-50 ${showMenu ? "left-0" : "-left-[100%]"
                } h-screen w-[75%] bg-primary/95 text-white transition-all duration-300 pt-24 pb-6 px-6 flex flex-col justify-between overflow-y-auto`}
        >
            {/* Menu Section */}
            <nav className="mt-12">
                <ul className="space-y-6">
                    {[
                        {
                            path: "/",
                            label: "Home",
                            icon: <FaHome className="text-lg" />
                        },
                        {
                            path: "../Pages/About.jsx",
                            label: "About Me",
                            icon: <MdWork className="text-lg" />,
                            subItems: [
                                { path: "/about", label: "My Expertise", icon: <FaLaptopCode className="text-sm" /> },
                                { path: "/about", label: "My Journey", icon: <FaFileAlt className="text-sm" /> }
                            ]
                        },
                        {
                            path: "/research",
                            label: "Research",
                            icon: <FaFlask className="text-lg" />
                        },
                        {
                            path: "/projects",
                            label: "Projects",
                            icon: <FaLaptopCode className="text-lg" />
                        },
                        {
                            path: "/hobbies",
                            label: "My Hobbies",
                            icon: <FaUser className="text-lg" />
                        },
                        {
                            path: "/contact",
                            label: "Contact",
                            icon: <FaEnvelope className="text-lg" />
                        },
                    ].map((item) => (
                        <li key={item.path} className="group relative">
                            <div className="flex items-center gap-4 hover:text-secondary transition-colors duration-50 py-2">
                                <span className="text-secondary">
                                    {item.icon}
                                </span>
                                <Link
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className="text-lg font-medium flex-1"
                                >
                                    {item.label}
                                </Link>
                                {item.subItems && (
                                    <span className="transform group-hover:rotate-90 transition-transform">
                                        <FiChevronRight />
                                    </span>
                                )}
                            </div>

                            {/* Submenu items */}
                            {item.subItems && (
                                <div className="ml-10 mt-1 space-y-2 hidden group-hover:block animate-fadeIn">
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            onClick={toggleMenu}
                                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-white pl-2 py-2 rounded-lg hover:bg-white/10 transition-all"
                                        >
                                            <span className="text-secondary/80">
                                                {subItem.icon}
                                            </span>
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer Section */}
            <div className="mt-auto pt-6 border-t border-white/10">
                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <FaGithub className="text-lg" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <FaLinkedin className="text-lg" />
                    </a>
                    <a
                        href="https://twitter.com/yourhandle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <FaTwitter className="text-lg" />
                    </a>
                </div>

                {/* Call to Action */}
                <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="block w-full bg-white hover:bg-secondary/90 text-secondary text-center py-3 rounded-lg font-bold transition-colors duration-300 mb-4"
                >
                    Get In Touch
                </Link>

                {/* Legal Links */}
                <div className="flex justify-center gap-4 text-xs text-white/60">
                    <Link
                        to="/privacy"
                        onClick={toggleMenu}
                        className="hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <span>•</span>
                    <Link
                        to="/terms"
                        onClick={toggleMenu}
                        className="hover:text-white transition-colors"
                    >
                        Terms
                    </Link>
                </div>

                <p className="text-center text-white/40 text-xs mt-4">
                    © {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>
            </div>
        </div>
    );
};

ResponsiveMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;