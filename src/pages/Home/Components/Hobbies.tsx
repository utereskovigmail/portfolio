import { motion, type Variants } from "framer-motion";

const hobbies = [
    {
        name: "Rubik’s Cube",
        image:
            "/imgs/hobbies/puzzlesjpeg.jpeg",
        description:
            "I've been solving Rubik’s cubes for over four years and have a large collection of different types. My average time for the standard 3×3 cube is around 15 seconds.",
    },
    {
        name: "Economics",
        image:
            "/imgs/hobbies/economics.avif",
        description:
            "I’m deeply interested in economics — both of my parents are economists, and I’ve inherited their passion for the subject. I enjoy understanding how market forces influence prices and how economic models can help predict trends in the stock market.",
    },
    {
        name: "Growing Plants",
        image:
            "/imgs/hobbies/plantsjpeg.jpeg",
        description:
            "I’ve always loved plants, especially growing exotic species from seeds. At home, I nurture a variety of tropical plants like mango, avocado, durian, and more.",
    },
    {
        name: "Numismatics",
        image: "/imgs/hobbies/coinsjpeg.jpeg",
        description:
            "I’m fascinated by numismatics — the study and collection of coins. I enjoy collecting and trading coins, and my collection includes numerous euro coins as well as rare pieces from the 19th and 20th centuries.",
    },
];

const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 0 /*, _current?: any */) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.05,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const imgHover = { scale: 1.04 };

function HobbiesSection() {
    return (
        <section className="max-w-screen-2xl py-10 mx-auto space-y-10">
            <div className={"px-4 sm:px-8"}>
                {/* Intro card */}
                <motion.div
                    variants={container}

                    initial="hidden"
                    animate="visible"
                    className="flex flex-col md:flex-row items-center gap-8 rounded-3xl bg-slate-50  shadow-md mb-8 px-8 py-10 border border-slate-200/70 "
                >
                    <motion.div
                        className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 overflow-hidden rounded-2xl shadow"
                        whileHover={imgHover}
                        transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    >
                        <img
                            src="/imgs/me/me3%202.jpeg"
                            alt="Photo of me"
                            loading="lazy"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>

                    <div className="max-w-xl text-center md:text-left space-y-4">
                        <h1>
            <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent">
              My Hobbies
            </span>
                        </h1>
                        <p className="text-slate-700  text-base leading-relaxed">
                            I’m not the one who studies all the time — I’m also human. I have
                            many hobbies and interests that help me stay creative, active, and
                            balanced. Whether it’s exploring new ideas, collecting coins, or
                            spending time outdoors, I find inspiration everywhere.
                        </p>
                    </div>
                </motion.div>

                {/* Hobby rows */}
                <div className="space-y-8">
                    {hobbies.map((hobby, idx) => (
                        <motion.article
                            key={hobby.name}
                            custom={idx}
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            className={`flex flex-col ${
                                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                            } items-center gap-8 rounded-3xl bg-slate-50 px-8 py-8 border border-slate-200/70 ring-1 ring-transparent [transition:box-shadow_.2s_ease,ring-color_.2s_ease,background-color_.2s_ease] hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200`}
                        >
                            <motion.div
                                className="w-full md:w-60 md:h-60 h-48 flex-shrink-0 overflow-hidden rounded-2xl shadow"
                                whileHover={imgHover}
                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                            >
                                <img
                                    src={hobby.image}
                                    alt={hobby.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center"
                                />
                            </motion.div>

                            <div className="max-w-2xl text-center md:text-left space-y-3">
                                <h2 className="text-3xl font-bold text-slate-900 ">
                                    {hobby.name}
                                </h2>
                                <p className="text-slate-700  leading-relaxed">
                                    {hobby.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default HobbiesSection;
