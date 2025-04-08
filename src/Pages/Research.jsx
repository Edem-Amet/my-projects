import { motion } from "framer-motion";
import { FaFilePdf, FaFilePowerpoint, FaFlask, FaMicroscope } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Import local files
import researchImage from "../assets/bow.WEBP";
import researchPoster from "../assets/RAMAN POSTER_gofinale.pdf";
import researchPaper from "../assets/Raman Paper.pdf";

const Research = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const currentResearch = {
        title: "Spectroscopic Analysis of Local Alcoholic Bitters",
        image: researchImage, // Using imported image
        description: "Raman spectroscopy investigation of 13 local alcoholic bitters from Kumasi, Ghana to verify composition and labeled alcohol content.",
        collaborators: [
            "Ephraim Rodgers",
            "Deborah Abayie"
        ],
        supervisors: [
            "Dr. Akyana Britwum",
            "Dr. Michael Donkor",
            "Dr. George Dwapanyin"
        ],
        methods: [
            "Portable Raman spectroscopy",
            "Principal Component Analysis (PCA)",
            "Partial Least Squares Regression (PLSR)",
            "Leave-One-Out Cross-Validation"
        ],
        findings: "Demonstrated Raman spectroscopy as an effective non-destructive tool for quality control of local herbal beverages.",
        links: {
            poster: researchPoster, // Using imported file
            paper: researchPaper    // Using imported file
        }
    };

    return (
        <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="max-w-6xl mx-auto"
            >
                {/* Header */}
                <motion.div variants={item} className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Exploring scientific frontiers through physics and computing
                    </p>
                </motion.div>

                {/* Current Research */}
                <motion.div variants={item} className="mb-20">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Cover Image with Hover Effect */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative h-64 sm:h-80 overflow-hidden"
                        >
                            <img
                                src={currentResearch.image}
                                alt="Research Cover"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                                <div>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm mb-3">
                                        <FaMicroscope className="mr-2" /> Active Research
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                        {currentResearch.title}
                                    </h2>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-6 sm:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main Content */}
                                <div className="lg:col-span-2">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h3>
                                    <p className="text-gray-600 mb-6">
                                        {currentResearch.description} Applied advanced spectroscopic techniques and
                                        multivariate analysis to assess sample similarities and verify product labeling accuracy.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                                                Collaborators
                                            </h4>
                                            <ul className="space-y-1">
                                                {currentResearch.collaborators.map((person, i) => (
                                                    <li key={i} className="text-gray-700">{person}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                                                Supervisors
                                            </h4>
                                            <ul className="space-y-1">
                                                {currentResearch.supervisors.map((person, i) => (
                                                    <li key={i} className="text-gray-700">{person}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                                            Key Methods
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {currentResearch.methods.map((method, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm"
                                                >
                                                    {method}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar with Links */}
                                <div className="lg:col-span-1">
                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Research Materials</h3>

                                        <motion.a
                                            whileHover={{ x: 5 }}
                                            href={currentResearch.links.poster}
                                            download="Research-Poster.pptx"
                                            className="flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-center">
                                                <div className="p-2 rounded-md bg-red-100 text-red-600 mr-3">
                                                    <FaFilePowerpoint className="text-xl" />
                                                </div>
                                                <span className="font-medium text-gray-700">Poster Presentation</span>
                                            </div>
                                            <FiExternalLink className="text-gray-400" />
                                        </motion.a>

                                        <motion.a
                                            whileHover={{ x: 5 }}
                                            href={currentResearch.links.paper}
                                            download="Research-Paper.pdf"
                                            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-center">
                                                <div className="p-2 rounded-md bg-blue-100 text-blue-600 mr-3">
                                                    <FaFilePdf className="text-xl" />
                                                </div>
                                                <span className="font-medium text-gray-700">Full Research Paper</span>
                                            </div>
                                            <FiExternalLink className="text-gray-400" />
                                        </motion.a>

                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                                                Key Finding
                                            </h4>
                                            <p className="text-gray-600">
                                                {currentResearch.findings}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Future Research */}
                <motion.div variants={item}>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-12 rounded-2xl text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-primary text-sm mb-4 shadow-sm">
                                <FaFlask className="mr-2" /> Coming Soon
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                Next Research Project
                            </h2>
                            <p className="text-gray-600 mb-6">
                                My next research initiative will explore computational Physics.
                                Stay tuned for updates on this exciting new project!
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-medium"
                            >
                                Notify Me When Published
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Research;