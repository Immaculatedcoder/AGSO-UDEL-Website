import HeroSection from "./HeroSection/HeroSection";
import MissionSection from "./MissionSection/MissionSection";
import Events from "./EventsSection/Events";

function Index() {
  return (
    <div>
      <main>
        <HeroSection />
        <MissionSection />
        <Events />
        {/* Section 3 */}
      </main>
    </div>
  );
}

export default Index;
