"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import required modules
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { type Swiper as SwiperTypes, FreeMode, Navigation, Thumbs } from "swiper";
import SelectOption from "../shared/SelectOption";

const ServiceDetails = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes|null>(null);
  return (
    <section className="service__details pt-120 pb-120 sectionbg2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="service__detailswrapper">
              <div className="trending__based mb-40 bgwhite round16 shadow1">
                {/* <Swiper
                  spaceBetween={10}
                  loop
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  // thumbs={{
                  //   swiper:                    
                  //     thumbsSwiper && !thumbsSwiper.destroyed
                  //       ? thumbsSwiper
                  //       : null,
                  // }}
                  modules={[FreeMode, Thumbs, Navigation]}
                  className="swiper mySwiper2 rounded-4">
                  <SwiperSlide className="swiper-slide">
                    <Image
                      width={816}
                      height={485}
                      src="/img/details/aida1.jpg"
                      alt="img"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Image
                      width={816}
                      height={485}
                      src="/img/details/aida2.jpg"
                      alt="img"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Image
                      width={816}
                      height={485}
                      src="/img/details/aida3.jpg"
                      alt="img"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Image
                      width={816}
                      height={485}
                      src="/img/details/aida4.jpg"
                      alt="img"
                    />
                  </SwiperSlide>
                </Swiper>
                <div className="small__mainwrappper ralt">
                  <Swiper                 
                    onSwiper={setThumbsSwiper}
                    loop
                    spaceBetween={24}
                    slidesPerView="auto"
                    freeMode={true}
                    watchSlidesProgress={true}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[FreeMode, Thumbs, Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                      },
                      1024: {
                        spaceBetween: 24,
                        slidesPerView: 4,
                      },
                    }}
                    className="swiper mySwiper small__thumbwrapper">
                    <SwiperSlide className="cursor-pointer">
                      <Image
                        className="img-fluid"
                        width={160}
                        height={160}
                        src="/img/details/aidas1.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="cursor-pointer">
                      <Image
                        className="img-fluid"
                        width={160}
                        height={160}
                        src="/img/details/aidas2.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="cursor-pointer">
                      <Image
                        className="img-fluid"
                        width={160}
                        height={160}
                        src="/img/details/aidas3.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="cursor-pointer">
                      <Image
                        className="img-fluid"
                        width={160}
                        height={160}
                        src="/img/details/aidas4.jpg"
                        alt="img"
                      />
                    </SwiperSlide>
                  </Swiper> */}
                  <div className="swiper-button-next">
                    <i className="bi bi-chevron-right"></i>
                  </div>
                  <div className="swiper-button-prev">
                    <i className="bi bi-chevron-left"></i>
                  </div>
                </div>
                <div className="based__content border round16 bgwhite">
                  <Link
                    href="#"
                    className=" learning round16 fz-16 fw-500 inter base">
                    Data Scientists
                  </Link>
                  <h2 className="mb-16 mt-16">
                    <Link href="#" className="title">
                      AI-based Stock Trading Algorithm
                    </Link>
                  </h2>
                  <ul className="d-flex tranding__listbase bborderdash pb-20 mb-24 align-items-center justify-content-between">
                    <li>
                      <span className="fz-16 fw-400 inter pra">
                        Starting :{" "}
                        <span className="fz-18 fw-600 base inter">$300</span>
                      </span>
                    </li>
                    <li>
                      <span className="fz-16 fw-400 inter success">
                        Level 2
                      </span>
                    </li>
                    <li className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </li>
                    <li className="fz-16 fw-400 inter pra">
                      Active Order :{" "}
                      <span className="fz-18 fw-600 base inter">12</span>
                    </li>
                  </ul>
                  <ul className="trending__timing__list d-flex align-items-cener justify-content-between">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Delivery Time
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          1-3 Days
                        </span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-stopwatch d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Response Times
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          1 Hour
                        </span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-globe d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Level of English
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          Basic
                        </span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-shield-check d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Order completion
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          100%
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bborderdash pb-24 mt-30">
                  <h3 className="title mb-20">Description</h3>
                  <p className="fz-16 fw-400 inter pra">
                    An AI-based stock trading algorithm utilizes artificial
                    intelligence and machine learning techniques to analyze
                    market data, identify patterns, and make trading decisions
                    in the stock market. This algorithmic trading approach aims
                    to leverage the computational power of AI to automate
                    trading strategies and potentially enhance trading
                    performance.
                  </p>
                </div>
                <div className="bborderdash pt-24 pb-24">
                  <h4 className="title mb-20">My services include :</h4>
                  <div className="include__ser d-flex align-items-center">
                    <div className="ser__list">
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Data Collection
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Data Preprocessing
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Feature Extraction
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Machine Learning Models
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Decision Making
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Portfolio Management
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Monitoring and Adaptation
                      </span>
                    </div>
                    <div className="ser__list">
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Algorithmic Trading Strategies
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Risk Management
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Backtesting and Optimization
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Real-Time Market Data
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Integration with Trading Platforms
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Continuous Learning and Adaptation
                      </span>
                      <span className="fz-16 ralt fw-400 mb-1 inter pra d-block">
                        Compliance and Regulation
                      </span>
                    </div>
                  </div>
                </div>
                <p className="fz-16 pt-24 fw-400 inter pra">
                  It&apos;s worth noting that the success of an AI-based stock
                  trading algorithm depends on various factors, including the
                  quality of data, the robustness of the models, market
                  conditions.
                </p>
              </div>
              <div className="trending__based mb-40 bgwhite round16 shadow1">
                <h4 className="fw-600 inter title bborderdash pb-24 mb-24">
                  Compare packages
                </h4>
                <div className="compare__ptable border round16">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <span className="fz-16 pra inter fw-400">
                            {" "}
                            Package
                          </span>
                        </td>
                        <td>
                          <span className="fz-16 fw-400 mb-1 inter d-block base">
                            $29
                          </span>
                          <span className="fz-20 fw-500 mb-1 inter d-block pra">
                            Basic
                          </span>
                          <span className="fz-16 fw-500 mb-1 inter d-block pra">
                            1 Artwork
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            1 digital AI design:
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            a character design
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            OR a wallpaper
                          </span>
                        </td>
                        <td>
                          <span className="fz-16 fw-400 mb-1 inter d-block base">
                            $99
                          </span>
                          <span className="fz-20 fw-500 mb-1 inter d-block pra">
                            Skilled
                          </span>
                          <span className="fz-16 fw-500 mb-1 inter d-block pra">
                            3 Artwork
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            3 digital AI design:
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            a character design
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            OR a wallpaper
                          </span>
                        </td>
                        <td>
                          <span className="fz-16 fw-400 mb-1 inter d-block base">
                            $199
                          </span>
                          <span className="fz-20 fw-500 mb-1 inter d-block pra">
                            Prime
                          </span>
                          <span className="fz-16 fw-500 mb-1 inter d-block pra">
                            5 Artwork
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            5 digital AI design:
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            a character design
                          </span>
                          <span className="fz-16 fw-400 mb-1 inter d-block pra">
                            OR a wallpaper
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">
                            Prompt writing
                          </span>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">
                            Include image examples
                          </span>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">
                            Artwork delivery
                          </span>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">
                            Image upscaling
                          </span>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                        <td className="text-center">
                          <i className="bi bi-check base fz-20"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">
                            Revisions
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 inter pra">1</span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 inter pra">5</span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 inter pra">
                            Unlimited
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">
                            Delivery Time
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 inter pra">3 Days</span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 inter pra">5 Days</span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 inter pra">7 Days</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fz-16 fw-400 inter pra">Total</span>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 d-block mb-16 inter pra">
                            $29
                          </span>
                          <Link href="#" className="cmn--btn outline__btn">
                            <span className="fz-16">Select</span>
                          </Link>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 d-block mb-16 inter pra">
                            $99
                          </span>
                          <Link href="#" className="cmn--btn outline__btn">
                            <span className="fz-16">Select</span>
                          </Link>
                        </td>
                        <td className="text-center">
                          <span className="fz-16 fw-400 d-block mb-16 inter pra">
                            $199
                          </span>
                          <Link href="#" className="cmn--btn outline__btn">
                            <span className="fz-16">Select</span>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="trending__based bgwhite mb-40 round16 shadow1">
                <h4 className="fw-600 inter title bborderdash pb-24 mb-24">
                  Frequently Asked Questions
                </h4>
                <div className="faq__qustion">
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
                                It refers to a list of common questions and
                                answers related to a particular topic or
                                product. In the case of a credit card
                                marketplace website
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
                              It refers to a list of common questions and
                              answers related to a particular topic or product.
                              In the case of a credit card marketplace website
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
                              It refers to a list of common questions and
                              answers related to a particular topic or product.
                              In the case of a credit card marketplace website
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
                              It refers to a list of common questions and
                              answers related to a particular topic or product.
                              In the case of a credit card marketplace website
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--Accordion items--> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment__details__wrapper round16 mb-40 bgwhite">
                <div className="average__review bborderdash pb-30 mb-30">
                  <h4 className="title pb-30 mb-30 bborderdash">
                    Average Reviews
                  </h4>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      5<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "90%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">90%</span>
                  </div>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      4<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "75%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">75%</span>
                  </div>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      3<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "67%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">67%</span>
                  </div>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      2<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "44%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">44%</span>
                  </div>
                  <div className="aver__item d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      1<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "21%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">21%</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-30 flex-wrap justify-content-between">
                  <h5 className="inter title fz-20 fw-600">4.6 (66 reviews)</h5>
                  <div className="sort__latest d-flex align-items-center gap-3">
                    <span className="fz-16 fw-400 inter ptext2">Sort By:</span>
                    <SelectOption
                      options={[
                        { value: "Newest", label: "Newest" },
                        { value: "Recent", label: "Recent" },
                      ]}
                      placeholder="Newest"
                      fullWidth={false}
                    />
                  </div>
                </div>
                <div className="review__commentbox mb-30">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="cmn__replaybox pt-24 pb-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                  <div className="discussion d-flex align-items-center ">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review1.png"
                      alt="review"
                      className="round50"
                    />
                    <input type="text" placeholder="Join the discussion..." />
                  </div>
                </div>
                <div className="review__commentbox mb-40">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="d-flex pt-24 gap-3 align-items-center">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review2.png"
                      className="round50"
                      alt="re-img"
                    />
                    <div className="name__content">
                      <h5 className="title">
                        Albert Flores
                        <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                          Customer success
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="review__commentbox mb-40">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="d-flex pt-24 gap-3 align-items-center">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review3.png"
                      className="round50"
                      alt="re-img"
                    />
                    <div className="name__content">
                      <h5 className="title">
                        Annette Black
                        <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                          Personal assistant
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="cmn--btn d-flex align-items-center gap-2">
                  <span>See All Reviews</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="basic__skilled__wrapper">
              <div className="basic__boxskill mb-24 round16 bgwhite">
                <ul
                  className="nav d-flex align-items-cener mb-24 nav-tabs"
                  id="myTab"
                  role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true">
                      Basic
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false">
                      Skilled
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false">
                      Prime
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane title fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab">
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <span className="fz-18 fw-500 inter pra">1 ARTWORK</span>
                      <h3 className="base">$29</h3>
                    </div>
                    <p className="fz-14 mb-24 fw-400 inter pra">
                      1 digital AI design: a character design OR a wallpaper OR
                      a book cover
                    </p>
                    <div className="d-flex gap-4 align-items-center">
                      <Link
                        href="#"
                        className="d-flex align-items-center gap-2">
                        <i className="bi bi-clock-history title"></i>
                        <span className="fz-16 fw-500 inter pra">
                          3 Day Delivery
                        </span>
                      </Link>
                      <Link
                        href="#"
                        className="d-flex align-items-center gap-2">
                        <i className="bi bi-arrow-repeat title"></i>
                        <span className="fz-16 fw-500 inter pra">
                          Unlimited Revisions
                        </span>
                      </Link>
                    </div>
                    <div className="checkbar mt-16 mb-30">
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter pra">
                        <i className="bi bi-check fz-20 base"></i>
                        Prompt writing
                      </span>
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter opacitys">
                        <i className="bi bi-check fz-20 base"></i>
                        Generated image examples
                      </span>
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter pra">
                        <i className="bi bi-check fz-20 base"></i>
                        Artwork delivery
                      </span>
                      <span className="fz-14 d-flex align-items-center gap-2 fw-400 inter opacitys">
                        <i className="bi bi-check fz-20 opacitys"></i>
                        Image upscaling
                      </span>
                    </div>
                    <Link
                      href="/freelancer-details"
                      className="cmn--btn d-flex justify-content-center d-block">
                      <span>Continue</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                    <Link
                      href="/featuredjob-details"
                      className="fz-16 text-center d-block mt-16 fw-500 inter pra">
                      Compare packages
                    </Link>
                  </div>
                  <div
                    className="tab-pane title fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab">
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <span className="fz-18 fw-500 inter pra">2 ARTWORK</span>
                      <h3 className="base">$99</h3>
                    </div>
                    <p className="fz-14 mb-24 fw-400 inter pra">
                      1 digital AI design: a character design OR a wallpaper OR
                      a book cover
                    </p>
                    <div className="d-flex gap-4 align-items-center">
                      <Link
                        href="#"
                        className="d-flex align-items-center gap-2">
                        <i className="bi bi-clock-history title"></i>
                        <span className="fz-16 fw-500 inter pra">
                          3 Day Delivery
                        </span>
                      </Link>
                      <Link
                        href="#"
                        className="d-flex align-items-center gap-2">
                        <i className="bi bi-arrow-repeat title"></i>
                        <span className="fz-16 fw-500 inter pra">
                          Unlimited Revisions
                        </span>
                      </Link>
                    </div>
                    <div className="checkbar mt-16 mb-30">
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter pra">
                        <i className="bi bi-check fz-20 base"></i>
                        Prompt writing
                      </span>
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter opacitys">
                        <i className="bi bi-check fz-20 base"></i>
                        Generated image examples
                      </span>
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter pra">
                        <i className="bi bi-check fz-20 base"></i>
                        Artwork delivery
                      </span>
                      <span className="fz-14 d-flex align-items-center gap-2 fw-400 inter opacitys">
                        <i className="bi bi-check fz-20 opacitys"></i>
                        Image upscaling
                      </span>
                    </div>
                    <Link
                      href="/freelancer-details"
                      className="cmn--btn d-flex justify-content-center d-block">
                      <span>Continue</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                    <Link
                      href="/featuredjob-details"
                      className="fz-16 text-center d-block mt-16 fw-500 inter pra">
                      Compare packages
                    </Link>
                  </div>
                  <div
                    className="tab-pane title fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab">
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <span className="fz-18 fw-500 inter pra">3 ARTWORK</span>
                      <h3 className="base">$199</h3>
                    </div>
                    <p className="fz-14 mb-24 fw-400 inter pra">
                      1 digital AI design: a character design OR a wallpaper OR
                      a book cover
                    </p>
                    <div className="d-flex gap-4 align-items-center">
                      <Link
                        href="#"
                        className="d-flex align-items-center gap-2">
                        <i className="bi bi-clock-history title"></i>
                        <span className="fz-16 fw-500 inter pra">
                          3 Day Delivery
                        </span>
                      </Link>
                      <Link
                        href="#"
                        className="d-flex align-items-center gap-2">
                        <i className="bi bi-arrow-repeat title"></i>
                        <span className="fz-16 fw-500 inter pra">
                          Unlimited Revisions
                        </span>
                      </Link>
                    </div>
                    <div className="checkbar mt-16 mb-30">
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter pra">
                        <i className="bi bi-check fz-20 base"></i>
                        Prompt writing
                      </span>
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter opacitys">
                        <i className="bi bi-check fz-20 base"></i>
                        Generated image examples
                      </span>
                      <span className="fz-14 d-flex mb-1 align-items-center gap-2 fw-400 inter pra">
                        <i className="bi bi-check fz-20 base"></i>
                        Artwork delivery
                      </span>
                      <span className="fz-14 d-flex align-items-center gap-2 fw-400 inter opacitys">
                        <i className="bi bi-check fz-20 opacitys"></i>
                        Image upscaling
                      </span>
                    </div>
                    <Link
                      href="/freelancer-details"
                      className="cmn--btn d-flex justify-content-center d-block">
                      <span>Continue</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                    <Link
                      href="/featuredjob-details"
                      className="fz-16 text-center d-block mt-16 fw-500 inter pra">
                      Compare packages
                    </Link>
                  </div>
                </div>
              </div>
              <div className="darrell__profile round16 bgwhite">
                <div className="profile__check ralt">
                  <Image
                    width={88}
                    height={88}
                    src="/img/testimonial/darrell.jpg"
                    alt="profile"
                  />
                  <i className="bi bi-check"></i>
                </div>
                <div className="darrell__content mt-40 text-center">
                  <h4 className="title mb-16">Darrell Steward</h4>
                  <span className="fz-16 fw-400 inter title">
                    Machine Learner
                  </span>
                  <ul className="ratting__compo mt-16 justify-content-center d-flex align-items-center gap-3">
                    <li className="d-flex fz-16 fw-400 inter align-items-center gap-2 pra">
                      <i className="bi bi-geo-alt base"></i>
                      Japan
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill ratting"></i>
                      <span className="fz-16 fw-400 inter title">
                        4.8 <span className="opacitys">(114)</span>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-1 fz-16 fw-400 pra">
                      Member:
                      <span className="base">2023</span>
                    </li>
                  </ul>
                  <ul className="social justify-content-center pt-24 mb-40 d-flex align-items-center">
                    <li>
                      <Link href="#">
                        <i className="bi bi-facebook base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-instagram base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-twitter base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-pinterest base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-dribbble base"></i>
                      </Link>
                    </li>
                  </ul>
                  <Link href="/profile" className="cmn--btn outline__btn">
                    <span>View Profile</span>
                    <span>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default ServiceDetails;
