import CourseInfoComponent from "../components/FellowshipHighlights";
import FellowshipHero from "../components/HeroFellowship";
import Navbar from "../components/Navbar";
import OverviewSection from "../components/OverviewSection";
import LearningHighlightsSection from "../components/LearningHighlightsSection";
import MentorsSection from "../components/MentorsSection";
import ThreeStep from "../components/ThreeStep";
import ProgramDirector from "../components/ProgramDirector";
import BuiltFor from "../components/BuiltFor";
import ScholarshipFees from "../components/ScholarshipFees";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Fellowship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FellowshipHero />
      <CourseInfoComponent />
      <OverviewSection />
      <ProgramDirector />
      <LearningHighlightsSection />
      <BuiltFor />
      <ScholarshipFees />
      <MentorsSection />
      <ThreeStep />
      <FAQSection />
      <Footer />
    </div>
  );
}
