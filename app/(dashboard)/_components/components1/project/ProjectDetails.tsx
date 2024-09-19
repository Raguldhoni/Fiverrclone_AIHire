"use client";
import React, { useState } from "react";
import Checkbox from "../shared/Checkbox";
import Image from "next/image";
import Link from "next/link";
const features = [
  {
    id: "bank11t20",
    label: "Prompt writing",
    checked: true,
  },
  {
    id: "bank22",
    label: "Generated image examples",
    checked: true,
  },
  {
    id: "bank44t8",
    label: "Unlimited Revisions",
    checked: true,
  },
  {
    id: "bank33t12",
    label: "Image upscaling",
    checked: false,
  },
];

const ProjectDetails = () => {
  const [delivryTime, setDeliveryTime] = useState(7);
  const [rivisionTime, setRivisionTime] = useState(7);
  const handleDeliveryDecrease = () => {
    delivryTime > 1 && setDeliveryTime(delivryTime - 1);
  };
  const handleRivisionDecrease = () => {
    rivisionTime > 1 && setRivisionTime(rivisionTime - 1);
  };
  return (
    <section className="project__details pt-120 pb-120 sectionbg2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="chatbot__developers">
              <div className="chatbot__items chatbot__items__details round16 mb-24 shadow2 bgwhite">
                <div className="attect__trntime border round16 mb-24">
                  <h2 className="title mb-24">
                    AI-powered Chatbot Development
                  </h2>
                  <ul className="d-flex tranding__listbase bborderdash pb-20 mb-24 align-items-center justify-content-between">
                    <li>
                      <span className="fz-16 d-flex align-items-cener gap-1 fw-400 inter pra">
                        <i className="bi bi-file-earmark-code base fz-18"></i>
                        Apps Developements
                      </span>
                    </li>
                    <li>
                      <span className="fz-16 d-flex align-items-cener gap-1 fw-400 inter pra">
                        <i className="bi bi-clock-history base fz-18"></i>
                        January 5, 2023
                      </span>
                    </li>
                    <li>
                      <span className="fz-16 d-flex align-items-cener gap-1 fw-400 inter pra">
                        <i className="bi bi-geo-alt base fz-18"></i>
                        Dubai
                      </span>
                    </li>
                    <li className="d-flex gap-2 fz-16 fw-600 inter title">
                      <i className="bi bi-star-fill ratting"></i>
                      5.0
                      <span className="fz-16 fw-400 inter pra">(34)</span>
                    </li>
                  </ul>
                  <ul className="trending__timing__list d-flex align-items-cener">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person-lines-fill d-flex align-items-center justify-content-center"></i>
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
                      <i className="bi bi-calendar-date d-flex align-items-center justify-content-center"></i>
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
                      <i className="bi bi-tags d-flex align-items-center justify-content-center"></i>
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
                <h3 className="title mb-20">Description</h3>
                <p className="inter fw-400 bborderdash pb-30 mb-30 fz-16 pra">
                  The &quot;AI-powered Chatbot Development&quot; project focuses
                  on building an intelligent chatbot that leverages artificial
                  intelligence and natural language processing techniques to
                  provide automated customer support and assistance.
                </p>
                <h4 className="title mb-24">Skills Required:</h4>
                <div className="chatbot__tag mb-30 pb-30 bborderdash d-flex align-items-center">
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                </div>
                <div className="global__list bborderdash pb-30 mb-30">
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        Natural Language Processing (NLP):
                      </span>{" "}
                      The chatbot should be equipped with NLP capabilities to
                      understand and interpret user input.
                    </span>
                  </div>
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        Machine Learning Algorithms:
                      </span>{" "}
                      Implement machine learning algorithms, such as supervised
                      learning or reinforcement learning, to train the chatbot
                      model.
                    </span>
                  </div>
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        Dialog Management:
                      </span>
                      Develop a dialog management system that handles
                      conversations with users, maintains context,
                    </span>
                  </div>
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        {" "}
                        Knowledge Base Integration:
                      </span>
                      Integrate the chatbot with a knowledge base or database to
                      provide accurate and relevant information to users.
                    </span>
                  </div>
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        Multilingual Support:
                      </span>
                      Depending on the target audience, the chatbot may need to
                      support multiple languages to cater to users from
                      different regions.
                    </span>
                  </div>
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        Personalization and User Profiling:
                      </span>
                      Implement features that allow the chatbot to personalize
                      interactions based on user preferences and past behavior.
                    </span>
                  </div>
                  <div className="d-flex align-items-center global__litem">
                    <i className="bi bi-check2-circle base fz-20"></i>
                    <span className="fz-16 fw-400 inter pra">
                      <span className="fz-16 fw-500 inter pra">
                        Multilingual Support:
                      </span>
                      Depending on the target audience, the chatbot may need to
                      support multiple languages to cater to users from
                      different regions.
                    </span>
                  </div>
                </div>
                <div className="attachment__file mb-30">
                  <h6 className="title mb-24 fz-16">Attachments File :</h6>
                  <div className="row g-4">
                    <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-6 col-sm-9">
                      <Link
                        href="#"
                        className="attachment__filitem round16 d-flex align-items-center">
                        <i className="bi bi-file-earmark-pdf base pdf__icon"></i>
                        <span className="fz-20 fw-500 inter title">
                          file-sample_150.pdf
                          <span className="fz-14 fw-400 inter d-block">
                            file size 139 KB
                          </span>
                        </span>
                        <i className="bi bi-download fz-20 pra downloads bgwhite round50 d-flex align-items-center justify-content-center"></i>
                      </Link>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-9 col-md-6 col-sm-10">
                      <Link
                        href="#"
                        className="attachment__filitem round16 d-flex align-items-center">
                        <i className="bi bi-file-earmark-pdf base pdf__icon"></i>
                        <span className="fz-20 fw-500 inter title">
                          file-sample_150.pdf
                          <span className="fz-14 fw-400 inter d-block">
                            file size 139 KB
                          </span>
                        </span>
                        <i className="bi bi-download fz-20 pra downloads bgwhite round50 d-flex align-items-center justify-content-center"></i>
                      </Link>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-10 col-md-6 col-sm-11">
                      <Link
                        href="#"
                        className="attachment__filitem round16 d-flex align-items-center">
                        <i className="bi bi-file-earmark-pdf base pdf__icon"></i>
                        <span className="fz-20 fw-500 inter title">
                          file-sample_150.pdf
                          <span className="fz-14 fw-400 inter d-block">
                            file size 139 KB
                          </span>
                        </span>
                        <i className="bi bi-download fz-20 pra downloads bgwhite round50 d-flex align-items-center justify-content-center"></i>
                      </Link>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-11 col-md-6 col-sm-12">
                      <Link
                        href="#"
                        className="attachment__filitem round16 d-flex align-items-center">
                        <i className="bi bi-file-earmark-pdf base pdf__icon"></i>
                        <span className="fz-20 fw-500 inter title">
                          file-sample_150.pdf
                          <span className="fz-14 fw-400 inter d-block">
                            file size 139 KB
                          </span>
                        </span>
                        <i className="bi bi-download fz-20 pra downloads bgwhite round50 d-flex align-items-center justify-content-center"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="fz-16 fw-400 inter pra pb-30 bborderdash">
                  These requirements provide a foundation for an AI-powered
                  chatbot development project. Depending on the specific use
                  case and project scope, additional requirements may be
                  identified and added.
                </p>
                <div className="attachment__footertag mt-30 gap-3 flex-wrap d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="base fz-18 fw-500 inter">Tag -</span>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Machine Learning
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      AI Chatbot
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Virtual Assistan
                    </Link>
                  </div>
                  <div className="share d-flex align-items-center gap-2">
                    <span className="fz-18 fw-500 inter base">Share -</span>
                    <ul className="social d-flex align-items-center">
                      <li>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-pinterest"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-dribbble"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="basic__skilled__wrapper">
              <div className="basic__boxskill mb-24 round16 bgwhite">
                <span className="fz-18 d-block fw-500 title inter mb-10">
                  Budget
                </span>
                <div className="form__price pb-24 d-flex align-items-center bborderdash">
                  <i className="bi bi-tags tags__icon"></i>
                  <span className="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                    From
                    <span className="fssizing d-flex align-items-start gap-1">
                      $399
                      <i className="bi bi-info-circle infocircle"></i>
                    </span>
                  </span>
                </div>
                <div className="d-flex mb-16 mt-24 align-items-center justify-content-between">
                  <span className="fz-18 fw-500 inter pra">Per Pages</span>
                  <h3 className="base fz-18 fw-500">$29</h3>
                </div>
                <div className="plus__minus d-flex mb-16 align-items-center gap-3">
                  <span className="fz-14 fw-400 inter pra">Delivery Time</span>
                  <div className="d-flex align-items-center gap-2">
                    <i
                      onClick={handleDeliveryDecrease}
                      className="bi bi-dash plusbg text-white d-flex align-items-center justify-content-center round100 cursor-pointer"></i>
                    <span className="fz-18 fw-400 inter pra">
                      {delivryTime} Day
                    </span>
                    <i
                      onClick={() => setDeliveryTime(delivryTime + 1)}
                      className="bi bi-plus plusbg text-white d-flex align-items-center justify-content-center round100 cursor-pointer"></i>
                  </div>
                </div>
                <div className="bank__check__wrap mb-16">
                  {features.map(({ id, checked, label }) => (
                    <Checkbox
                      key={id}
                      id={id}
                      title={label}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="plus__minus d-flex align-items-center gap-3">
                  <span className="fz-14 fw-400 inter pra">Revisions Time</span>
                  <div className="d-flex align-items-center gap-2">
                    <i
                      onClick={handleRivisionDecrease}
                      className="bi bi-dash plusbg text-white d-flex align-items-center justify-content-center round100 cursor-pointer"></i>
                    <span className="fz-18 fw-400 inter pra">
                      {rivisionTime} Day
                    </span>
                    <i
                      onClick={() => setRivisionTime(rivisionTime + 1)}
                      className="bi bi-plus plusbg text-white d-flex align-items-center justify-content-center round100 cursor-pointer"></i>
                  </div>
                </div>
                <Link
                  href="#"
                  className="cmn--btn mt-30 d-flex justify-content-center d-block">
                  <span>Send Proposal</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
              <div className="darrell__profile round16 bgwhite">
                <div className="profile__check ralt">
                  <Image
                    height={118}
                    width={118}
                    src="/img/testimonial/biford-profile.jpg"
                    alt="profile"
                  />
                  <i className="bi bi-check"></i>
                </div>
                <div className="darrell__content mt-40 text-center">
                  <h4 className="title mb-16">Binford Ltd.</h4>
                  <span className="fz-16 fw-400 inter title">
                    Member since December 31, 2020
                  </span>
                  <ul className="social justify-content-center pt-24 mb-40 pb-40 bborderdash d-flex align-items-center">
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
                  <div className="binford__loca mb-40">
                    <div className="d-flex mb-8 align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        Location <span className="base">Verified</span>
                      </span>
                    </div>
                    <div className="d-flex mb-8 align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        26 Projects completed
                      </span>
                    </div>
                    <div className="d-flex mb-8 align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        Payment Method <span className="base">Verified</span>
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        Email <span className="base">Verified</span>
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="cmn--btn outline__btn d-block">
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
      </div>
    </section>
  );
};

export default ProjectDetails;
