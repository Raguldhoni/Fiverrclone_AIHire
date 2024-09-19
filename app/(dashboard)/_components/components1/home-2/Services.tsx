import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="service__section pt-120 pb-120  bg__tblr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="section__title text-center mb-60">
              <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                Services
              </h4>
              <h2 className="title mb-24  " data--duration="1.2s">
                Popular Trending Services
              </h2>
              <p className="ptext2 fz-16 fw-400 inter  " data--duration="1.4s">
                Discover the hottest and most sought-after services that are
                currently trending on our AI Freelancer Marketplace. Stay ahead
                of the curve
              </p>
            </div>
          </div>
        </div>
        <div className="service__wrapertwo service__popularwrap">
          <div className="row justify-content-center g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s1.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      Machine Learning
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      Machine Learning for Advanced Predictive
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u1.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Luic</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s2.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      NLP Specialists
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      Machine Translation for Multilingual Content
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u2.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Victoria</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s3.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      Data Scientist
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      AI-based Stock Trading Algorithm
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u3.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Leslie</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s4.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      AI Consultansts
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      AI-driven Product Recommendations
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u4.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Mitchell</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s5.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      Deep Learning
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      Medical Diagnosis and Treatment Support
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u5.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Greg</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s6.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      Robotics
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      AI Voice Assistant Technology
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u6.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Max</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s7.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      AI Research
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      AI-driven Market Analysis and Insights
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u3.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Aubrey</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-9  ">
              <div className="service__item shadow2 round16 p-8 bgwhite">
                <Link href="/service-grid" className="thumb round16 w-100">
                  <Image
                    width={352}
                    height={262}
                    src="/img/service/s8.jpg"
                    className="round16"
                    alt="service"
                  />
                </Link>
                <div className="service__content">
                  <div className="d-flex mb-16 align-items-center justify-content-between">
                    <Link
                      href="#"
                      className=" learning round16 fz-16 fw-600 inter base">
                      Virtual Assistant
                    </Link>
                    <span className="success2 d-block fz-16 fw-600 inter">
                      Level 2
                    </span>
                  </div>
                  <h5 className="mb-16">
                    <Link href="/service-grid" className="title">
                      Computer Vision Enhancement
                    </Link>
                  </h5>
                  <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                    <div className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        width={32}
                        height={32}
                        src="/img/service/u8.png"
                        className="small__thumb"
                        alt="user"
                      />
                      <span className="fz-16 fw-500 pra inter">Philip</span>
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Starting :{" "}
                      <span className="fz-18 fw-600 base inter">$300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-40">
          <Link href="/service-details" className="cmn--btn outline__btn">
            <span>See All</span>
            <span className="ps-1">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
