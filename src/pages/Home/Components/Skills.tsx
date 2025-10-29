
import { motion } from "framer-motion";
import { techIcons } from "../../../data/techIcons";
import {Link} from "react-router-dom";

const techCategories = [
    'React (Vite)',
    'ASP.NET',
    'C#',
    'JavaScript',
    'PostgreSQL',
    'GitHub',
    'Python',
    'C++',
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};


const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Skills() {
    return (
        <section className="max-w-screen-2xl py-6 mx-auto">
            {/* Title — slightly nicer but still minimal */}
            <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-6 text-5xl font-bold tracking-tight text-center "
            >
                Skills
            </motion.h1>

            <motion.div className="w-full grid grid-cols-1 ultra_sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto px-4 sm:px-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"

                        viewport={{ once: true, margin: "-60px" }}
            >
                {techCategories.map((category, idx) => (
                    <div key={category} className="my-1 ">
                        <motion.div key={idx} variants={itemVariants}>
                            <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white/70 to-white/40 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-cyan-200">
                                <div className="h-10 w-10">
                                    {techIcons[category] ?? (
                                        <div className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-gray-300  text-sm font-semibold">
                                            {category}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold leading-tight text-gray-900 ">
                                    {category}
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
            <div className={"w-full flex justify-start items-center my-8 px-4 sm:px-8"}>
                <Link
                    to="/Skills"
                    className="
                        px-6 py-3
                        rounded-xl
                        bg-gradient-to-br from-cyan-600 via-sky-500 to-blue-600
                        text-white font-medium
                        shadow-md hover:shadow-lg
                        hover:scale-105
                        hover:from-cyan-700 hover:to-blue-700
                        transition-all duration-300 ease-out
                      "
                >
                    Show More
                </Link>

            </div>
        </section>
    );
}

export default Skills;
