

import Hero from './Components/Hero';
import SSection from './Components/SecondSection';
function Home(){

    return(
        <div className={"w-full h-full"}>
            {/* First section */}
            <Hero/>
            {/*Strengths*/}
            <SSection/>

        </div>
    );
}

export default Home;