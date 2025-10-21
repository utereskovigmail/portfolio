import { motion, type Variants } from "framer-motion";
import {Circle, Diamond, Square} from "lucide-react";


function SecondSection(){

    const container: Variants = {
        hidden: { opacity: 0, y: 24 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 16, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
    };
    return (
        <section className="relative w-full">
            {/* soft background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-8 h-50 bg-gradient-to-b from-cyan-100/40 to-transparent"
            />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={container}
                className="mx-auto max-w-screen-2xl px-6 sm:px-9 lg:px-12 py-16"
            >
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left: copy */}
                    <motion.div variants={item} className="space-y-5">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Creativity × Logic → <span className="text-cyan-700">Impact</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I love blending design and engineering — from curating coin catalogues
                            to building apps that people actually use.
                        </p>
                    </motion.div>

                    {/* Right: icon cards */}
                    <motion.ul
                        variants={item}
                        className="grid sm:grid-cols-3 gap-4 sm:gap-6"
                        aria-label="Core strengths"
                    >
                        <motion.li
                            variants={item}
                            className="group rounded-2xl border border-gray-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200"
                        >
                            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600/10">
                                <Circle size={18} className="text-cyan-700" />
                            </div>
                            <p className="text-sm font-medium text-gray-900">Creativity</p>
                            <p className="mt-1 text-xs text-gray-500">Design & storytelling</p>
                        </motion.li>

                        <motion.li
                            variants={item}
                            className="group rounded-2xl border border-gray-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200"
                        >
                            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600/10">
                                <Square size={18} className="text-cyan-700" />
                            </div>
                            <p className="text-sm font-medium text-gray-900">Logic</p>
                            <p className="mt-1 text-xs text-gray-500">Systems & structure</p>
                        </motion.li>

                        <motion.li
                            variants={item}
                            className="group rounded-2xl border border-gray-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200"
                        >
                            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600/10">
                                <Diamond size={18} className="text-cyan-700" />
                            </div>
                            <p className="text-sm font-medium text-gray-900">Impact</p>
                            <p className="mt-1 text-xs text-gray-500">Real-world outcomes</p>
                        </motion.li>
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    )
}

export default SecondSection;

