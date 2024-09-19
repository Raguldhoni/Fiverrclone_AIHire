"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const OverviewGallery = () => {
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
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Requirements
                </Link>
                <Link
                  href="/overview/gallery"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
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
      <section className="overview__gallery__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">Gallery</h3>
                <span className="fz-20 fw-500 title inter mb-16 d-block">
                  Showcase Your Services In A Gig Gallery
                </span>
                <p className="fz-16 pra fw-400 inter mb-40">
                  Encourage buyers to choose your Gig by featuring a variety of
                  your work.
                </p>
                <span className="fz-12 ralt aiquestion__text text-center d-block fw-400 mb-40 inter pra">
                  <span className="aiquestion">Gig image guidelines</span>
                </span>
                <span className="fz-20 d-block inter fw-500 title mb-16">
                  Video (one only)
                </span>
                <p className="fz-16 fw-400 pra mb-24">
                  · Get noticed by the right buyers with visual examples of your
                  services.
                </p>
                <div className="row g-4 mb-40">
                  <div className="col-lg-4 col-md-6">
                    <Link
                      href="#"
                      className="image__upbox d-block text-center round16 border">
                      <Image
                        width={30}
                        height={30}
                        src="/img/details/imgs.png"
                        className="mb-3"
                        alt="img"
                      />
                      <span className="fz-14 d-block inter pra mb-2">
                        Drag & drop a Photo or
                      </span>
                      <span className="base fw-600 d-block fw-14">Browse</span>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <Link
                      href="#"
                      className="image__upbox d-block text-center round16 border">
                      <Image
                        width={30}
                        height={30}
                        src="/img/details/imgs.png"
                        className="mb-3"
                        alt="img"
                      />
                      <span className="fz-14 d-block inter pra mb-2">
                        Drag & drop a Photo or
                      </span>
                      <span className="base fw-600 d-block fw-14">Browse</span>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <Link
                      href="#"
                      className="image__upbox d-block text-center round16 border">
                      <Image
                        width={30}
                        height={30}
                        src="/img/details/imgs.png"
                        className="mb-3"
                        alt="img"
                      />
                      <span className="fz-14 d-block inter pra mb-2">
                        Drag & drop a Photo or
                      </span>
                      <span className="base fw-600 d-block fw-14">Browse</span>
                    </Link>
                  </div>
                </div>
                <span className="fz-20 inter d-block fw-500 title mb-16">
                  Images (up to 3)
                </span>
                <p className="fz-16 fw-400 pra">
                  · Capture buyers attention with a video that showcases your
                  service.
                </p>
                <p className="fz-16 fw-400 pra mb-24">
                  · Please choose a video shorter than 75 seconds and smaller
                  than 50MB
                </p>
                <Link
                  href="#"
                  className="image__upbox flim__videoup mb-40 d-block text-center round16 border">
                  <Image
                    width={32}
                    height={32}
                    src="/img/details/flim.png"
                    className="mb-3"
                    alt="img"
                  />
                  <span className="fz-14 d-block inter pra mb-2">
                    Drag & drop a Video or
                  </span>
                  <span className="base fw-600 d-block fw-14">Browse</span>
                </Link>
                <span className="fz-20 inter fw-500 title d-block mb-16">
                  Documents (up to 2)
                </span>
                <p className="fz-16 fw-400 pra mb-24">
                  · Show some of the best work you created in a document (PDFs
                  only).
                </p>
                <div className="row g-4 mb-40">
                  <div className="col-lg-4 col-md-6">
                    <Link
                      href="#"
                      className="image__upbox d-block text-center round16 border">
                      <Image
                        width={32}
                        height={32}
                        src="/img/details/pds.png"
                        className="mb-3"
                        alt="img"
                      />
                      <span className="fz-14 d-block inter pra mb-2">
                        Drag & drop a PDF or
                      </span>
                      <span className="base fw-600 d-block fw-14">Browse</span>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <Link
                      href="#"
                      className="image__upbox d-block text-center round16 border">
                      <Image
                        width={32}
                        height={32}
                        src="/img/details/pds.png"
                        className="mb-3"
                        alt="img"
                      />
                      <span className="fz-14 d-block inter pra mb-2">
                        Drag & drop a PDF or
                      </span>
                      <span className="base fw-600 d-block fw-14">Browse</span>
                    </Link>
                  </div>
                </div>
                <p className="fw-400 pra inter fz-16">
                  · To comply with AIHIRE’s terms of service, make sure to
                  upload only content you either own or you have the permission
                  or license to use.
                </p>
              </div>
              <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                <Link href="/overview/publish" className="cmn--btn">
                  <span>Save & Continue</span>
                </Link>
                <Link
                  href="/overview/gallery"
                  className="cmn--btn outline__btn">
                  <span>Back</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box mb-24 round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Showcase Your Talent
                  </h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image
                      width={366}
                      height={195}
                      src="/img/details/defining5.jpg"
                      alt="img"
                    />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="defining d-flex align-items-center ralt">
                    Add images, an introduction video, or PDF files that best
                    represent your service.
                  </span>
                </div>
                <div className="defining__box mb-24 round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Gig image guidelines
                  </h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image
                      width={366}
                      height={195}
                      src="/img/details/defining6.jpg"
                      alt="img"
                    />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="fz-18 d-block fw-600 inter title mb-10">
                    Best image size
                  </span>
                  <span className="defining mb-10 d-flex align-items-center ralt">
                    Recommended 1280 x 769 px.
                  </span>
                  <span className="defining mb-10 d-flex align-items-center ralt">
                    Minimum 712 x 430 px.
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Max size 50 Mb
                  </span>
                  <span className="fz-18 mt-24 d-block fw-600 inter title mb-10">
                    Best image size
                  </span>
                  <span className="fz-14 fw-400 inter title">
                    Find an expert to do it for you.{" "}
                    <Link href="#" className="base">
                      Click Here
                    </Link>
                  </span>
                </div>
                <div className="defining__box round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">Video</h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image
                      width={366}
                      height={195}
                      src="/img/details/defining7.jpg"
                      alt="img"
                    />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="fz-18 d-block fw-600 inter title mb-10">
                    Video Info
                  </span>
                  <span className="defining mb-10 d-flex align-items-center ralt">
                    Videos can increase user engagement by 40%.
                  </span>
                  <span className="defining mb-10 d-flex align-items-center ralt">
                    Ensure the production quality is representative of your
                    deliveries.
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Need help with your video? Check out our AIHIRE expert
                    audio/video talent{" "}
                    <Link href="#" className="base">
                      Here
                    </Link>
                  </span>
                  <span className="fz-18 mt-24 d-block fw-600 inter title mb-10">
                    Need help with your video?
                  </span>
                  <span className="fz-14 fw-400 inter title">
                    Check out our AIHIRE expert audio/video talent.{" "}
                    <Link href="#" className="base">
                      Click Here
                    </Link>
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

export default OverviewGallery;
