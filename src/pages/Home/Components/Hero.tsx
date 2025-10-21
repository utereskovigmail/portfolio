import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function Hero(){
    return(
        <section className="w-full p-4">
            <motion.div
                key="box"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mx-auto max-w-screen-2xl px-6 sm:px-9 lg:px-12 py-16">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left column */}
                    <div className="flex flex-col gap-6">


                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            Hi, I’m{" "}
                            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                Yurii Tereshkovych
              </span>
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg">
                            Student <span className="mx-1">·</span> Programmer <span className="mx-1">·</span> Entrepreneur
                        </p>

                        <p className="text-gray-700 text-base sm:text-lg">
                            I build digital tools that connect people and bring ideas to life.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center rounded-xl bg-cyan-700 px-6 py-3 text-white text-sm font-medium shadow-sm transition hover:bg-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
                                aria-label="View my projects"
                            >
                                View Projects
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
                                aria-label="Contact me"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    {/* Right column (image) */}
                    <div className="relative mx-auto w-full max-w-md">
                        {/* Decorative glow */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-sky-400/10 to-blue-500/20 blur-2xl"></div>

                        <div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 shadow-lg">
                            {/* Use <picture> for better format support */}
                            <picture>
                                {/* Optional better formats if you have them */}
                                {/* <source srcSet="/imgs/me.avif" type="image/avif" />
                <source srcSet="/imgs/me.webp" type="image/webp" /> */}
                                <img
                                    src="/imgs/me.HEIC" /* convert HEIC -> JPG/PNG/WebP */
                                    alt="Portrait of Yurii Tereshkovych"
                                    className="h-96 w-full object-cover"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;