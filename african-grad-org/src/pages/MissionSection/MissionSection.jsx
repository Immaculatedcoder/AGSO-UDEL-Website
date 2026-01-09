import "./MissionSection.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LanguageIcon from "@mui/icons-material/Language";

function MissionSection() {
  const values = [
    {
      icon: FavoriteBorderIcon,
      title: "Community",
      description:
        "Creating a supportive network where African graduate students can feel at home",
      color: {},
    },
    {
      icon: LightbulbOutlineIcon,
      title: "Excellence",
      description:
        "Inspiring academic and professional excellence through mentorship and collaboration",
      color: {},
    },
    {
      icon: PeopleOutlineIcon,
      title: "Unity",
      description:
        "Bidging diverse African cultures and fostering lasting friendships accross the continent",
      color: {},
    },
    {
      icon: LanguageIcon,
      title: "Impact",
      description:
        "Making meaningful contributions to our university and the broader commnunity",
      color: {},
    },
  ];
  return (
    <section className="missionSection">
      <div className="mission__container">
        {/* Top Part of the Mission Section */}
        <div className="mission__header">
          <span className="ourMission">Our Mission</span>
          <h2 className="mission__title">
            Empowering African Scholars at Delaware
          </h2>
          <p className="mission__description">
            We are dedicated to fostering a vibrant community that supports the
            academic, prifessional, and growth of African graduate students
            while celebrating our rich cultural heritage.
          </p>
        </div>

        {/* Down part of the mission section */}
        <div className="missionn__values">
          {values.map((value, index) => (
            <div key={index} className="mission__value-card">
              <div className="mission__icons">
                <value.icon className="mission__icon" />
              </div>
              <h3 className="value-title"> {value.title} </h3>
              <p className="value-description"> {value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
