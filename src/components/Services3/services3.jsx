import React, { useEffect, useState } from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import axios from "axios";
const Services3 = ({ style, lines }) => {
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/services-data');
        console.log("dddd", response.data)
        setServicesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (!servicesData) return <div>Veri bulunamadı.</div>;


  // React.useEffect(() => {
  //   cardMouseEffect(document.querySelectorAll(".feat .items"));
  // }, []);
  return (
    <section
      className={`services   section-padding ${style === "4item" ? "lficon" : lines ? "" : "pt-0"
        }`}
    >      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                EN İYİ HİZMETLER
              </h6>
              <h3 className="wow color-font">
                Verilen Hizmetler        </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 items md-mb30"
            >

              <div className="item wow fadeIn" data-wow-delay=".3s">
                <span className="icon wow color-font">
                  <i className="ion-ios-monitor"></i>
                </span>
                <h5>{item.title}</h5>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
