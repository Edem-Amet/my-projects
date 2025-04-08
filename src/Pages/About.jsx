import { motion } from "framer-motion";
import {
    FaCode,
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
    FaDatabase,
    FaTools,
    FaHtml5,
    FaJsSquare,
    FaReact,
    FaPhp,
    FaJava,
    FaPython,
    FaNodeJs,
    FaBootstrap,
    FaHandsHelping
} from "react-icons/fa";
import { FiAward, FiUser } from "react-icons/fi";
import { MdSchool, MdWork } from "react-icons/md";
import {
    SiTailwindcss,
    SiMongodb,
    SiPostman,
    SiCplusplus,
    SiFigma,
    SiAdobephotoshop,
    SiGit,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import volunteer1 from "../assets/v2.jpeg";
import volunteer2 from "../assets/v1.jpeg";
import volunteer3 from "../assets/v3.jpeg";
import volunteer4 from "../assets/spiepic.jpeg";
import volunteer5 from "../assets/v5.jpg";

const About = () => {
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

    const skills = [
        {
            name: "Frontend Development",
            icon: <FaLaptopCode className="text-3xl" />,
            subSkills: [
                { name: "HTML5", icon: <FaHtml5 style={{ color: "#E34F26" }} className="text-xl" /> },
                { name: "CSS3", icon: <FaHtml5 style={{ color: "#264DE4" }} className="text-xl" /> },
                { name: "JavaScript", icon: <FaJsSquare style={{ color: "#F7DF1E" }} className="text-xl" /> },
                { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} className="text-xl" /> },
                { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952B3" }} className="text-xl" /> },
                { name: "Tailwind", icon: <SiTailwindcss style={{ color: "#38B2AC" }} className="text-xl" /> },
            ],
        },
        {
            name: "Backend Development",
            icon: <FaServer className="text-3xl" />,
            subSkills: [
                { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} className="text-xl" /> },
                { name: "PHP", icon: <FaPhp style={{ color: "#777BB4" }} className="text-xl" /> },
                { name: "Java", icon: <FaJava style={{ color: "#007396" }} className="text-xl" /> },
                { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} className="text-xl" /> },
            ],
        },
        {
            name: "Mobile Development",
            icon: <FaMobileAlt className="text-3xl" />,
            subSkills: [
                { name: "React Native", icon: <FaReact style={{ color: "#61DAFB" }} className="text-xl" /> },
            ],
        },
        {
            name: "Database",
            icon: <FaDatabase className="text-3xl" />,
            subSkills: [
                { name: "MySQL", icon: <GrMysql style={{ color: "#4479A1" }} className="text-xl" /> },
                { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} className="text-xl" /> },
            ],
        },
        {
            name: "UI/UX Design",
            icon: <FaTools className="text-3xl" />,
            subSkills: [
                { name: "Figma", icon: <SiFigma style={{ color: "#F24E1E" }} className="text-xl" /> },
                { name: "Photoshop", icon: <SiAdobephotoshop style={{ color: "#31A8FF" }} className="text-xl" /> },
            ],
        },
        {
            name: "Tools",
            icon: <SiGit className="text-3xl" />,
            subSkills: [
                { name: "Git", icon: <SiGit style={{ color: "#F05032" }} className="text-xl" /> },
                { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} className="text-xl" /> },
                { name: "C++", icon: <SiCplusplus style={{ color: "#00599C" }} className="text-xl" /> },
            ],
        },
    ];

    const timeline = [
        {
            id: 1,
            title: "Teaching & Research Assistant",
            company: "KNUST Physics Department",
            date: "2024 - Present",
            icon: <MdWork />,
            description: "Help to conduct and supervise lab sessions for undergraduate Physics students, teach solid state physics, Java and web programming, and assist with research literature reviews.",
            type: "work"
        },
        {
            id: 2,
            title: "BSc. Physics (Computing)",
            company: "KNUST",
            date: "2020 - 2024",
            icon: <MdSchool />,
            description: "Attained a BSc in Physics with Computing specialization, (Graduated in November 2024).",
            type: "education"
        },
        {
            id: 3,
            title: "Web Development",
            company: "Udacity",
            date: "2023",
            icon: <FiAward />,
            description: "Advanced web development certification focusing on modern JavaScript.",
            type: "education"
        }
    ];

    const volunteerImages = [volunteer1, volunteer2, volunteer3, volunteer4, volunteer5];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="max-w-6xl mx-auto"
            >
                {/* Hero Section */}
                <motion.div variants={item} className="text-center mb-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8">
                            Full-stack developer specializing in building exceptional digital experiences with modern technologies.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block"
                        >
                            <a
                                href="#contact"
                                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-opacity"
                            >
                                Let's Connect
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    <motion.div variants={item} className="flex flex-col justify-center order-2 lg:order-1">
                        <h2 className="text-3xl font-bold mb-6">
                            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Am I?</span>
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                I'm a curious, creative, and driven individual with a strong background in Physics and Computing. I enjoy solving complex problems and exploring how physical principles can be modeled, simulated, or enhanced through technology.
                            </p>
                            <p>
                                My journey has led me to work on diverse projects—from Raman spectroscopy analysis of herbal bitters to machine learning applications in computational physics, blending hands-on science with code.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                            <img
                                src="https://www.makerstations.io/content/images/2023/06/asher-mitilinakis-desk-setup-01-1.JPG"
                                alt="Workstation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <motion.div variants={item} className="mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="text-secondary mr-3">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {skill.subSkills.map((sub, i) => (
                                            <div key={i} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg shadow-lg shadow-gray-500">
                                                <span className="mb-2">
                                                    {sub.icon}
                                                </span>
                                                <span className="text-sm text-gray-700 text-center">
                                                    {sub.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Timeline Section */}
                <motion.div variants={item} className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
                    </h2>
                    <div className="relative">
                        {/* Timeline line - Hidden on mobile */}
                        <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>

                        <div className="space-y-12 md:space-y-0">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-0 md:pr-8' : 'md:ml-auto md:pl-8'}`}
                                >
                                    <div className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                                        <div className="flex items-start">
                                            <div className={`p-3 rounded-lg ${item.type === 'work' ? 'bg-primary' : 'bg-secondary'} text-white mr-4`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-primary font-medium mb-2">
                                                    {item.company} • {item.date}
                                                </p>
                                                <p className="text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                {/* Content */}
                <div className="w-full md:w-2/3 p-8">
                    <div className="flex items-start gap-6">
                        <div className="p-4 bg-primary/10 rounded-xl text-primary">
                            <FaHandsHelping className="text-3xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                Science Outreach Volunteer
                                <span className="block text-lg text-secondary">KNUST Photonics Students Chapter</span>
                            </h3>
                        </div>
                    </div>
                </div>


                {/* Volunteer Section */}
                <motion.div variants={item} className="mb-20">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row pb-8 gap-6">
                            {/* Image Gallery */}
                            <div className="w-full md:w-1/3 p-6 bg-gray-50 flex flex-wrap justify-center items-center gap-4">
                                {volunteerImages.map((imgSrc, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`Volunteer activity ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <div>
                                <p className="text-primary py-2 px-6">
                                    As an active volunteer, I participate in science outreach programs that promote optics and photonics through:
                                </p>
                                <ul className="list-disc text-gray-600 space-y-2 pl-10 pr-6 mb-6">
                                    <li>Hands-on experimental demonstrations</li>
                                    <li>Interactive workshops for high school students</li>
                                    <li>STEM career guidance sessions</li>
                                    <li>Community science awareness programs</li>
                                </ul>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block"
                                >
                                    <a
                                        href="https://www.linkedin.com/company/knust-photonics-chapter/"
                                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3
                                         rounded-lg font-medium transition-opacity ml-5"
                                    >
                                        Follow Us
                                    </a>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Philosophy Section */}
                <motion.div variants={item} className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 sm:p-12 rounded-2xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Philosophy</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FiUser className="text-4xl" />,
                                title: "User First",
                                content: "Solutions start with understanding real user needs and behaviors."
                            },
                            {
                                icon: <FaCode className="text-4xl" />,
                                title: "Clean Code",
                                content: "Maintainable, well-structured code is non-negotiable."
                            },
                            {
                                icon: <FiAward className="text-4xl" />,
                                title: "Continuous Growth",
                                content: "Daily learning to stay ahead in evolving tech landscape."
                            }
                        ].map((principle, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-secondary mb-4">
                                    {principle.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {principle.title}
                                </h3>
                                <p className="text-gray-600">
                                    {principle.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;