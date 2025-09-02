import MentorsSection from "../components/MentorsSection";
import Navbar from "../components/Navbar";
import OverviewSection from "../components/OverviewSection";
import LearningHighlightsSection from "../components/LearningHighlightsSection";
import VideoSection from "../components/VideoSection";

export default function Fellowship() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <OverviewSection />
      <VideoSection />
      <LearningHighlightsSection />
      <MentorsSection />
    </div>
  );
}
