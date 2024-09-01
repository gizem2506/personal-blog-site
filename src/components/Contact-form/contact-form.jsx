import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="contact section-padding pages-header circle-bg valign position-re ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50 pt-40">İletişime Geçin.</h4>
              <Formik
                initialValues={{
                  id: Math.floor(Date.now() / 1000), 
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    // Send POST request using fetch
                    const response = await fetch("http://localhost:8080/api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(values),
                    });

                    if (!response.ok) {
                      throw new Error("Network response was not ok");
                    }

                    await sendMessage(500); // Simulate network delay
                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    
                    // Reset the form values
                    resetForm();
                    
                    // Clear the message after a delay
                    setTimeout(() => {
                      messageRef.current.innerText = '';
                    }, 2000);
                  } catch (error) {
                    console.error("Error sending message:", error);
                    messageRef.current.innerText =
                      "Failed to send your message. Please try again later.";
                    
                    // Clear the message after a delay
                    setTimeout(() => {
                      messageRef.current.innerText = '';
                    }, 2000);
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Ad"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="E-posta"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Konu"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          as="textarea"
                          id="form_message"
                          name="message"
                          placeholder="Mesajınız..."
                          rows="4"
                          required="required"
                        />
                      </div>
                      <button type="submit" className="butn bord">
                        <span>Mesaj Gönder</span>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50 pt-40">İletişim Bilgileri.</h4>
              <h3 className="wow" data-splitting>
               E-posta
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">gizemaltayis@gmail.com</a>
                </h5>
              </div>
              <h3 className="wow" data-splitting>
                Sosyal Medya.
              </h3>
              <div className="social mt-30">
                <a href="https://www.linkedin.com/in/gizemaltay06/" target="_blank" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://medium.com/@1gizemaltay" target="_blank" className="icon">
                  <i className="fab fa-medium"></i>
                </a>
                <a href="https://github.com/gizem2506" target="_blank" className="icon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
