import React, { useEffect, useState } from "react";
import axios from "axios";

const FreelancreIntro = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [repoCount, setRepoCount] = useState(0);
  const [experience, setExperience] = useState({ years: 1, months: 5 });

  const codeExample = `
import React from 'react';

function App() {
  return (
    <div>
      <p>Yazılım Geliştirici</p>
    </div>
  );
}

export default App;
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/homepage");
        setData(response.data[0]);

        const repoResponse = await axios.get(
          "https://api.github.com/users/gizem2506/repos"
        );
        setRepoCount(repoResponse.data.length);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date("2023-01-12");
      const currentDate = new Date();
      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      setExperience({ years, months });
    };

    calculateExperience();
    const intervalId = setInterval(
      calculateExperience,
      1000 * 60 * 60 * 24 * 30
    );

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (!data) return <div>Veri bulunamadı.</div>;

  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src={data.img} alt="Homepage" />
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="cont">
              <div className="">
                <pre>
                  <code className="color-font fw-500">{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>{experience.years} Yıl</h3>
                </div>
                <div className="text valign">
                  <p>Deneyim Süresi</p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>{repoCount}</h3>
                </div>
                <div className="text valign">
                  <p>Tamamlanan Projeler</p>
                </div>
              </li>

              <li className="mail-us">
                <a href={`mailto:${data.email}?subject=Konu`}>
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>İletişime Geç</p>
                        <h6>{data.email}</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
