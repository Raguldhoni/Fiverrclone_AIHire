import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
  return (
    <section className="task__hiresection ralt pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="section__title text-center ralt mb-60">
              <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                Begin Your Journey
              </h4>
              <h2 className="title   mb-24" data--duration="1.2s">
                Get Started with AI-Hire
              </h2>
              <p className="pra fz-16 inter fw-400">
                Are you ready to embark on an exciting journey into the world of
                AI freelancing? Getting started with AIHire is simple and
                straightforward
              </p>
            </div>
          </div>
        </div>
        <div className="row ralt g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  ">
            <div className="task__item round16 bgwhite d-flex align-items-center">
              <div className="thumb">
                <Image
                  width={200}
                  height={200}
                  src="/img/task/tast1.jpg"
                  alt="img"
                />
              </div>
              <div className="content">
                <h3 className="inter title mb-24">I need a task done</h3>
                <p className="fz-16 fw-400 inter pra mb-40">
                  Have a specific AI task that needs to be completed? Look no
                  further!
                </p>
                <Link
                  href="/freelancer-details"
                  className="cmn--btn outline__btn">
                  <span>View services</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  ">
            <div className="task__item round16 bgwhite d-flex align-items-center">
              <div className="thumb">
                <Image
                  width={200}
                  height={200}
                  src="/img/task/tast2.jpg"
                  alt="img"
                />
              </div>
              <div className="content">
                <h3 className="inter title mb-24">I am a freelancer</h3>
                <p className="fz-16 fw-400 inter pra mb-40">
                  Are you an AI professional looking for exciting freelance
                  opportunities?
                </p>
                <Link href="/freelancer" className="cmn--btn outline__btn">
                  <span>List a Service</span>
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

export default GetStarted;
