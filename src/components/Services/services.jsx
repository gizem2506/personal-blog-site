import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';

const Services = ({ style, lines }) => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/skills-data');
        console.log("dddd",response.data)
        setSkillsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (!skillsData) return <div>Veri bulunamadı.</div>;


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
              EN İYİ ÖZELLİKLER              </h6>
              <h3 className="wow color-font">
              Yetenekler
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"
            ? skillsData.map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-3 wow fadeInLeft"
                
                >
                  <div className="item-box">
                  
                    <div className="cont">
                    
                    <div className="col-lg-3 col-md-6 items">
                      <span className="icon">
                        <ApiOutlinedIcon fontSize="large"/>
                      </span>
                    </div>
                      <h6>{feature.title}</h6>
                
                    </div>
                  </div>
                </div>
              ))
            : // max item 3 in Home page
              skillsData.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="item-box md-mb50">
                  <span className="icon">
                        <ApiOutlinedIcon fontSize="large"/>
                      </span>
                      <h6>{feature.title}</h6>
                  </div>
                </div>
              ))}
        </div>
      </div>
    
    </section>
  );
};

export default Services;
