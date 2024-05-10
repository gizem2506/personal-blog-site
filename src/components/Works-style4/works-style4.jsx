/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Our Recent Web Design & <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">


          <div className="gallery full-width">
          
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                  </p>
                </div>

                <div className="btn-more mt-30">
                  <Link href="/blog-details/blog-details-dark">
                  <a className="simple-btn">Github</a>
                  </Link>
                </div>
              </div>
              
            </div>

            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                    Ui / Ux creative mobile app design
                  </p>
                </div>

                <div className="btn-more mt-30">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Github</a>
                  </Link>
                </div>
              </div>
              
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
