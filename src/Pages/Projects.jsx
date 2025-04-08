import { motion } from "framer-motion";
import ecommerceImage from "../assets/E-commerce.png";
import charityImage from "../assets/charity.png";
import flightBookingImage from "../assets/flight.png";
import furnitureImage from "../assets/Furniture.png";
import pizzaAdminImage from "../assets/pizza.png";
import bookshopImage from "../assets/spiritbook.png";
import weatherAppImage from "../assets/weather.png";
import foodOrderingImage from "../assets/Food.png";

const projects = [
    {
        id: 1,
        title: "Full E-Commerce Platform",
        description: "Complete online store with user accounts, payment processing, and admin dashboard.",
        tags: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Nodemailer"],
        github: "https://github.com/Edem-Amet",
        live: "#",
        image: ecommerceImage,
    },
    {
        id: 2,
        title: "Charity Donation Platform",
        description: "Secure donation system with campaign tracking and donor management.",
        tags: ["React", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/Edem-Amet",
        live: "#",
        image: charityImage,
    },
    {
        id: 3,
        title: "Flight Booking System",
        description: "Comprehensive flight reservation system with seat selection and payment processing.",
        tags: ["Java Swing", "JDBC", "MySQL"],
        github: "https://github.com/Edem-Amet",
        live: "#",
        image: flightBookingImage,
    },
    {
        id: 4,
        title: "Furniture E-Commerce",
        description: "Modern furniture store with 3D product preview and AR room visualization.",
        tags: ["React", "Bootstrap CSS"],
        github: "https://github.com/Edem-Amet/sosak_woodworks",
        live: "https://edem-amet.github.io/sosak_woodworks/",
        image: furnitureImage,
    },
    {
        id: 5,
        title: "Pizza Admin Dashboard",
        description: "Real-time order management system with analytics and inventory control.",
        tags: ["HTML5", "Bootstrap CSS", "Laravel PHP"],
        github: "https://github.com/Edem-Amet/pizza_management-side_website",
        live: "https://www.linkedin.com/posts/ametepeh-emmanuel-174139244_webdevelopment-pizza-activity-7108869339553894400-f9ax?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyIPKgBngAfiikk5xQb018nn--zZ6lG7bc",
        image: pizzaAdminImage,
    },
    {
        id: 6,
        title: "Bookshop Website",
        description: "Interactive bookstore with recommendation engine and reading progress tracking.",
        tags: ["HTML5", "Bootstrap CSS", "JavaScript"],
        github: "https://github.com/Edem-Amet/Ebook",
        live: "https://edem-amet.github.io/Ebook/",
        image: bookshopImage,
    },
    {
        id: 7,
        title: "Weather Application",
        description: "Hyper-local weather forecasts with severe weather alerts and historical data.",
        tags: ["React", "JavaScript", "Mapbox"],
        github: "#https://github.com/Edem-Amet",
        live: "#",
        image: weatherAppImage,
    },
    {
        id: 8,
        title: "Food Ordering Website",
        description: "First web app project. A food ordering platform with menu selection and order.",
        tags: ["HTML5", "CSS", "Javascript"],
        github: "https://github.com/Edem-Amet",
        live: "#",
        image: foodOrderingImage,
    },
];

// Enhanced animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            when: "beforeChildren",
            delayChildren: 0.2
        }
    }
};

const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
        }
    },
    hover: {
        y: -8,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                {/* Enhanced Section Header */}
                <motion.div
                    variants={projectVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Each project represents a unique challenge solved with clean code and thoughtful design.
                        <span className="block mt-2 text-sm text-gray-500">Hover over cards for previews and code snippets.</span>
                    </motion.p>
                </motion.div>

                {/* Enhanced Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 md:gap-10 gap-20">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            whileHover="hover"
                            className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300
                             flex flex-col border border-gray-100 shadow-gray-700"
                        >
                            {/* Project Image with Gradient Overlay */}
                            <div className="relative h-56 bg-gray-200 overflow-hidden group">
                                {project.image && (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span className="text-white font-medium text-lg">
                                                Click to explore →
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-primary mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-800 mb-5 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Code Snippet with Copy Button */}
                                    {project.codeSnippet && (
                                        <div className="mb-5 relative group">
                                            <button
                                                className="absolute right-2 top-2 bg-secondary text-white px-2 py-1 rounded text-xs opacity-0 
                                                group-hover:opacity-100 transition-opacity border border-gray-300"
                                                onClick={() => navigator.clipboard.writeText(project.codeSnippet)}
                                            >
                                                Copy
                                            </button>
                                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700">
                                                <code>{project.codeSnippet}</code>
                                            </pre>
                                        </div>
                                    )}

                                    {/* Tags with Hover Effects */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map((tag, index) => (
                                            <motion.span
                                                key={index}
                                                className="bg-gradient-to-r from-gray-800 to-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full border border-primary/20"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(99, 102, 241, 0.2)"
                                                }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced Action Buttons */}
                                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                                    <motion.a
                                        href={project.github}
                                        className="flex-1 text-center bg-primary hover:bg-gradient-to-r from-gray-800 to-secondary text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        View Code
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        className="flex-1 text-center bg-secondary hover:bg-gradient-to-r from-gray-800 to-secondary text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                    >
                        View All Projects
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;