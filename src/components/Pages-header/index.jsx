/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Split from '../Split';
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";

const PagesHeader = ({ blackStar }) => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/about-data');
        console.log("first",response.data)
        setAboutData(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (!aboutData) return <div>Veri bulunamadı.</div>;

  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700">
              {aboutData.title}
              </h1>
              <div className="text">
                <Split>
                  
                  <p className="wow txt words chars splitting" data-splitting>
                    {aboutData.subtitle}
                  </p>
                </Split>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
};

export default PagesHeader;
