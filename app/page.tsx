import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Founders from "./components/Founders";
import Admissions from "./components/Admissions";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Founders />
      <Admissions />
    </div>
  );
}
