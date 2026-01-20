import "./Contact.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <section className="ContactSection">
      <div className="Contact__container">
        {/* Left part */}
        <div className="Contact__container-left">
          <div className="Contact__container-info">
            <h2 className="Contact__container-title">
              Join our <span> Community</span>
            </h2>
            <p>
              Whether you're a new graduate student from Africa or looking to
              connect with the African community at UD, we welcome you with open
              arms. Get in touch with us today!
            </p>
          </div>
          <div className="connect__withUS">
            <div className="connect__withUS-Social">
              <a href="https://chat.whatsapp.com/IBCGw0bqiWNHk2s3bpAk6E">
                <WhatsAppIcon />
              </a>

              <div>
                <p> Join us at</p>

                <p> UD AGSO</p>
              </div>
            </div>

            <div className="connect__withUS-Social">
              <a href="https://www.instagram.com/ud_agso?igsh=dWkyMGpxamdlc2N6">
                <InstagramIcon />
              </a>
              <div>
                <p> Follow us on</p>

                <p> ud_agso</p>
              </div>
            </div>

            <div className="connect__withUS-Social">
              <a>
                <LocationOnIcon />
              </a>
              <div>
                <p> Find us at</p>

                <p> University of Delaware, Newark, DE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="Contact__container-right">
          <h3 className="Contact-form-title"> Get in Touch</h3>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="form-input"
                placeholder="your-email@udel.edu"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-textarea"
                rows={4}
                placeholder="Tell us about yourself or what you're interested in..."
              />
            </div>
            <button type="submit" className="btn-submit">
              Send Message <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
