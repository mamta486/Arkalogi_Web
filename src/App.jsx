import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Achievements from "./components/Achievements";
import GrowthSection from "./components/GrowthSection";
import ContactFooterPage from "./components/ContactFooterPage";
import NewHero from "./components/NewHero";
// import FreqAskQ from "./components/FreqAskQ";
// import Practice from "./components/Prac";



const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <NewHero/>
      <Services />
      <GrowthSection/>
      <Process />
      <Testimonial />
      <FAQ />
      <Achievements />
      <ContactFooterPage/>
      {/* <Practice/> */}
      
      {/* <FreqAskQ/> */}
      
     

    </div>
  );
};

export default App;
