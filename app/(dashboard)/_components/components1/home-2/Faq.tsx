import Image from "next/image";
import faq from "../../../../../public/img/faq/faq.jpg";
import faqCircle from "../../../../../public/img/faq/faq-circle.png";
import faqline from "../../../../../public/img/faq/faqline.png";
import Link from "next/link";
const Faq = () => {
  return (
    <section className="faq__section bg__faq pb-120 pt-120">
      <div className="container">
        <div className="row flex-row-reverse g-4 align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="faq__content">
              <div className="section__title mb-40">
                <h4 className="sub ralt base2 mb-16  ">
                  Frequently Asked Questions
                </h4>
                <h2 className="text-white mb-24  ">
                  Find solutions to common questions For AIHire
                </h2>
                <p className="whitep fz-16 fw-400 inter  ">
                  Welcome to our Frequently Asked Questions (FAQs) section,
                  designed to provide you with answers to common inquiries and
                  help you navigate our platform
                </p>
              </div>
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample">
                  {/* <!--Accordion items--> */}
                  <div className="accordion-item  " data--duration="0.7s">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                        How do I apply for a credit card on the marketplace?
                      </button>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>
                            It refers to a list of common questions and answers
                            related to a particular topic or product. In the
                            case of a credit card marketplace website
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--Accordion items--> */}
                  <div className="accordion-item  " data--duration="0.9s">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        How does the credit card marketplace work?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>
                          It refers to a list of common questions and answers
                          related to a particular topic or product. In the case
                          of a credit card marketplace website
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--Accordion items--> */}
                  <div className="accordion-item  " data--duration="1s">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        How can I improve my credit score?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>
                          It refers to a list of common questions and answers
                          related to a particular topic or product. In the case
                          of a credit card marketplace website
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--Accordion items--> */}
                  <div className="accordion-item  " data--duration="1.4s">
                    <h2 className="accordion-header" id="headingThree4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree4"
                        aria-expanded="false"
                        aria-controls="collapseThree">
                        What skills do I need to work in AI and ML?
                      </button>
                    </h2>
                    <div
                      id="collapseThree4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree4"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>
                          It refers to a list of common questions and answers
                          related to a particular topic or product. In the case
                          of a credit card marketplace website
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--Accordion items--> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="faq__thumbs ralt">
              <div className="happy__customerbox round16">
                <div className="d-flex mb-10 align-items-center">
                  <Link href="#" className="customer">
                    <Image
                      width={54}
                      height={54}
                      src="/img/faq/ha1.png"
                      alt="happy"
                    />
                  </Link>
                  <Link href="#" className="customer">
                    <Image
                      width={54}
                      height={54}
                      src="/img/faq/ha2.png"
                      alt="happy"
                    />
                  </Link>
                  <Link href="#" className="customer">
                    <Image
                      width={54}
                      height={54}
                      src="/img/faq/ha3.png"
                      alt="happy"
                    />
                  </Link>
                  <Link href="#" className="customer">
                    <Image
                      width={54}
                      height={54}
                      src="/img/faq/ha4.png"
                      alt="happy"
                    />
                  </Link>
                  <Link href="#" className="customer">
                    <Image
                      width={54}
                      height={54}
                      src="/img/faq/ha5.png"
                      alt="happy"
                    />
                  </Link>
                </div>
                <span className="fz-18 fw-500 inter text-white">
                  <span className="base2">500k+</span> Happy Customer
                </span>
              </div>
              <Image src={faq} className="round16 w-100" alt="card" />
              <div className="video__thumb d-flex align-items-center justify-content-center">
                <Image src={faqCircle} alt="circle" />
                <Link
                  href="/https://www.youtube.com/watch?v=wXNv-x5zVgE&ab_channel=KnotebookNetwork%27s"
                  className="video-btn d-flex align-items-center justify-content-center">
                  <i className="bi bi-play"></i>
                </Link>
              </div>
              <Image src={faqline} alt="img" className="faqline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
