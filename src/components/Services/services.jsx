import React from "react";
import featuresData from "../../data/sections/features.json";

const Services = ({ style, lines }) => {
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
              Yetenekler
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"
            ? featuresData.map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-3 wow fadeInLeft"
                  data-wow-delay={`${
                    feature.id == 1
                      ? ".5"
                      : feature.id === 2
                      ? ".7"
                      : feature.id === 3
                      ? ".9"
                      : "1.1"
                  }s`}
                >
                  <div className="item-box">
                  
                    <div className="cont">
                    
                    <div>
                      <span className={`icon ${feature.icon}`}></span>
                    </div>
                      <h6>React Native</h6>
                
                    </div>
                  </div>
                </div>
              ))
            : // max item 3 in Home page
              featuresData.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="item-box md-mb50">
                    <span className={`icon ${feature.icon}`}></span>
                    <h6>React Native</h6>
                  </div>
                </div>
              ))}
        </div>
      </div>
    
    </section>
  );
};

export default Services;
