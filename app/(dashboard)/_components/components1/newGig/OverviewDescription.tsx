"use client";
import milestone from "../../../../../public/img/details/milestone.png";
import define3 from "../../../../../public/img/details/defining3.jpg";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import SelectOption from "../shared/SelectOption";
import Editor from "../shared/editor/editor";

const OverviewDescription = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="banner__breadcumn ralt">
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="8QEK7B9GUhM"
          onClose={() => setOpen(false)}
        />
        <div className="overview__showcase pt-120 ralt">
          <div className="container">
            <div className="overview__showcasewrap round16 border bgwhite">
              <div className="overview__inntercase ralt d-flex align-items-center">
                <Link
                  href="/overview"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Overview
                </Link>
                <Link
                  href="/overview/pricing"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Pricing
                </Link>
                <Link
                  href="/overview/description"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
                  Description & FAQ
                </Link>
                <Link
                  href="/overview/requirements"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Requirements
                </Link>
                <Link
                  href="/overview/gallery"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Gallery
                </Link>
                <Link
                  href="/overview/publish"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Publish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="description__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">Description</h3>
                <span className="fz-20 fw-500 title inter mb-16 d-block">
                  Briefly Describe Your Gig
                </span>
                <div className="w-100">
                  <Editor />
                </div>
                <SelectOption
                  options={[
                    { value: "12", label: "12px" },
                    { value: "14", label: "14px" },
                    { value: "16", label: "16px" },
                  ]}
                  placeholder="Text Size"
                  fullWidth={true}
                  classes="w-100"
                />
                <div className="row align-items-center g-4 mt-60">
                  <div className="col-lg-8">
                    <div className="milestone__content">
                      <span className="fz-20 d-block fw500 inter title mb-16">
                        Milestone workflow
                      </span>
                      <p className="fz-16 pra mb-16">
                        Attract buyers by turning your Gig into a series of
                        milestones—they&apos;ll know exactly what to expect and
                        you’ll get paid when each milestone is completed.
                      </p>
                      <p className="fz-16 pra">
                        Make sure your Gig is in an eligible category and your
                        Basic package is priced at $100 or more.{" "}
                        <Link href="#" className="base">
                          Learn about Milestones
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="milestone__thumb">
                      <Image src={milestone} alt="mile" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">
                  Frequently Asked Questions
                </h3>
                <span className="fz-16 fw-400 inter d-block mb-24 title">
                  Add Questions & Answers for Your Buyers.
                </span>
                <div className="extra__pricebox border round16">
                  <input
                    type="text"
                    className="addquestion mb-16"
                    placeholder="Add Question"
                  />

                  <Editor />

                  <div className="btn__grp flex-wrap tborderdash pt-24 gap-4 d-flex align-items-center">
                    <Link href="/faqs" className="cmn--btn">
                      <span>Add FAQs</span>
                    </Link>
                    <Link href="#" className="cmn--btn outline__btn">
                      <span>Cancel</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                <Link href="/overview/requirements" className="cmn--btn">
                  <span>Save & Continue</span>
                </Link>
                <Link
                  href="/overview/pricing"
                  className="cmn--btn outline__btn">
                  <span>Back</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box mb-24 round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Write Your Description & FAQ
                  </h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image src={define3} alt="img" />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Include the most important information for your Gig.
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Add frequently asked questions and answers to the most
                    commonly asked questions.
                  </span>
                </div>
                <div className="defining__box round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    What are FAQs?
                  </h4>
                  <div className="des__added">
                    <p className="fz-14 bborderdash pb-16 mb-16 fw-400 inter title">
                      Here you can add answers to the most commonly asked
                      questions. Your FAQs will be displayed in your Gig page.
                    </p>
                    <span className="fz-20 d-block fw-500 inter title mb-10">
                      For Example :
                    </span>
                    <p className="fz-14 pra inter mb-2 fw-400">
                      <span className="fw-600 title inter">Question :</span> Can
                      you provide a British accent?
                    </p>
                    <p className="fz-14 pra inter fw-400">
                      <span className="fw-600 title inter">Answer :</span> Of
                      course, I lived in England for 3 years! That won&apos;t be
                      a problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewDescription;
