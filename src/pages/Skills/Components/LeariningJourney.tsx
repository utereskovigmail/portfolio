import { motion } from "framer-motion";

export default function LearningJourney() {
    return (
        <section
            id="learning-journey"
            className="mb-12 px-6"

        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-[1000px] mx-auto text-center"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    My Learning Journey
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-full mx-auto text-base">
                    I have been studying at a <strong>specialized programming school (IT STEP SCHOOL)</strong> for three years, where I
                    gained a strong foundation in computer science and software
                    development. Alongside my formal education, I have been actively
                    engaged in <strong>self-learning</strong> — exploring new technologies,
                    building personal projects, and deepening my understanding of web
                    development. This combination of structured learning and independent
                    study has helped me develop both technical skills and a genuine
                    passion for creating useful digital solutions.
                </p>
                <p className={"text-xl text-gray-700 font-bold mt-4"}>
                    Here I will show all the programming skills I’ve obtained.
                </p>
            </motion.div>
        </section>
    );
}
