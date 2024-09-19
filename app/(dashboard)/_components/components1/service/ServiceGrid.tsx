import Image from "next/image";
import React from "react";
import Pagination from "../shared/Pagination";
import CustomRangeSlider from "../shared/CustomRangeSlider";
import Checkbox from "../shared/Checkbox";
import {
  categoryTypes,
  deliveryTimes,
  locations,
  ratings,
  responseTime,
} from "../../data/filters";
import Link from "next/link";
import SelectOption from "../shared/SelectOption";

const ServiceGrid = () => {
  return (
    <section className="service__grid pt-120 pb-120 sectionbg2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4 col-lg-4">
            <div className="card__sidebar side__sticky round16">
              <div className="card__common__item bgwhite round16">
                <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                  Filter
                </h4>
                <form
                  action="#0"
                  className="d-flex mb-24 filter__search align-items-center justify-content-between">
                  <input type="text" placeholder="Search" />
                  <i className="bi bi-search"></i>
                </form>
                <div className="bank__check__wrap tborderdash pb-24">
                  <h5 className="title mb-16 pt-20">Types of Categories</h5>
                  {categoryTypes.map(({ id, title, number, checked }) => (
                    <Checkbox
                      title={title}
                      number={number}
                      key={id}
                      id={id}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="pt-24 tborderdash bborderdash pb-24">
                  <h5 className="title mb-16">Pricing Scale</h5>
                  <CustomRangeSlider />
                </div>
                <div className="bank__check__wrap pb-24 tborderdash">
                  <h5 className="title mb-16 pt-24">Deliver Time</h5>
                  {deliveryTimes.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={label}
                      number={number}
                      id={id}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="bank__check__wrap pb-24 tborderdash">
                  <h5 className="title mb-16 pt-24">Response Time</h5>
                  {responseTime.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={label}
                      id={id}
                      number={number}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="bank__check__wrap bborderdash pb-24 mb-24 tborderdash">
                  <h5 className="title mb-16 pt-24">Star Category</h5>
                  {ratings.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={
                        <>
                          <i className="bi bi-star-fill ratting"></i>
                          {label}
                        </>
                      }
                      number={number}
                      id={id}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="bank__check__wrap mb-24 pb-24 bborderdash">
                  <h5 className="title mb-16">Location</h5>

                  {locations.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={label}
                      id={id}
                      number={number}
                      checked={checked}
                    />
                  ))}
                </div>
                <Link
                  href="#"
                  className="reset__filter justify-content-center fw-600 inter fz-16 d-flex align-items-center gap-2 base">
                  <i className="bi bi-arrow-clockwise base fz-20"></i>
                  Reset Filters
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="showing__gridlist__bar mb-40 round16 bgwhite border d-flex align-items-center justify-content-between">
              <span className="fz-16 fw-400 inter pra">
                Showing 12 of 60 Results
              </span>
              <div className="gridlist__wrap d-flex align-items-center">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center gap-1 active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true">
                      <i className="bi bi-grid"></i>
                      <span className="fz-16 fw-500 inter pra">Grid</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center gap-1"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false">
                      <i className="bi bi-list"></i>
                      <span className="fz-16 fw-500 inter pra">List</span>
                    </button>
                  </li>
                </ul>
                <div className="short__bar d-flex align-items-center gap-2">
                  <span className="fz-16 fw-400 inter pra flex-shrink-0">
                    Sort By :
                  </span>
                  <SelectOption
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                    ]}
                    placeholder="All"
                    fullWidth={true}
                    classes="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="showing__gridlist__body">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="row justify-content-center g-4">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s1.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              Machine Learning for Advanced Predictive
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Luic
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s2.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              Machine Translation for Multilingual Content
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Victoria
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s3.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              AI-based Stock Trading Algorithm
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Leslie
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s4.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              AI-driven Product Recommendations
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Mitchell
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s5.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              Medical Diagnosis and Treatment Support
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Greg
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s6.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              AI Voice Assistant Technology
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Max
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s7.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              AI-driven Market Analysis and Insights
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Aubrey
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s8.jpg"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              Computer Vision Enhancement refers to the use.
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Philip
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s8.png"
                            className="round16 w-100"
                            alt="service"
                          />
                        </Link>
                        <div className="service__content">
                          <div className="d-flex mb-16 align-items-center justify-content-between">
                            <Link
                              href="#"
                              className=" learning round16 fz-16 fw-600 inter base">
                              Chatbot
                            </Link>
                            <span className="success2 d-block fz-16 fw-600 inter">
                              Level 2
                            </span>
                          </div>
                          <h5 className="mb-16">
                            <Link href="/service-details" className="title">
                              Natural Language Processing Chatbot
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Eduardo
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s9.png"
                            className="round16 w-100"
                            alt="service"
                          />
                        </Link>
                        <div className="service__content">
                          <div className="d-flex mb-16 align-items-center justify-content-between">
                            <Link
                              href="#"
                              className=" learning round16 fz-16 fw-600 inter base">
                              Data Analysts
                            </Link>
                            <span className="success2 d-block fz-16 fw-600 inter">
                              Level 2
                            </span>
                          </div>
                          <h5 className="mb-16">
                            <Link href="/service-details" className="title">
                              AI-enhanced Knowledge Management
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Arlene
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s10.png"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              AI-driven Business Intelligence
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Aubrey
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="service__item shadow2 round16 p-8 bgwhite">
                        <Link
                          href="/service-details"
                          className="thumb round16 w-100">
                          <Image
                            width={400}
                            height={298}
                            src="/img/service/s11.png"
                            className="round16 w-100"
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
                            <Link href="/service-details" className="title">
                              AI-assisted Healthcare Diagnosis
                            </Link>
                          </h5>
                          <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                            <div className="d-flex gap-2 fz-16 fw-600 inter title">
                              <i className="bi bi-star-fill ratting"></i>
                              5.0
                              <span className="fz-16 fw-400 inter pra">
                                (34)
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Active Order :{" "}
                              <span className="fz-18 fw-600 base inter">
                                12
                              </span>
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
                              <span className="fz-16 fw-500 pra inter">
                                Mitchell
                              </span>
                            </div>
                            <span className="fz-16 fw-400 inter pra">
                              Starting :{" "}
                              <span className="fz-18 fw-600 base inter">
                                $300
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="pagination justify-content-center mt-40">
                    <li>
                      <Link href="#">
                        <i className="bi bi-chevron-left base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">1</Link>
                    </li>
                    <li>
                      <Link href="#">2</Link>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#">...</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-chevron-right base"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab">
                  <div className="service__wrapertwo service__liststyle">
                    <div className="row justify-content-center g-4">
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                Machine Learning for Advanced Predictive
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Luic
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                Machine Translation for Multilingual Content
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Victoria
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                AI-based Stock Trading Algorithm
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Leslie
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                AI-driven Product Recommendations
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Mitchell
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                Medical Diagnosis and Treatment Support
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Greg
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                AI Voice Assistant Technology
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Max
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                AI-driven Market Analysis and Insights
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Aubrey
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="service__item shadow2 round16 p-8 bgwhite">
                          <Link
                            href="/service-details"
                            className="thumb round16">
                            <Image
                              width={400}
                              height={298}
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
                              <Link href="/service-details" className="title">
                                Computer Vision Enhancement
                              </Link>
                            </h5>
                            <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                <i className="bi bi-star-fill ratting"></i>
                                5.0
                                <span className="fz-16 fw-400 inter pra">
                                  (34)
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Active Order :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  12
                                </span>
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
                                <span className="fz-16 fw-500 pra inter">
                                  Philip
                                </span>
                              </div>
                              <span className="fz-16 fw-400 inter pra">
                                Starting :{" "}
                                <span className="fz-18 fw-600 base inter">
                                  $300
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Pagination />
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

export default ServiceGrid;
