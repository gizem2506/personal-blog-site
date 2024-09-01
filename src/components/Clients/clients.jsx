/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClientsData from "../../data/sections/clients.json";
import Split from "../Split";

const Clients = ({ theme }) => {
  var first = ClientsData;
  var second = ClientsData.slice(4, ClientsData.length);
  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign md-mb50">
            <div className="sec-head mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                En İyi
              </h6>
              <h3 className="wow mb-20 color-font">Yayınlanmış Projeler</h3>

            </div>
          </div>
          <div className="col-lg-8">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-6 brands">
                    <div
                      className="item wow fadeIn "
                      data-wow-delay={`${item.id == 1
                          ? ".3"
                          : item.id == 2
                            ? ".6"
                            : item.id == 3
                              ? ".8"
                              : item.id == 4
                                ? ".3"
                                : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href={item.url}
                            className="link words chars splitting"
                            data-splitting
                            target="_blank"
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
