import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowWork = () => {
  return (
    <section className="timely__wortwo bg__all pb-120 pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-60">
              <h4 className="sub ralt base mb-16  " data--duration="0.5s">
                How It’s Work
              </h4>
              <h2 className="title mb-24  " data--duration="0.7s">
                Get Expert in Less Time and Our Work Process
              </h2>
              <p className="ptext2 fz-16 fw-400 inter  " data--duration="0.9s">
                Our working process is designed to simplify complex tasks,
                optimize operations, and maximize productivity. From initial
                planning and ideation to execution
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
            <div className="timelytwo__work text-center">
              <div className="iconbox d-flex align-items-center justify-content-center">
                <div className="iinner d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/job60.png"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="content">
                <h4 className="mb-10 title">
                  <Link href="/featuredjob" className="title">
                    Post a Job
                  </Link>
                </h4>
                <p className="fz-14 fw-400 title inter">
                  Create your free job posting and start receiving Quotes within
                  hours
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
            <div className="timelytwo__work text-center">
              <div className="iconbox d-flex align-items-center justify-content-center">
                <div className="iinner d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/frelancer60.png"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="content">
                <h4 className="mb-10 title">
                  <Link href="/featuredjob" className="title">
                    Hire Freelancers
                  </Link>
                </h4>
                <p className="fz-14 fw-400 title inter">
                  Create your free job posting and start receiving Quotes within
                  hours
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
            <div className="timelytwo__work text-center">
              <div className="iconbox d-flex align-items-center justify-content-center">
                <div className="iinner d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/working60.png"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="content">
                <h4 className="mb-10 title">
                  <Link href="/featuredjob" className="title">
                    Get Work Done
                  </Link>
                </h4>
                <p className="fz-14 fw-400 title inter">
                  Create your free job posting and start receiving Quotes within
                  hours
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
            <div className="timelytwo__work text-center">
              <div className="iconbox d-flex align-items-center justify-content-center">
                <div className="iinner d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/payment60.png"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="content">
                <h4 className="mb-10 title">
                  <Link href="/featuredjob" className="title">
                    Make Secure Payments
                  </Link>
                </h4>
                <p className="fz-14 fw-400 title inter">
                  Create your free job posting and start receiving Quotes within
                  hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
