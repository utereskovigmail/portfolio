
import { motion } from "framer-motion";
import { techIcons } from "../../data/techIcons";

const techCategories: Record<string, string[]> = {
    Frontend: [
        "React (Vite)",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Bootstrap",
    ],
    Backend: ["ASP.NET", "C#", "Python", "C++"],
    Databases: ["SQL", "PostgreSQL", "MySQL", "SQLite"],
    Devops: ["GitHub"],
    Tools: ["Figma", "Postman"],
};

const categories = ["Frontend", "Backend", "Databases", "Devops", "Tools"];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Skills() {
    return (
        <section className="w-full py-12">
            {/* Title — slightly nicer but still minimal */}
            <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-6 text-5xl font-bold tracking-tight text-center"
            >
                Skills
            </motion.h1>

            <div className="max-w-7xl mx-auto">
                {categories.map((category) => (
                    <div key={category} className="my-6">
                        <div className="mb-4 flex items-center gap-2">
                            <h2 className="text-2xl font-semibold">{category}</h2>
                            <span className="rounded-full px-2 py-0.5 text-xs ring-1 ring-gray-300 dark:ring-gray-700 text-muted-foreground">
                {techCategories[category].length}
              </span>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-6 sm:space-y-0 md:mt-6"
                        >
                            {techCategories[category].map((name: string, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white/70 to-white/40 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700/60 dark:from-gray-800/70 dark:to-gray-800/40">
                                        <div className="h-10 w-10">
                                            {techIcons[name] ?? (
                                                <div className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-gray-300 dark:ring-gray-700 text-sm font-semibold">
                                                    {name[0]}
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-semibold leading-tight text-gray-900 dark:text-gray-100">
                                            {name}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
