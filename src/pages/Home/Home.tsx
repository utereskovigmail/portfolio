// import {Link} from "react-router-dom";
// import * as React from "react";
// import { motion, type Variants } from "framer-motion";
// import { Circle, Square, Diamond } from "lucide-react";

import Hero from './Components/Hero';
function Home(){
    // const container: Variants = {
    //     hidden: { opacity: 0, y: 24 },
    //     show: {
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
    //     },
    // };
    //
    // const item: Variants = {
    //     hidden: { opacity: 0, y: 16, scale: 0.98 },
    //     show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
    // };
    return(
        <div className={"w-full h-full"}>
            {/* First section */}
            <Hero/>
            {/*Strengths*/}

        </div>
    );
}

export default Home;