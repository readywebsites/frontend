"use client";

const timelineItems = [
  {
    year: "1998",
    title: "The Foundation",
    description:
      "First residential project in Adajan establishes Avadh's commitment to quality",
  },
  {
    year: "2008",
    title: "Township Vision",
    description: "Launched Surat's first integrated township with club amenities",
  },
  {
    year: "2018",
    title: "Diamond Jubilee",
    description: "Completed 5 million sq.ft. with zero delay in possession",
  },
  {
    year: "2023",
    title: "Future Forward",
    description: "Smart homes with sustainable technology across all projects",
  },
];

const Legacy = () => {
  // The counter animation will be handled with GSAP later
  return (
    <section id="chapter-6" className="chapter" data-chapter="6">
      <div className="chapter-background"></div>

      <div className="chapter-content">
        <div className="content-wrapper centered">
          <h6 className="chapter-subtitle">Building Futures Since 1998</h6>
          <h2 className="chapter-title">
            A Legacy <span className="highlight">Carved in Trust</span>
          </h2>

          <div className="legacy-stats-row fade-in">
            <div className="l-stat">
              <div className="l-number">
                <span className="counter" data-target="20">
                  0
                </span>
              </div>
              <div className="l-label">YEARS OF LEGACY</div>
            </div>
            <div className="l-stat">
              <div className="l-number">
                <span className="counter" data-target="46">
                  0
                </span>
              </div>
              <div className="l-label">SUCCESSFUL PROJECTS</div>
            </div>
            <div className="l-stat">
              <div className="l-number">
                <span className="counter" data-target="32000">
                  0
                </span>
                +
              </div>
              <div className="l-label">HAPPY FAMILIES</div>
            </div>
            <div className="l-stat">
              <div className="l-number">
                <span className="counter" data-target="30"></span> Million +
              </div>
              <div className="l-label">SQ.FT. CONSTRUCTION</div>
            </div>
          </div>

          <div className="timeline-carousel">
            <div className="timeline-track">
              {/* Duplicate items for infinite loop effect */}
              {[...timelineItems, ...timelineItems].map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
