"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import SelectOption from "../shared/SelectOption";

const Overview = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="banner__breadcumn ralt">
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 1 }}
          isOpen={isOpen}
          videoId="8QEK7B9GUhM"
          onClose={() => setOpen(false)}
        />
        <div className="overview__showcase ralt pt-120">
          <div className="container">
            <div className="overview__showcasewrap round16 border bgwhite">
              <div className="overview__inntercase ralt d-flex align-items-center">
                <Link
                  href="/overview"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
                  Overview
                </Link>
                <Link
                  href="/overview/pricing"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Pricing
                </Link>
                <Link
                  href="/overview/description"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
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

      <section className="overview__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">Overview</h3>
                <span className="fz-20 inter d-block mb-10 fw-500 inter title">
                  Gig Title
                </span>
                <p className="fz-14 title fw-400 inter ">
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </p>
                <div className="title__add mt-24">
                  <input type="text" placeholder="Enter Title" />
                </div>
                <div className="select__cateboxes mt-30 mb-30">
                  <span className="fz-20 inter d-block mb-10 fw-500 inter title">
                    Gategory
                  </span>
                  <p className="fz-14 title fw-400 inter ">
                    Choose the category and sub-category most suitable for your
                    Gig.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <SelectOption
                        options={[
                          { value: "Category 1", label: "Category 1" },
                          { value: "Category 2", label: "Category 2" },
                        ]}
                        placeholder="Select Category"
                        fullWidth={true}
                        classes="w-100"
                      />
                    </div>
                    <div className="col-md-6">
                      <SelectOption
                        options={[
                          { value: "Category 1", label: "Category 1" },
                          { value: "Category 2", label: "Category 2" },
                        ]}
                        placeholder="Select Subcategory"
                        fullWidth={true}
                        classes="w-100"
                      />
                    </div>
                  </div>
                </div>
                <span className="fz-20 inter d-block mb-10 fw-500 inter title">
                  Search Tags
                </span>
                <p className="fz-14 title fw-400 inter ">
                  Enter search terms you feel your buyers will use when looking
                  for your service.
                </p>
                <div className="title__add mt-24">
                  <input type="text" placeholder="Enter 5 Tags maximum" />
                </div>
                <div className="over__grp d-flex align-items-center gap-3 flex-wrap mt-40">
                  <Link href="/overview/pricing" className="cmn--btn">
                    <span>Save & Continue</span>
                  </Link>
                  <Link href="/overview" className="cmn--btn outline__btn">
                    <span>Cancel</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box round16 mb-24 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Start Defining Your Gig
                  </h4>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Create a catchy title.
                  </span>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Choose a category that fits your Gig.
                  </span>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Add meta data to help buyers find more information regarding
                    your Gig.
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Add tags to help buyers find your Gig while searching.
                  </span>
                </div>
                <div className="defining__box round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Gig Creation Policies
                  </h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image
                      width={366}
                      height={190}
                      src="/img/details/creatio1.jpg"
                      alt="img"
                    />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Gig Creation Guidelines
                  </span>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Prohibited Content
                  </span>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Intellectual Property Rights
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Communication and Timelines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
