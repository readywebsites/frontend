import Image from "next/image";

const About = () => {
  return (
    <section id="chapter-2" className="chapter" data-chapter="2">
      <div className="about-mask-container">
        <Image
          className="about-bg"
          src="/images/about-us/about-us-back-01.webp"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="about-mask-layer">
          <svg
            className="about-svg-mask"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask-a">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="50%"
                  fontFamily="'Cormorant Garamond', serif"
                  fontWeight="700"
                  fontSize="150"
                  textAnchor="middle"
                  dy=".35em"
                  fill="black"
                >
                  AVADH
                </text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="#f9f7f2"
              mask="url(#mask-a)"
            />
          </svg>
        </div>
        <div className="about-content-reveal">
          <div className="content-wrapper centered">
            <h6 className="chapter-subtitle" style={{ color: "#fff" }}>
              About Avadh Group
            </h6>
            <h2 className="chapter-title" style={{ color: "#fff" }}>
              Where Luxury Meets <span className="highlight">Legacy</span>
            </h2>
            <p
              style={{
                color: "#fff",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              With a distinguished legacy of over 25 years, we stand at the
              forefront of premium property development, redefining the way
              India lives. From Surat to Ahmedabad, we craft living
              experiences that embody sophistication, innovation, and timeless
              elegance.
            </p>
            <div className="about-values-grid">
              <div className="value-item">
                <h4>Our Vision</h4>
                <p>
                  To contribute meaningfully to the development of a modern
                  society by delivering world-class amenities with
                  affordability and accessibility.
                </p>
              </div>
              <div className="value-item">
                <h4>Our Mission</h4>
                <p>
                  To create world-class real estate guided by the highest
                  standards of quality, integrity, and ethics, enhancing the
                  quality of life for everyone who inhabits our spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
