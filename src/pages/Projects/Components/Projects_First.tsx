import {motion} from "framer-motion";
function ProjectsFirst() {
    return (
        <section className="container mx-auto px-6 pt-16 pb-10">

            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-8 h-50 bg-gradient-to-b from-cyan-100/40 to-transparent"
            />

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="rounded-3xl bg-white/70 backdrop-blur p-8 shadow-md md:h-70"
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            About this page
                        </h1>
                        <div className={"flex flex-col justify-center"}>

                            <p className="mt-3 text-lg text-gray-700">
                                I’ve gathered quite a collection of projects — from software to musical experiments.
                                On this page, I’m sharing some of the most interesting ones: my finished works and a few creative programming ideas.
                            </p>
                        </div>


                    </motion.div>

                    <motion.div
                        className="justify-self-center"
                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img
                            src="/imgs/me/me1%202.jpeg"
                            alt="Yurii Tereshkovych portrait"
                            className="w-70 h-70 rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
                        />
                    </motion.div>
                </div>
            </section>
    )
}

export default ProjectsFirst;