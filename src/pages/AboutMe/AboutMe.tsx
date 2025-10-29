import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutMe() {
    const fadeUp = {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    } as const;

    const interests = [
        "Rubik’s Cube",
        "Numismatics",
        "Growing plants",
        "Economics",
        "Reading",
        "Investing",
        "Table tennis",
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-100 text-gray-800">
            {/* Hero */}
            <section className="container mx-auto px-6 pt-16 pb-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={fadeUp.initial}
                        whileInView={fadeUp.whileInView}
                        viewport={{ once: true }}
                        transition={fadeUp.transition}
                        className="rounded-3xl bg-white/70 backdrop-blur p-8 shadow-md md:h-80"
                        aria-label="About me introduction"
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            About Me
                        </h1>
                        <div className="flex flex-col justify-center">
                            <p className="mt-3 text-lg text-gray-700">
                                Hi! I’m <span className="font-semibold">Yurii Tereshkovych</span> —
                                a student who loves combining creativity and logic while exploring
                                the world of technology.
                            </p>
                            {/* 🔹 динамічніша 2-га фраза */}
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Drawn to the exact sciences — especially math and physics — I’ve
                                learned to think analytically, find patterns, and design elegant
                                solutions.
                            </p>
                            <p className="mt-5 text-gray-700 leading-relaxed">
                                I also enjoy studying English: I love learning new words,
                                idioms, and unique expressions that often go unnoticed by others.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="justify-self-center"
                        initial={fadeUp.initial}
                        whileInView={fadeUp.whileInView}
                        viewport={{ once: true }}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                    >
                        <img
                            src="/imgs/me/me2%202.jpeg"
                            alt="Portrait of Yurii Tereshkovych"
                            className="w-72 h-72 md:w-80 md:h-80 rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Learning Journey */}
            <section className="container mx-auto px-6 pb-6">
                <motion.div
                    className="rounded-3xl bg-white/70 backdrop-blur p-8 shadow-md"
                    initial={fadeUp.initial}
                    whileInView={fadeUp.whileInView}
                    viewport={{ once: true }}
                    transition={fadeUp.transition}
                    aria-label="Learning journey"
                >
                    <h2 className="text-2xl font-bold text-gray-900">My Learning Journey</h2>
                    <p className="mt-3 leading-relaxed">
                        I studied at a <strong>specialized programming school</strong> where I built
                        a solid foundation in computer science and software development. At the same
                        time, I’ve been actively <strong>self-learning</strong> — exploring modern
                        technologies, creating my own projects, and deepening my understanding of web
                        development.
                    </p>
                    <p className="mt-3 leading-relaxed">
                        I genuinely enjoy <strong>learning new things</strong> — whether it’s mastering
                        a new programming language, improving my design skills, or understanding how
                        technology can make life easier. For instance, I’ve taught myself touch typing
                        with a speed of 350–400 characters per minute, learned speed reading to process
                        over 500 words per minute, and explored how investing works by studying real
                        stock markets.
                    </p>
                    <p className="mt-3 leading-relaxed">
                        In my free time, I love programming. I enjoy creating new designs and developing
                        websites — it allows me to combine creativity and logic in one process. I love
                        seeing how an idea gradually turns into a real product.
                    </p>
                    {/* 🔹 impact-phrase */}
                    <p className="mt-4 leading-relaxed italic text-gray-800">
                        Through these experiences, I’ve learned how curiosity can turn into real results —
                        from mastering new technologies to publishing my own projects online.
                    </p>
                </motion.div>
            </section>

            {/* Highlights → Personal Stats */}
            <section className="container mx-auto px-6 py-10">
                <motion.h3
                    initial={fadeUp.initial}
                    whileInView={fadeUp.whileInView}
                    viewport={{ once: true }}
                    transition={fadeUp.transition}
                    className="text-xl font-semibold text-gray-900 mb-4"
                >
                    Personal Stats
                </motion.h3>

                <motion.div
                    initial={fadeUp.initial}
                    whileInView={fadeUp.whileInView}
                    viewport={{ once: true }}
                    transition={fadeUp.transition}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    aria-label="Personal stats"
                >
                    <div className="rounded-2xl bg-white shadow-sm p-5 text-center ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200">
                        <div className="text-2xl font-extrabold text-gray-900">350–400</div>
                        <div className="text-gray-600">characters/min touch typing</div>
                    </div>
                    <div className="rounded-2xl bg-white shadow-sm p-5 text-center ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200">
                        <div className="text-2xl font-extrabold text-gray-900">500+</div>
                        <div className="text-gray-600">words/min speed reading</div>
                    </div>
                    <div className="rounded-2xl bg-white shadow-sm p-5 text-center ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200">
                        <div className="text-2xl font-extrabold text-gray-900">EN / UA / RU</div>
                        <div className="text-gray-600">languages spoken</div>
                    </div>
                    <Link
                        to={"/skills"}
                        className="rounded-2xl bg-white shadow-sm p-5 text-center ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-cyan-200"
                        aria-label="Go to Skills page"
                    >
                        <div className="text-2xl font-extrabold text-gray-900">Web</div>
                        <div className="text-gray-600">React · TypeScript · .NET</div>
                    </Link>
                </motion.div>
            </section>

            {/* Interests */}
            <section className="container mx-auto px-6 pb-10">
                <motion.div
                    initial={fadeUp.initial}
                    whileInView={fadeUp.whileInView}
                    viewport={{ once: true }}
                    transition={fadeUp.transition}
                    className="rounded-3xl bg-white/70 p-8 shadow-sm"
                    aria-label="Beyond studies"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Beyond Studies</h3>
                    <p className="leading-relaxed mb-2">
                        I’m interested in <strong>investing</strong>: I like exploring how the stock
                        market works and trying to buy shares — from tech companies like <em>Apple</em>{" "}
                        to businesses focused on health and sustainability such as{" "}
                        <em>Johnson &amp; Johnson</em> and <em>NextEra Energy</em>.
                    </p>
                    {/* 🔹 підсилення про інвестування */}
                    <p className="leading-relaxed mb-2">
                        Through investing, I’ve developed strategic thinking and learned to analyze data
                        beyond the classroom.
                    </p>
                    <p className="mb-2">
                        I also love reading — especially fantasy, adventure, and detective stories. My
                        favorite authors are <em>Agatha Christie</em> and <em>Edgar Allan Poe</em>.
                    </p>
                    <p className="mb-4">
                        In addition, I enjoy watching thought-provoking movies like <em>Inception</em> and{" "}
                        <em>The Matrix</em>.
                    </p>

                    <ul className="flex flex-wrap gap-2">
                        {interests.map((i) => (
                            <li
                                key={i}
                                className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100 text-sm hover:scale-[105%] transition"
                            >
                                {i}
                            </li>
                        ))}
                    </ul>

                    {/* 🔹 фінальне узагальнення */}
                    <p className="mt-6 text-gray-800 italic">
                        Whether through code, books, or challenges, I’m always seeking to understand how
                        ideas shape the world around us.
                    </p>
                </motion.div>
            </section>
        </main>
    );
}
