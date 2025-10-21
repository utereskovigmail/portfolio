import {motion} from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import {SiSharp, SiPostgresql, SiTailwindcss, SiTypescript, SiDotnet } from "react-icons/si";
import type {JSX} from "react";


function ProjectsOverview(){

    const techIcons: Record<string, JSX.Element> = {
        "React (Vite)": <FaReact className="text-sky-500" />,
        TypeScript: <SiTypescript className="text-blue-500" />,
        TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
        GitHub: <FaGithub className="text-gray-800" />,
        "C#": <SiSharp className="text-violet-600" />,
        "ASP.NET": <SiDotnet className="text-indigo-600" />,
        PostgreSQL: <SiPostgresql className="text-blue-600" />,
        HTML: <FaHtml5 className="text-orange-500" />,
        CSS: <FaCss3Alt className="text-blue-500" />,
        JavaScript: <FaJs className="text-yellow-400" />,
    };

    const projects = [
        {
            Name: 'Quizzy',
            Short_description:
                'A web platform for students and teachers to create, take, and manage interactive tests. Built together with friends as a collaborative school project.',
            Full_description:
                'Quizzy is an online testing system designed to make learning more dynamic and accessible. Students can take quizzes in real time, while teachers can create, edit, and analyze results through an intuitive interface. Working on this project taught me how to design scalable architecture using ASP.NET, manage teamwork, and maintain clear version control through GitHub.',
            GitHub: 'https://github.com/oleksandr0147258369/QuizPlatform',
            Technologies: [
                'C#',
                'ASP.NET',
                'HTML',
                'CSS',
                'JavaScript',
                'PostgreSQL',
            ],
        },
        {
            Name: 'Portfolio',
            Short_description:
                'A personal web portfolio I built from scratch to showcase my projects, interests, and technical skills.',
            Full_description:
                'This portfolio represents both my technical journey and my creative mindset. It was developed using React and TailwindCSS, with a focus on clean design, intuitive navigation, and responsive layout. Through this project, I learned how to structure content for clarity and maintain a consistent visual identity across all components.',
            GitHub: 'https://github.com/utereskovigmail/portfolio',
            Technologies: ['React (Vite)', 'TypeScript', 'TailwindCSS'],
        },
        {
            Name: 'Coin Catalog',
            Short_description:
                'A web platform designed to help users track coin prices, manage collections, and explore historical data.',
            Full_description:
                'Coin Catalog aims to unite coin collectors by providing a simple way to organize and expand their collections. The app allows users to record prices, view historical data, and share their findings. This project combines my passion for numismatics and technology, using React for the frontend and ASP.NET with PostgreSQL for reliable data management.',
            GitHub: 'Not ready yet',
            Technologies: [
                'React (Vite)',
                'TypeScript',
                'TailwindCSS',
                'ASP.NET',
                'C#',
                'PostgreSQL',
            ],
        },
    ];


    return (
        <section className="w-full py-10 bg-gradient-to-b from-white to-gray-50">
            <motion.div
                key="projects-section"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto w-full max-w-8xl px-4 sm:px-8 lg:px-12"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3">
                        Projects
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        A curated collection of my recent works and collaborations.
                    </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.05 }}
                            className={`rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-6 lg:col-span-1 ${index===2 ? "sm:col-span-2" : ""} hover:ring-1 hover:ring-cyan-200`}
                        >
                            <div className="mb-3">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                                    {project.Name}
                                </h2>
                                <p className="text-gray-600 text-sm">{project.Short_description}</p>
                            </div>

                            <div className="mb-3">
                                <a
                                    href={project.GitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-cyan-600 hover:text-cyan-700 underline"
                                >
                                    View on GitHub →
                                </a>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">
                                    Technologies
                                </h3>
                                <ul className="flex flex-wrap gap-3">
                                    {project.Technologies.map((technology: string, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-1 text-sm text-gray-700"
                                        >
                                            {techIcons[technology]}
                                            <span>{technology}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>

    )
}

export default ProjectsOverview;