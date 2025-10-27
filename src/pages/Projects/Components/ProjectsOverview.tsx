import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { SiSharp, SiPostgresql, SiTailwindcss, SiTypescript, SiDotnet } from "react-icons/si";
import type { JSX } from "react";


import "lightbox2/dist/css/lightbox.min.css";

function ProjectsOverview() {
    const [selected, setSelected] = useState<null | (typeof projects)[number]>(null);


    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selected]);

    const techIcons: Record<string, JSX.Element> = useMemo(
        () => ({
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
        }),
        []
    );

    const projects = [
        {
            Name: "Quizzy",
            Short_description:
                "A web platform for students and teachers to create, take, and manage interactive tests. Built together with friends as a collaborative school project.",
            Full_description:
                "Quizzy is an online testing system designed to make learning more dynamic and accessible. Students can take quizzes in real time, while teachers can create, edit, and analyze results through an intuitive interface. Working on this project taught me how to design scalable architecture using ASP.NET, manage teamwork, and maintain clear version control through GitHub.",
            GitHub: "https://github.com/oleksandr0147258369/QuizPlatform",
            Link: "http://websitenew.somee.com/Home",
            Date: "12.05.2025",
            AdditionalPictures: [
                "/imgs/website/Quizzy/Screenshot 2025-10-27 at 17.12.26.png",
                "/imgs/website/Quizzy/Screenshot 2025-10-27 at 17.15.06.png",
                "/imgs/website/Quizzy/Screenshot 2025-10-27 at 17.15.15.png",
            ],
            Technologies: ["C#", "ASP.NET", "HTML", "CSS", "JavaScript", "PostgreSQL"],
        },
        {
            Name: "Portfolio",
            Short_description:
                "A personal web portfolio I built from scratch to showcase my projects, interests, and technical skills.",
            Full_description:
                "This portfolio represents both my technical journey and my creative mindset. It was developed using React and TailwindCSS, with a focus on clean design, intuitive navigation, and responsive layout. Through this project, I learned how to structure content for clarity and maintain a consistent visual identity across all components.",
            GitHub: "https://github.com/utereskovigmail/portfolio",
            Link: "",
            AdditionalPictures: ["", "", ""],
            Date: "25.10.2025",
            Technologies: ["React (Vite)", "TypeScript", "TailwindCSS"],
        },
        {
            Name: "Coin Catalog",
            Short_description:
                "A web platform designed to help users track coin prices, manage collections, and explore historical data.",
            Full_description:
                "Coin Catalog aims to unite coin collectors by providing a simple way to organize and expand their collections. The app allows users to record prices, view historical data, and share their findings. This project combines my passion for numismatics and technology, using React for the frontend and ASP.NET with PostgreSQL for reliable data management.",
            GitHub: "Not ready yet",
            Link: "Not ready yet",
            Date: "05.8.2025",
            AdditionalPictures: ["", "", ""],
            Technologies: [
                "React (Vite)",
                "TypeScript",
                "TailwindCSS",
                "ASP.NET",
                "C#",
                "PostgreSQL",
            ],
        },
    ];

    return (
        <section className="max-w-screen-2xl py-6 mx-auto">
            <motion.div
                key="projects-section"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto w-full max-w-8xl px-4 sm:px-8"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3">Projects</h1>
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
                            className={`rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-6 lg:col-span-1 ${index === 2 ? "sm:col-span-2" : ""} hover:ring-1 hover:ring-cyan-200 cursor-pointer`}
                            onClick={() => setSelected(project)}
                        >
                            <div className="mb-3">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-1">{project.Name}</h2>
                                <p className="text-gray-600 text-sm">{project.Short_description}</p>
                            </div>

                            <div className="mb-3 flex items-center gap-4">
                                {project.GitHub && project.GitHub !== "Not ready yet" && (
                                    <a
                                        href={project.GitHub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-cyan-600 hover:text-cyan-700 underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View on GitHub →
                                    </a>
                                )}
                                {project.Link && project.Link !== "Not ready yet" && project.Link !== "" && (
                                    <a
                                        href={project.Link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-cyan-600 hover:text-cyan-700 underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>

                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Technologies</h3>
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

                            <div className="mt-5">
                                <button
                                    className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm shadow hover:shadow-md hover:scale-[1.02] transition"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected(project);
                                    }}
                                >
                                    Details
                                </button>
                            </div>
                        </motion.li>
                    ))}
                </ul>


            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-start justify-center px-4 sm:px-6 pt-16 pb-10 bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl border border-gray-100"
                            initial={{ y: 40, scale: 0.98, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 20, scale: 0.98, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{selected.Name}</h2>
                                        <p className="text-sm text-gray-500">{selected.Date}</p>
                                    </div>
                                    <button
                                        aria-label="Close"
                                        className="rounded-xl bg-gray-100 hover:bg-gray-200 transition p-2 text-gray-600"
                                        onClick={() => setSelected(null)}
                                    >
                                        ✕
                                    </button>
                                </div>

                                <p className="mt-4 text-gray-700 leading-relaxed">{selected.Full_description}</p>

                                <div className="mt-6 flex flex-wrap gap-4">
                                    {selected.GitHub && selected.GitHub !== "Not ready yet" && (
                                        <a
                                            href={selected.GitHub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                                        >
                                            <FaGithub /> View GitHub
                                        </a>
                                    )}
                                    {selected.Link && selected.Link !== "Not ready yet" && selected.Link !== "" && (
                                        <a
                                            href={selected.Link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-200 bg-cyan-50 text-cyan-800 hover:bg-cyan-100"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                                {/* Tech pills inside modal */}
                                <div className="mt-6">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h3>
                                    <ul className="flex flex-wrap gap-2">
                                        {selected.Technologies.map((t, i) => (
                                            <li key={i} className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 flex items-center gap-2">
                                                {techIcons[t]}
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Gallery - Lightbox2 */}
                                {selected.AdditionalPictures?.filter((src) => src && src.trim() !== "").length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Gallery</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {selected.AdditionalPictures.filter((src) => src && src.trim() !== "").map((src, idx) => (
                                                <a
                                                    key={idx}
                                                    href={src}
                                                    data-lightbox={`gallery-${selected.Name}`}
                                                    data-title={`${selected.Name} — image ${idx + 1}`}
                                                    className="block overflow-hidden rounded-xl border border-gray-200 group"
                                                >
                                                    <img
                                                        src={src}
                                                        alt={`${selected.Name} ${idx + 1}`}
                                                        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                        loading="lazy"

                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default ProjectsOverview;