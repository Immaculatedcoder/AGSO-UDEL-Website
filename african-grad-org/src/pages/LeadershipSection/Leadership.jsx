import "./Leadership.css";

const LeadersProfile = [
  {
    id: 1,
    name: "Emmanuel Adebayo",
  },
];

function Leadership() {
  return (
    <section className="LeadershipSection">
      <div className="leadership__container">
        {/* Top part if the leadership section */}
        <div className="leadership__header">
          <h2 className="leadership__title">Our Leadership</h2>
          <p className="leadership__description">
            Meet the dedicated team working to make AGSO a virbrant and
            supportive community for all African graduate students. ss
          </p>
        </div>

        {/* Down parts: Leaders card then */}
        <div className="leaders__container"></div>
      </div>
    </section>
  );
}

export default Leadership;
