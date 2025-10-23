

import Hero from './Components/Hero';
import SSection from './Components/SecondSection';
import ProjectsOverview from './Components/ProjectsOverview';
import Skills from './Components/Skills';
function Home(){

    return(
        <div className={"w-full h-full"}>
            {/* First section */}
            <Hero/>
            {/*Strengths*/}
            <SSection/>

            <div className={"{w-full bg-gradient-to-b from-white to-gray-50"}>
                {/*Projects*/}
                <ProjectsOverview/>
                {/*Skills*/}
                <Skills/>
            </div>


        </div>
    );
}

export default Home;