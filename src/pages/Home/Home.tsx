

import Hero from './Components/Hero';
import SSection from './Components/SecondSection';
// import ProjectsOverview from '../Projects/Components/ProjectsOverview.tsx';
// import Skills from './Components/Skills';
import HobbiesSection from './Components/Hobbies';
function Home(){

    return(
        <div className={"w-full h-full"}>
            {/* First section */}
            <Hero/>

            {/*Strengths*/}
            <SSection/>

            {/*Hobbies*/}
            <HobbiesSection/>


        </div>
    );
}

export default Home;