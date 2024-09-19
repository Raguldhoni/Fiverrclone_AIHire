import React from "react";
import SelectOption from "../shared/SelectOption";

const Contact = () => {
  return (
    <>
      <section className="contact__section sectionbg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="contact__sidebox bgwhite round16">
                <h3 className="pb-30 bborderdash mb-30 title">
                  Need more help?
                </h3>
                <div className="help__emailitem mb-24 round16">
                  <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="box">
                    <h5 className="fw-600 title mb-10">Call Now</h5>
                    <span className="fz-16 d-block inter title">
                      (907) 555-0101
                    </span>
                    <span className="fz-16 d-block inter title">
                      (252) 555-0126
                    </span>
                  </div>
                </div>
                <div className="help__emailitem mb-24 round16">
                  <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                    <i className="bi bi-envelope-open"></i>
                  </div>
                  <div className="box">
                    <h5 className="fw-600 title mb-10">Email Address</h5>
                    <span className="fz-16 d-block inter title">
                      info@example.com
                    </span>
                    <span className="fz-16 d-block inter title">
                      info@example.com
                    </span>
                  </div>
                </div>
                <div className="help__emailitem round16">
                  <div className="icon round50 bgwhite d-flex align-items-center justify-content-center">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="box">
                    <h5 className="fw-600 title mb-10">Location</h5>
                    <span className="fz-16 d-block inter title">
                      Royal Ln. Mesa, New
                    </span>
                    <span className="fz-16 d-block inter title">
                      Jersey 45463
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact__wrapper round16 bgwhite">
                <h3 className="pb-30 bborderdash mb-30 title">
                  Get in touch with us.
                </h3>
                <form action="#0" className="write__review">
                  <div className="row g-4 justify-content-center ">
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label
                          htmlFor="name"
                          className="fz-18 fw-500 inter title mb-16">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label
                          htmlFor="enamee"
                          className="fz-18 fw-500 inter title mb-16">
                          Email
                        </label>
                        <input
                          type="text"
                          id="enamee"
                          placeholder="Enter Your Email..."
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label
                          htmlFor="numbers"
                          className="fz-18 fw-500 inter title mb-16">
                          Phone
                        </label>
                        <input
                          type="text"
                          id="numbers"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="frm__grp">
                        <label className="fz-18 fw-500 inter title mb-16">
                          Country
                        </label>
                        <SelectOption
                          options={[
                            { value: "USA", label: "USA" },
                            { value: "PK", label: "PK" },
                            { value: "BN", label: "BN" },
                          ]}
                          placeholder="Select Country"
                          bgwhite={false}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="frm__grp">
                        <label className="fz-18 fw-500 inter title mb-16">
                          Message
                        </label>
                        <textarea
                          name="writecommnet"
                          cols={30}
                          rows={5}
                          placeholder="Enter Your Message..."></textarea>
                      </div>
                    </div>
                    <div className="frm__grp mt-30">
                      <button type="submit" className="cmn--btn">
                        <span>Sent Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map__section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13026988.079740463!2d-106.25564589723379!3d37.14278268669068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1687592778027!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
};

export default Contact;
