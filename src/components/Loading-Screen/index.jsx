import React from "react";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";

const LoadingScreen = () => {

  React.useEffect(() => {
    let bodyEl = document.querySelector("body");

    if (appData.showLoading) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) bodyEl.classList.remove("hideX");
    } else {
      bodyEl.classList.add("hideX");
    }
  }, []);

  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div className="loading">
          <span>Y</span>
          <span>ü</span>
          <span>k</span>
          <span>l</span>
          <span>e</span>
          <span>n</span>
          <span>i</span>
          <span>y</span>
          <span>o</span>
          <span>r</span>

        </div>
        <div id="preloader"></div>
      </div>
    </>
  );
};

export default LoadingScreen;
