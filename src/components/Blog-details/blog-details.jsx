/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";
import PageHeader from "../../components/Page-header/page-header";

const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
    
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
             
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont ">
                    <h4 className="extra-title ">
                      </h4>
                      <h4 className="extra-title pt-100 text-center color-font">
                        Priorities that will pop up in any particular month.
                      </h4>
                      <div className="img pt-60">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
                      <div className="spacial">
                        <p>
                          Never ever think of giving up. Winners never quit and
                          quitters never win. Take all negative words out of
                          your mental dictionary and focus on the solutions with
                          utmost conviction and patience. The battle is never
                          lost until you’ve abandon your vision.
                        </p>
                      </div>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment for self esteem is that it
                        needs be nurturing. The main component of a healthy env
                        for self esteem The main compont be nurturing It should
                        provide unconditional warmth. The main component of a
                        healthy env for self esteem The main compont be
                        nurturing It should provide unconditional
                      </p>

                    
                     

                    
                     
                    </div>
              
                  </div>
                </div>
              </div>

         


            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
