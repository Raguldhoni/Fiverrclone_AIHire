import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <section className="categoris__section sectionbg pb-120 pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-60">
              <h4 className="sub ralt base mb-16  " data--duration="0.5s">
                Categorires
              </h4>
              <h2 className="title mb-24  " data--duration="0.7s">
                Trending Top Categories Uncovered
              </h2>
              <p className="ptext2 fz-16 fw-400 inter  " data--duration="0.9s">
                Our AI freelancer marketplace is more than just a platform.
                It&apos;s a community of professionals who are passionate about
                AI
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-40 justify-content-center">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/ainlp.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      NLP Specialists
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/data-scient.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      Data Scientists
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/aibraind.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      Machine Learning
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/deep-learning.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      Deep Learning
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/bigrobotic.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      Robotics Engineer
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/airound.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      AI Consultants
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/chatbot.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      Chatbot Developers
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6  ">
            <div className="categoris__item round16 bgwhite border">
              <div className="boxes">
                <div className="icon mb-24 ralt">
                  <Image
                    width={60}
                    height={55}
                    src="/img/categories/data-analysis.png"
                    alt="icon"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10 title">
                    <Link href="/featuredjob" className="title">
                      Data Analysts
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 title inter">
                    Our AI freelancer marketplace is more than just a platform
                  </p>
                </div>
              </div>
              <Link
                href="/featuredjob"
                className="d-flex readmore align-items-center gap-2">
                <span className="fz-16 transition fw-600 base inter">
                  Read More
                </span>
                <span>
                  <i className="bi bi-arrow-right transition fz-18 base"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/featuredjob" className="cmn--btn outline__btn">
            <span>See All Categories</span>
            <span className="ps-1">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
