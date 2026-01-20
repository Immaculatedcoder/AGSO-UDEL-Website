import "./Leadership.css";
import LS1 from "../../assets/images/LS1.png";
import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const LeadersProfile = [
  {
    id: 1,
    name: "Emmanuel Adebayo",
    role: "President",
    department: "Applied Mathematics",
    img: LS1,
  },
  {
    id: 2,
    name: "Emmanuel Adebayo",
    role: "President",
    department: "Applied Mathematics",
    img: LS1,
  },
  {
    id: 3,
    name: "Emmanuel Adebayo",
    role: "President",
    department: "Applied Mathematics",
    img: LS1,
  },
];

function Leadership() {
  return (
    <section className="LeadershipSection">
      <div className="leadership__container">
        {/* Top part of the leadership section */}
        <div className="leadership__header">
          <h2 className="leadership__title">Our Leadership</h2>
          <p className="leadership__description">
            Meet the dedicated team working to make AGSO a virbrant and
            supportive community for all African graduate students.
          </p>
        </div>

        {/* Down parts: Leaders card then */}
        <div className="leaders__container">
          {LeadersProfile.map((leader, index) => (
            <div key={index} className="leaders__card-profile">
              <div
                className="leaders__image-card"
                style={{
                  backgroundImage: `url(${leader.img})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="leader__info">
                <h3> {leader.name}</h3>

                <p> {leader.role}</p>

                <p> {leader.department}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All button */}
        <div className="leaders__view-all">
          <NavLink>
            View Full Leadership Team <ArrowRightAltIcon />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
