import AboutProgramme from "../components/AboutFellowshipProgramme";
import Admissions from "../components/Admissions";
import Founders from "../components/Founders";
import Hero from "../components/Hero";
import FellowshipHero from "../components/HeroFellowship";
import Navbar from "../components/Navbar";


export default function Fellowship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FellowshipHero />
      <AboutProgramme />
    </div>
  );
}
