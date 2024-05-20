import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";

const Services3 = ({ style, lines }) => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section
      className={`services   section-padding ${style === "4item" ? "lficon" : lines ? "" : "pt-0"
        }`}
    >      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
                Services Provided             </h3>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Services
              </h6>
              <h3 className="wow color-font">
              I provide services on Mobile Application Web Development SPSS Analysis.
              </h3>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon wow color-font">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Interface Design</h5>

              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon wow color-font">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Creative Always</h5>

              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon wow color-font">
                <i className="ion-cube"></i>
              </span>
              <h5>Real-time Editing</h5>

              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon wow color-font">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Art Concept</h5>
              {/* <p>
                Implementation and rollout of new network infrastructure,
                including consolidation.
              </p> */}
              {/* <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
