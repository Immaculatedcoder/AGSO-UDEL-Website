import BG1 from "../../assets/images/BG1.jpeg";
import BG2 from "../../assets/images/BG2.jpeg";
import BG3 from "../../assets/images/BG3.jpeg";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./HeroSection.css";

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

  const current = 0;
  const activeSlides = slides[current];
  return (
    <section className="heroSection">
      {/* Hero section-with slideshow background */}
      {/* Layer 1: Background Images */}
      {slides.map((slide, index) => (
        <div
          className="heroSection__image-slide"
          key={slide.id}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundRepeat: "no-repeat",
            opacity: index === current ? 1 : 0,
          }}
        />
      ))}

      {/* Layer 2 : Dark Overlay */}
      <div className="heroSection__overlay" />

      {/*Layer 3: Main Content */}
      <div className="heroSection__content">
        <h2 className="heroSection__title">
          African Graduate Student Organization
        </h2>
        <p className="heroSection__description">
          Building community, culture, and support African graduate students at
          the University of Delaware.
        </p>
        <div className="heroSection__buttons">
          <NavLink
            to="/contact"
            className="heroSection__button heroSection__button--primary"
          >
            Join US
          </NavLink>
          <NavLink
            to="/events"
            className="heroSection__button heroSection__button--secondary"
          >
            View Events
          </NavLink>
        </div>
      </div>

      {/* Layer 4: Quotes */}
      <div className="heroSection__quote">
        <p>{activeSlides.quote}</p>
      </div>

      {/* Layer 5: Previous and Next controls */}
      <button className="heroSection__control-prev" type="button">
        <NavigateBeforeIcon />
      </button>
      <button className="heroSection__control-next" type="button">
        <NavigateNextIcon />
      </button>

      {/* Layer 6: Dots navigation */}
      <div className="heroSection__dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`heroSection__dot ${
              i === current ? "heroSection__dot-active" : ""
            }`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
