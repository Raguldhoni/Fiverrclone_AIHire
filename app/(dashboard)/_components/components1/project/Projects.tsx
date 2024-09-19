"use client";
import React, { useState } from "react";
import Pagination from "../shared/Pagination";
import CustomRangeSlider from "../shared/CustomRangeSlider";
import Image from "next/image";
import Checkbox from "../shared/Checkbox";
import {
  categoryTypes,
  deliveryTimes,
  locations,
  ratings,
  responseTime,
} from "../../data/filters";
import Link from "next/link";

const Projects = () => {
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
            <div className="chatbot__developers">
              <div className="chatbot__items round16 mb-24 shadow2 bgwhite">
                <div className="d-flex mb-24 flex-wrap align-items-center justify-content-between">
                  <h4 className="title">AI-powered Chatbot Development</h4>
                  <span className="fz-20 d-flex align-items-center gap-1 fw-400 inter title">
                    Fixed: <span className="base inter fw-500">$300</span>
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  Develop a conversational chatbot using natural language
                  processing and machine learning techniques to provide
                  automated customer support and assistance.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">917 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Expensive</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Proposals:{" "}
                    <span className="title fw-600 inter">76 Received</span>
                  </span>
                </div>
                <div className="d-flex pt-24 flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="abstergo__left d-flex align-items-center">
                    <div className="abster ralt">
                      <Image
                        width={40}
                        height={40}
                        src="/img/details/worldarow.jpg"
                        alt="img"
                      />
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Abstergo Ltd.
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/project-details"
                      className="cmn--btn outline__btn">
                      <span>Send Proposal</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="chatbot__items round16 mb-24 shadow2 bgwhite">
                <div className="d-flex mb-24 flex-wrap align-items-center justify-content-between">
                  <h4 className="title">
                    Image Recognition & Object Detection System
                  </h4>
                  <span className="fz-20 d-flex align-items-center gap-1 fw-400 inter title">
                    Fixed: <span className="base inter fw-500">$300</span>
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  Build an image recognition and object detection system that
                  can accurately identify and classify objects in images using
                  deep learning algorithms.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">917 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Expensive</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Proposals:{" "}
                    <span className="title fw-600 inter">76 Received</span>
                  </span>
                </div>
                <div className="d-flex pt-24 flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="abstergo__left d-flex align-items-center">
                    <div className="abster ralt">
                      <Image
                        width={40}
                        height={40}
                        src="/img/details/binford.jpg"
                        alt="img"
                      />
                    </div>
                    <span className="fz-16 fw-400 inter pra">Binford Ltd.</span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/project-details"
                      className="cmn--btn outline__btn">
                      <span>Send Proposal</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="chatbot__items round16 mb-24 shadow2 bgwhite">
                <div className="d-flex mb-24 flex-wrap align-items-center justify-content-between">
                  <h4 className="title">
                    Natural Language for Sentiment Analysis
                  </h4>
                  <span className="fz-20 d-flex align-items-center gap-1 fw-400 inter title">
                    Fixed: <span className="base inter fw-500">$300</span>
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  Implement a natural language processing system that can
                  analyze text data and determine the sentiment (positive,
                  negative, or neutral) associated with it
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">917 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Expensive</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Proposals:{" "}
                    <span className="title fw-600 inter">76 Received</span>
                  </span>
                </div>
                <div className="d-flex pt-24 flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="abstergo__left d-flex align-items-center">
                    <div className="abster ralt">
                      <Image
                        width={40}
                        height={40}
                        src="/img/details/acme.jpg"
                        alt="img"
                      />
                    </div>
                    <span className="fz-16 fw-400 inter pra">Acme Co.</span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/project-details"
                      className="cmn--btn outline__btn">
                      <span>Send Proposal</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="chatbot__items round16 mb-24 shadow2 bgwhite">
                <div className="d-flex mb-24 flex-wrap align-items-center justify-content-between">
                  <h4 className="title">
                    Machine Learning Algorithm Optimization
                  </h4>
                  <span className="fz-20 d-flex align-items-center gap-1 fw-400 inter title">
                    Fixed: <span className="base inter fw-500">$300</span>
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  Optimize existing machine learning algorithms to enhance their
                  performance, accuracy, and efficiency, ensuring better
                  predictive capabilities and model optimization.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">917 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Expensive</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Proposals:{" "}
                    <span className="title fw-600 inter">76 Received</span>
                  </span>
                </div>
                <div className="d-flex pt-24 flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="abstergo__left d-flex align-items-center">
                    <div className="abster ralt">
                      <Image
                        width={40}
                        height={40}
                        src="/img/details/biffco.jpg"
                        alt="img"
                      />
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Biffco Enterprises Ltd.
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/project-details"
                      className="cmn--btn outline__btn">
                      <span>Send Proposal</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="chatbot__items round16 shadow2 bgwhite">
                <div className="d-flex mb-24 flex-wrap align-items-center justify-content-between">
                  <h4 className="title">AI-based Recommender System</h4>
                  <span className="fz-20 d-flex align-items-center gap-1 fw-400 inter title">
                    Fixed: <span className="base inter fw-500">$300</span>
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="/project-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  Create an AI-powered recommender system that can analyze user
                  preferences and behavior to provide personalized
                  recommendations for products, services, or content.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">917 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Expensive</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Proposals:{" "}
                    <span className="title fw-600 inter">76 Received</span>
                  </span>
                </div>
                <div className="d-flex pt-24 flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="abstergo__left d-flex align-items-center">
                    <div className="abster ralt">
                      <Image
                        width={40}
                        height={40}
                        src="/img/details/big.jpg"
                        alt="img"
                      />
                    </div>
                    <span className="fz-16 fw-400 inter pra">
                      Big Kahuna Burger Ltd.
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/project-details"
                      className="cmn--btn outline__btn">
                      <span>Send Proposal</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
