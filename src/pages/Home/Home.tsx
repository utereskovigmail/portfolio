

import Hero from './Components/Hero';
import SSection from './Components/SecondSection';
import ProjectsOverview from './Components/ProjectsOverview';
function Home(){

    return(
        <div className={"w-full h-full"}>
            {/* First section */}
            <Hero/>
            {/*Strengths*/}
            <SSection/>
            {/*Projects*/}
            <ProjectsOverview/>

        </div>
    );
}

export default Home;