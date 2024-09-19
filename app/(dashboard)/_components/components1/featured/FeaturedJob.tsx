import React from "react";
import Pagination from "../shared/Pagination";
import Image from "next/image";
import {
  categoryTypes,
  jobTypes,
  languages,
  locations,
  skills,
} from "../../data/filters";
import Checkbox from "../shared/Checkbox";
import Link from "next/link";

const FeaturedJob = () => {
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
                  <h5 className="title mb-16 pt-20">Types of Jobs</h5>
                  {jobTypes.map(({ id, number, checked, label }) => (
                    <Checkbox
                      key={id}
                      number={number}
                      checked={checked}
                      id={id}
                      title={label}
                    />
                  ))}
                  <div className="bank__check__wrap tborderdash pb-24">
                    <h5 className="title mb-16 pt-20">Types of Categories</h5>
                    {categoryTypes.map(({ id, number, title, checked }) => (
                      <Checkbox
                        key={id}
                        number={number}
                        checked={checked}
                        id={id}
                        title={title}
                      />
                    ))}
                  </div>
                  <div className="bank__check__wrap pb-24 tborderdash">
                    <h5 className="title mb-16 pt-24">Budget</h5>
                    <div className="budget__countingbox d-flex align-items-center justify-content-between">
                      <input type="text" placeholder="Min" />
                      <span className="fz-14 fw-500 inter pra">To</span>
                      <input type="text" placeholder="Max" />
                    </div>
                  </div>
                  <div className="bank__check__wrap pb-24 tborderdash">
                    <h5 className="title mb-16 pt-24">Skills</h5>
                    <div className="skill">
                      {skills.map(({ id, label, checked }) => (
                        <Checkbox
                          key={id}
                          checked={checked}
                          id={id}
                          title={label}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bank__check__wrap pb-24 tborderdash">
                    <h5 className="title mb-16 pt-24">Languages</h5>
                    <div className="skill">
                      {languages.map(({ id, label, checked }) => (
                        <Checkbox
                          key={id}
                          checked={checked}
                          id={id}
                          title={label}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bank__check__wrap tborderdash bborderdash mb-24 pb-24">
                    <h5 className="title mb-16 pt-20">Location</h5>
                    {locations.map(({ id, number, label, checked }) => (
                      <Checkbox
                        key={id}
                        number={number}
                        checked={checked}
                        id={id}
                        title={label}
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
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="chatbot__developers">
              <div className="chatbot__items round16 mb-24 shadow2 bgwhite">
                <div className="d-flex mb-24 flex-wrap align-items-center justify-content-between">
                  <h4 className="title">
                    Python Developer for a Slack App/Plugin
                  </h4>
                  <span className="fz-20 base d-flex align-items-center gap-1 fw-400 inter">
                    $163 - $1489
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Python
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Software Architecture
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    API Integration
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    OpenAI
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  I am looking for a Python Developer to work on a Slack App
                  that will mainly focus on task and commitment management. I
                  already have an existing codebase that I want to integrate
                  with the app. The ideal candidate will have experience in
                  Python development and be able to work within a 1-2 week
                  timeframe. EVIDENCE of familiarity with Slack&apos;s API and
                  OpenAI API is REQUIRED.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">27 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Senior</span>
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
                      Abstergo Ltd. <span className="base fz-14">Verified</span>
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/featuredjob-details"
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
                  <h4 className="title">Chat GPT API developer</h4>
                  <span className="fz-20 base d-flex align-items-center gap-1 fw-400 inter">
                    $163 - $1489
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Python
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Software Architecture
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    API Integration
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    OpenAI
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  I am looking for a Python Developer to work on a Slack App
                  that will mainly focus on task and commitment management. I
                  already have an existing codebase that I want to integrate
                  with the app. The ideal candidate will have experience in
                  Python development and be able to work within a 1-2 week
                  timeframe. EVIDENCE of familiarity with Slack&apos;s API and
                  OpenAI API is REQUIRED.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">27 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Senior</span>
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
                      Abstergo Ltd. <span className="base fz-14">Verified</span>
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/featuredjob-details"
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
                  <h4 className="title">Airtable Automation</h4>
                  <span className="fz-20 base d-flex align-items-center gap-1 fw-400 inter">
                    $163 - $1489
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Python
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Software Architecture
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    API Integration
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    OpenAI
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  I am looking for a Python Developer to work on a Slack App
                  that will mainly focus on task and commitment management. I
                  already have an existing codebase that I want to integrate
                  with the app. The ideal candidate will have experience in
                  Python development and be able to work within a 1-2 week
                  timeframe. EVIDENCE of familiarity with Slack&apos;s API and
                  OpenAI API is REQUIRED.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">27 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Senior</span>
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
                      Abstergo Ltd. <span className="base fz-14">Verified</span>
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/featuredjob-details"
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
                    Create an AI Chatbot to handle Facebook
                  </h4>
                  <span className="fz-20 base d-flex align-items-center gap-1 fw-400 inter">
                    $163 - $1489
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Python
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Software Architecture
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    API Integration
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    OpenAI
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  I am looking for a Python Developer to work on a Slack App
                  that will mainly focus on task and commitment management. I
                  already have an existing codebase that I want to integrate
                  with the app. The ideal candidate will have experience in
                  Python development and be able to work within a 1-2 week
                  timeframe. EVIDENCE of familiarity with Slack&apos;s API and
                  OpenAI API is REQUIRED.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">27 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Senior</span>
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
                      Abstergo Ltd. <span className="base fz-14">Verified</span>
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/featuredjob-details"
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
                  <h4 className="title">
                    Bot with CHAT GPT Documentation by API
                  </h4>
                  <span className="fz-20 base d-flex align-items-center gap-1 fw-400 inter">
                    $163 - $1489
                  </span>
                </div>
                <div className="chatbot__tag mb-24 d-flex align-items-center">
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Python
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    Software Architecture
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    API Integration
                  </Link>
                  <Link
                    href="/featuredjob-details"
                    className="learning round16 fz-16 fw-500 inter base">
                    OpenAI
                  </Link>
                </div>
                <p className="fz-16 fw-400 mb-24 pra inter">
                  I am looking for a Python Developer to work on a Slack App
                  that will mainly focus on task and commitment management. I
                  already have an existing codebase that I want to integrate
                  with the app. The ideal candidate will have experience in
                  Python development and be able to work within a 1-2 week
                  timeframe. EVIDENCE of familiarity with Slack&apos;s API and
                  OpenAI API is REQUIRED.
                </p>
                <div className="lavel__tag bborderdash pb-24 d-flex align-items-center">
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Expire:{" "}
                    <span className="title fw-600 inter">27 days left</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Location: <span className="title fw-600 inter">Remote</span>
                  </span>
                  <span className="lavel__item ralt fz-16 fw-400 inter pra">
                    Level: <span className="title fw-600 inter">Senior</span>
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
                      Abstergo Ltd. <span className="base fz-14">Verified</span>
                    </span>
                  </div>
                  <div className="abstr__heart d-flex align-items-center">
                    <Link
                      href="#"
                      className="heart__icon d-flex align-items-center justify-content-center">
                      <i className="bi bi-heart base"></i>
                    </Link>
                    <Link
                      href="/featuredjob-details"
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

export default FeaturedJob;
