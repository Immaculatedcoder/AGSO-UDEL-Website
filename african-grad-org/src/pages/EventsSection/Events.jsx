import "./Events.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const events = [
  {
    id: 1,
    title: "African Culture Night",
    date: "February 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Trabant University Center",
    description:
      "Join us for a night of African food, music, dance performances, and cultural showcases.",
    featured: true,
  },
  {
    id: 2,
    title: "Graduate Student Mixer",
    date: "January 25, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Trabant University Center",
    description:
      "Network with fellow African graduate students and learn about AGSO.",
    featured: false,
  },
  {
    id: 3,
    title: "Career Development Workshop",
    date: "March 8, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Gore Hall Room 104",
    description:
      "Resume building, interview tips, and networking strategies for international students.",
    featured: false,
  },
];

function Events() {
  return (
    <section className="eventsSection">
      <div className="events__container">
        <div className="events__header">
          <h2 className="events__title">
            Upcoming <span> Events</span>
          </h2>
          <p className="events__description">
            Join us at our exciting events designed to bring our community
            together and celebrate African culture.
          </p>
        </div>

        {/* Events Snippet */}
        <div className="events__container">
          {events.map((item) => (
            <div
              key={item.id}
              className={`event-card ${item.featured ? "featured" : ""}`}
            >
              {item.featured && (
                <div className="event-badge">Featured Event</div>
              )}
              <div className="event__header">
                <h3 className="event-title"> {item.title}</h3>
              </div>
              <div className="event-content">
                <p className="event-description"> {item.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <CalendarMonthIcon />
                    <span> {item.date}</span>
                  </div>
                  <div className="event-detail">
                    <AccessTimeIcon />
                    <span> {item.time}</span>
                  </div>
                  <div className="event-detail">
                    <PlaceIcon />
                    <span> {item.location}</span>
                  </div>
                </div>

                <button className="event__btn">
                  Learn More
                  <ArrowRightAltIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events */}
        <div className="events__cta">
          <button className="event__btn btn-primary btn-lg">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}

export default Events;
