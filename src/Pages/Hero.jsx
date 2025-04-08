import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

import ProfileImage from "../assets/profile.jpg";

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "anticipate"
            }
        }
    };

    const floatingCircleVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between 
        bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-0 overflow-hidden">
            {/* Left Content */}
            <motion.div
                className="flex-1 text-primary mt-8 md:mt-20px"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-secondary sm:text-5xl md:text-6xl font-extrabold leading-tight"
                    variants={itemVariants}
                >
                    Hello, I am <br />
                    <motion.span
                        className="text-secondary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Edem Ametepeh
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg text-gray-700 mt-4 max-w-lg"
                    variants={itemVariants}
                >
                    Teaching Assistant at KNUST with a BSc in Physics, passionate about Artificial Intelligence and
                    Human-Computer Interaction research, digital inclusion, and building impactful solutions
                    as a full-stack developer.
                </motion.p>

                {/* Social Media Links */}
                <motion.div
                    className="flex items-center space-x-4 mt-6"
                    variants={itemVariants}
                >
                    <a
                        href="https://www.Instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-xl sm:text-2xl transition-all duration-300 hover:-translate-y-1"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ametepeh-emmanuel-174139244/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-xl sm:text-2xl transition-all duration-300 hover:-translate-y-1"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/Edem-Amet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-xl sm:text-2xl transition-all duration-300 hover:-translate-y-1"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary text-xl sm:text-2xl transition-all duration-300 hover:-translate-y-1"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    variants={itemVariants}
                >
                    <motion.button
                        className="bg-secondary text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-primary transition-all duration-300 hover:shadow-xl hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        href="#Contact"
                        aria-label="Send a mail"
                    >
                        View Portfolio
                    </motion.button>
                    <motion.button
                        className="border border-gray-600 px-6 py-3 rounded-full text-base sm:text-lg font-semibold text-gray-700 hover:border-primary hover:text-white hover:bg-primary transition-all duration-300 hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore More
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md"
                    variants={itemVariants}
                >
                    <div className="bg-secondary p-4 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold text-white">3+</h3>
                        <p className="text-gray-300">Years Experience</p>
                    </div>
                    <div className="bg-primary p-4 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-bold text-white">7+</h3>
                        <p className="text-gray-300">Projects Completed</p>
                    </div>
                    <div className="bg-clip bg-gradient-to-r from-gray-900 to-secondary p-4 rounded-lg shadow-sm col-span-2 sm:col-span-1">
                        <h3 className="text-2xl font-bold text-white">8+</h3>
                        <p className="text-gray-300">Happy Clients</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Content (Image & Floating Elements) */}
            <motion.div
                className="relative flex-1 flex justify-center items-center mt-10 md:mt-0"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-2xl shadow-2xl
                 overflow-hidden border-white mt-[-50px] lg:mr-[250px] md:mt-[-60px] shadow-secondary/50">
                    <img
                        src={ProfileImage}
                        alt="Edem Amet - UI/UX Designer"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Elements */}
                <motion.div
                    className="absolute top-8 right-8 w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full shadow-lg"
                    variants={floatingCircleVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-8 left-8 w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full shadow-lg"
                    variants={floatingCircleVariants}
                    animate="animate"
                    style={{ animationDelay: "0.5s" }}
                />

                {/* Decorative elements */}
                <motion.div
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                />
                <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/10 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                />
            </motion.div>

        </section>
    );
};

export default Hero;