/* eslint-disable @next/next/no-img-element */
import React from "react";


const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
         
             
              <div className="copy-right text-center">
                <p>
                  © 2024, Gizem Altay Tüm Hakları Saklıdır.
                </p>
              </div>
    </footer>
  );
};

export default Footer;
