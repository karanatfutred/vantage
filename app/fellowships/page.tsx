import CourseInfoComponent from "../components/FellowshipHighlights";
import FellowshipHero from "../components/HeroFellowship";
import Navbar from "../components/Navbar";
import OverviewSection from "../components/OverviewSection";
import LearningHighlightsSection from "../components/LearningHighlightsSection";
import VideoSection from "../components/VideoSection";

export default function Fellowship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FellowshipHero />
      <CourseInfoComponent />
      <OverviewSection />
      <VideoSection />
      <LearningHighlightsSection />
    </div>
  );
}
