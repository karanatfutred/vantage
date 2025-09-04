import CourseInfoComponent from "../components/FellowshipHighlights";
import FellowshipHero from "../components/HeroFellowship";
import Navbar from "../components/Navbar";
import OverviewSection from "../components/OverviewSection";
import LearningHighlightsSection from "../components/LearningHighlightsSection";
import VideoSection from "../components/VideoSection";
import MentorsSection from "../components/MentorsSection";
import ThreeStep from "../components/ThreeStep";
import ProgramDirector from "../components/ProgramDirector";
import BuiltFor from "../components/BuiltFor";
import ScholarshipFees from "../components/ScholarshipFees";

export default function Fellowship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FellowshipHero />
      <CourseInfoComponent />
      <OverviewSection />
      <VideoSection />
      <ProgramDirector />
      <LearningHighlightsSection />
      <BuiltFor />
      <ScholarshipFees />
      <MentorsSection />
      <ThreeStep />
    </div>
  );
}
