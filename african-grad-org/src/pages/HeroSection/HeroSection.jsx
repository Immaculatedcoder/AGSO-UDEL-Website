import BG1 from "../../assets/images/BG1.jpeg";
import BG2 from "../../assets/images/BG2.jpeg";
import BG3 from "../../assets/images/BG3.jpeg";

function HeroSection() {
  // Array of Images and quotes for slideshow
  const slides = [
    {
      id: 1,
      image: BG1,
      quote:
        "If you want to go fast, go alone. If you want to go far, go with others.",
    },
    {
      id: 2,
      image: BG2,
      quote: "Every great dreams begins with a dreamer",
    },
    {
      id: 3,
      image: BG3,
      quote: "Greatness can be found in the most unlikely places...",
    },
  ];
  return (
    <section>
      {/* Hero section-with slideshow background */}
      <div>{""}</div>
    </section>
  );
}

export default HeroSection;
