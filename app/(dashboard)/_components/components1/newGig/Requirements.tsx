"use client";
import Image from "next/image";
import defining4 from "../../../../../public/img/details/defining4.jpg";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Requirements = () => {
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
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Description & FAQ
                </Link>
                <Link
                  href="/overview/requirements"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
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

      <section className="requirements__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">Requirements</h3>
                <span className="fz-20 fw-500 title inter mb-16 d-block">
                  Get all the information you need from buyers to get started
                </span>
                <p className="fz-16 pra fw-400 inter mb-40">
                  Add questions to help buyers provide you with exactly what you
                  need to start working on their order.
                </p>
                <span className="fz-12 ralt aiquestion__text text-center d-block fw-400 mb-40 inter pra">
                  <span className="aiquestion">AIHIRE QUESTIONS</span>
                </span>
                <div className="multi__choicebox mb-24 round16 border">
                  <Link
                    href="#"
                    className="d-flex mb-16 fz-16 inter fw-500 pra align-items-center gap-2">
                    <i className="bi bi-ui-radios-grid"></i>
                    Multiple choice
                  </Link>
                  <span className="fz-20 mb-16 d-block fw-400 inter title">
                    01. Is this order for personal use, business use, or a side
                    project?
                  </span>
                  <p className="fz-16 inter fw-400 pra">
                    <Link href="#">· For business /</Link>
                    <Link href="#">personal /</Link>{" "}
                    <Link href="#">side project</Link>
                  </p>
                </div>
                <div className="multi__choicebox mb-24 round16 border">
                  <Link
                    href="#"
                    className="d-flex mb-16 fz-16 inter fw-500 pra align-items-center gap-2">
                    <i className="bi bi-ui-radios-grid"></i>
                    Multiple choice
                  </Link>
                  <span className="fz-20 mb-16 d-block fw-500 inter title">
                    02. Which industry do you work in?
                  </span>
                  <p className="fz-16 inter fw-400 pra">
                    · 3D design, academic education, academic writing,
                    accounting, etc.
                  </p>
                </div>
                <div className="multi__choicebox round16 border">
                  <Link
                    href="#"
                    className="d-flex mb-16 fz-16 inter fw-500 pra align-items-center gap-2">
                    <i className="bi bi-ui-radios-grid"></i>
                    Multiple choice
                  </Link>
                  <span className="fz-20 mb-16 d-block fw-500 inter title">
                    03. Is this order part of a bigger project you&apos;re
                    working on?
                  </span>
                  <p className="fz-16 inter fw-400 pra">
                    · Building a mobile app, creating an animation, developing a
                    game, etc.
                  </p>
                </div>
                <span className="fz-12 ralt aiquestion__text text-center d-block fw-400 mt-40 mb-40 inter pra">
                  <span className="aiquestion">YOUR QUESTIONS</span>
                </span>
                <span className="fz-16 inter pra fw-700">
                  · Here’s where you can request any details needed to complete
                  the order.
                </span>
                <span className="fz-16 d-block inter pra fw-700">
                  · There’s no need to repeat any of the general questions asked
                  above by AIHIRE.
                </span>
                <Link
                  href="/faqs"
                  className="cmn--btn mt-40 align-items-center gap-2 outline__btn">
                  <span>
                    <i className="bi bi-plus-circle"></i>
                  </span>
                  <span>Add New Question</span>
                </Link>
              </div>
              <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                <Link href="/overview/gallery" className="cmn--btn">
                  <span>Save & Continue</span>
                </Link>
                <Link
                  href="/overview/description"
                  className="cmn--btn outline__btn">
                  <span>Back</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box mb-24 round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Provide Your Requirements
                  </h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image src={defining4} alt="img" />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Indicate what you need before you can start working.
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Here’s where you can request any details needed to complete
                    the order.
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

export default Requirements;
