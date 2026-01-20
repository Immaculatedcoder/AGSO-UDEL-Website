import HeroSection from "./HeroSection/HeroSection";
import MissionSection from "./MissionSection/MissionSection";
import Events from "./EventsSection/Events";
import Leadership from "./LeadershipSection/Leadership";
import Contact from "./ContactSection/Contact";

function Index() {
  return (
    <div>
      <main>
        <HeroSection />
        <MissionSection />
        <Events />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}

export default Index;
