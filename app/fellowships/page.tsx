import AboutProgramme from "../components/AboutFellowshipProgramme";
import Admissions from "../components/Admissions";
import CurriculumSection from "../components/FellowshipCurriculum";
import CourseInfoComponent from "../components/FellowshipHighlights";
import Founders from "../components/Founders";
import Hero from "../components/Hero";
import FellowshipHero from "../components/HeroFellowship";
import MentorsSection from "../components/MentorsSection";
import Navbar from "../components/Navbar";


export default function Fellowship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FellowshipHero />
      <CourseInfoComponent />
      <AboutProgramme />
      <MentorsSection/>
      <CurriculumSection/>
    </div>
  );
}
