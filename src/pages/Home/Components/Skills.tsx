import { motion } from "framer-motion";
import { techIcons } from "../../../data/techIcons";
import { Link } from "react-router-dom";

const techCategories = [
    "React (Vite)",
    "ASP.NET",
    "C#",
    "JavaScript",
    "PostgreSQL",
    "GitHub",
    "Python",
    "C++",
];

// ✅ Додали impact-метрики (онови цифри під себе)
const impactMetrics = [
    { kpi: "Shipped projects", value: "6+" },
    { kpi: "Production apps", value: "2" },          // напр. Quizzy + Portfolio
    { kpi: "Users served", value: "100+" },          // оцінка/факт використання
    { kpi: "Lighthouse (avg)", value: "95+" },       // якщо міряв – лиши/зміни
];

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
        <section className="max-w-screen-2xl py-6 mx-auto" aria-label="Skills section">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mb-2 text-5xl font-bold tracking-tight text-center"
            >
                Skills
            </motion.h1>

            {/* ✅ Impact / Results (новий блок) */}
            <motion.div
                className="mx-auto mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3 px-4 sm:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                aria-label="Impact metrics"
            >
                {impactMetrics.map(({ kpi, value }) => (
                    <motion.div key={kpi} variants={itemVariants}>
                        <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/70 p-4 text-center shadow-sm">
                            <div className="text-2xl font-semibold">{value}</div>
                            <div className="text-sm text-gray-600">{kpi}</div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tech grid */}
            <motion.div
                className="w-full grid grid-cols-1 ultra_sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto px-4 sm:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                role="list"
                aria-label="Technology categories"
            >
                {techCategories.map((category, idx) => (
                    <div key={category} className="my-1" role="listitem">
                        <motion.div key={idx} variants={itemVariants}>
                            <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white/70 to-white/40 p-8 text-center shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-1 hover:ring-cyan-200">
                                <div className="h-10 w-10" aria-hidden="true">
                                    {techIcons[category] ?? (
                                        <div className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-gray-300 text-xs font-semibold">
                                            {category}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold leading-tight text-gray-900">
                                    {category}
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

            {/* ✅ Аналітика застосування навичок (новий блок) */}
            <motion.section
                className="mt-8 px-4 sm:px-8"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                aria-label="How I apply these skills"
            >
                <h2 className="text-2xl font-semibold mb-3">How I apply these skills</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                    <li className="rounded-xl border border-gray-200/70 bg-white/70 p-4">
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">Rubik’s Cube →</span> problem solving, pattern recognition, focus.
                            <br />
                            <span className="text-gray-600">Result:</span> quicker debugging and structured approaches to complex tasks.
                        </p>
                    </li>
                    <li className="rounded-xl border border-gray-200/70 bg-white/70 p-4">
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">Economics →</span> analytical thinking, systems mindset.
                            <br />
                            <span className="text-gray-600">Result:</span> better data modeling and prioritization in product decisions.
                        </p>
                    </li>
                    <li className="rounded-xl border border-gray-200/70 bg-white/70 p-4">
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">Growing plants →</span> patience, experimentation.
                            <br />
                            <span className="text-gray-600">Result:</span> disciplined iteration cycles and careful performance tuning.
                        </p>
                    </li>
                    <li className="rounded-xl border border-gray-200/70 bg-white/70 p-4">
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">Numismatics →</span> attention to detail, historical perspective.
                            <br />
                            <span className="text-gray-600">Result:</span> meticulous code reviews and appreciation of constraints.
                        </p>
                    </li>
                </ul>
            </motion.section>

            {/* CTA */}
            <div className="w-full flex justify-start items-center my-8 px-4 sm:px-8">
                <Link
                    to="/Skills"
                    className="px-6 py-3 rounded-xl bg-gradient-to-br from-cyan-600 via-sky-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 ease-out"
                    aria-label="Show more skills"
                >
                    Show More
                </Link>
            </div>
        </section>
    );
}

export default Skills;
