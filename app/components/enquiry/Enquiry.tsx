import Image from "next/image";

const Enquiry = () => {
  return (
    <section id="chapter-7" className="chapter" data-chapter="7">
      <div className="chapter-background">
        <Image
          src="/images/scroll-images/01-riverside.webp"
          alt="Enquiry Background"
          className="enquiry-bg-img"
          layout="fill"
          objectFit="cover"
        />
        <div className="enquiry-overlay"></div>
      </div>
      <div className="chapter-content">
        <div className="content-wrapper centered">
          <h6 className="chapter-subtitle">Get In Touch</h6>
          <h2 className="chapter-title">
            Start Your <span className="highlight">Journey</span>
          </h2>
          <p>
            Ready to experience the Avadh lifestyle? Fill out the form below.
          </p>

          <div className="inline-form-container fade-in">
            <form id="inlineLeadForm">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <select name="project" required>
                    <option value="" disabled selected>
                      Interested Project
                    </option>
                    <option value="avadh-antilia">Avadh Antilia</option>
                    <option value="avadh-symphony">Avadh Symphony</option>
                    <option value="avadh-utopia">Avadh Utopia</option>
                    <option value="commercial">Commercial Projects</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  rows={4}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>Submit Enquiry</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
