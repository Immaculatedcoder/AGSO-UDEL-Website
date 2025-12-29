import BG1 from "../../assets/images/BG1.jpeg";
import BG2 from "../../assets/images/BG2.jpeg";
import BG3 from "../../assets/images/BG3.jpeg";
import { NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./HeroSection.css";
import { useEffect, useState, useRef } from "react";

function HeroSection() {
  // Array of Images and quotes for slideshow
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

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

  function goTo(index) {
    setCurrent(index);
  }

  function next() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1) % slides.length);
  }

  // Auto slide control
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  //   Navigation Key

  function onKeyDown(arrow) {
    if (arrow.key === "ArrowRight") {
      next();
    }
    if (arrow.key === "ArrowLeft") {
      prev();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeSlides = slides[current];
  return (
    <section
      className="heroSection"
      aria-label="AGSO hero slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
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
            transform: index === current ? "scale(1)" : "scale(1.03)",
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
      <button
        className="heroSection__control heroSection__control-prev"
        type="button"
        onClick={prev}
      >
        <NavigateBeforeIcon />
      </button>
      <button
        className="heroSection__control heroSection__control-next"
        type="button"
        onClick={next}
      >
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
            role="tab"
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
