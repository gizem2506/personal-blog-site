import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/gizem2506/repos");
        const data = await response.json();
        console.log("first",data)
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();

    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              Portfolyo
              </h6>
              <h3 className="wow color-font">
               Geçmiş Projelerim.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="gallery full-width">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="col-md-6 items graphic lg-mr wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  <div className="cont">
                    <h6>{repo.name}</h6>
                    <p>{repo.description}</p>
                    <p>{repo.language}</p>
                    <p>{repo.pushed_at}</p>

                    

                  </div>
                  <div className="btn-more mt-30">
                    <Link href={repo.html_url}>
                      <a className="simple-btn" target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
