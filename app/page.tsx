import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Founders from "./components/Founders";
import Admissions from "./components/Admissions";
import LearningSection from "./components/LearningSection";
import ProjectsSection from "./components/ProjectsSection";
import LearningPractitionersSection from "./components/LearningPractitionersSection";
import MentorsSection from "./components/MentorsSection";
import ScholarshipsSection from "./components/ScholarshipsSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Founders />
      <Admissions />
      <LearningSection />
      <ProjectsSection />
      <LearningPractitionersSection />
      <MentorsSection />
      <ScholarshipsSection />
      <FAQSection />
    </main>
  );
}
