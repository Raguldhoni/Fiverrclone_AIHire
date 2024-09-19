import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="choose__section bgchoose__all ralt pb-120 pt-120">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="choose__content">
              <div className="section__title mb-30">
                <h4 className="sub ralt base2 mb-16  " data--duration="1.1s">
                  Why Choose Us
                </h4>
                <h2 className="text-white mb-24  " data--duration="1.2s">
                  Harnessing the Potential of Artificial Intelligence
                </h2>
                <p
                  className="text-white fz-16 fw-400 inter  "
                  data--duration="1.4s">
                  Our platform connects you with talented AI freelancers from
                  around the world who can help you with your projects and
                  tasks, no matter how big or small.
                </p>
              </div>
              <ul className="choose__checklist mb-16 d-flex flex-wrap">
                <li
                  className="d-flex align-items-center gap-2 mb-16  "
                  data--duration="1.7s">
                  <i className="bi bi-check2-circle base2 fz-24"></i>
                  <span className="fz-20 fw-500 inter">
                    Get High Quality Work
                  </span>
                </li>
                <li
                  className="d-flex align-items-center gap-2 mb-16  "
                  data--duration="1.7s">
                  <i className="bi bi-check2-circle base2 fz-24"></i>
                  <span className="fz-20 fw-500 inter">
                    Stick to your budget service
                  </span>
                </li>
                <li
                  className="d-flex align-items-center gap-2 mb-16  "
                  data--duration="1.7s">
                  <i className="bi bi-check2-circle base2 fz-24"></i>
                  <span className="fz-20 fw-500 inter">
                    Pay when you&apos;re happy
                  </span>
                </li>
                <li
                  className="d-flex align-items-center gap-2 mb-16  "
                  data--duration="1.7s">
                  <i className="bi bi-check2-circle base2 fz-24"></i>
                  <span className="fz-20 fw-500 inter">
                    Pay when you&apos;re happy
                  </span>
                </li>
              </ul>
              <Link href="/featuredjob" className="cmn--btn2">
                <span>Read More</span>
                <span className="ps-1">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="choose__thumbwrapper d-flex ralt">
              <div className="thumb__item pe-4  ">
                <Image
                  width={306}
                  height={246}
                  src="/img/choose/chooseai1.jpg"
                  className="round16 mb-24 item__img"
                  alt="img"
                />
                <Image
                  width={306}
                  height={246}
                  src="/img/choose/chooseai2.jpg"
                  className="round16 item__img"
                  alt="img"
                />
              </div>
              <div className="thumb__item thumb__space60  ">
                <Image
                  width={306}
                  height={246}
                  src="/img/choose/chooseai3.jpg"
                  className="round16 mb-24 item__img"
                  alt="img"
                />
                <Image
                  width={306}
                  height={246}
                  src="/img/choose/chooseai4.jpg"
                  className="round16 item__img"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Element--> */}
      <Image
        width={55}
        height={219}
        src="/img/choose/choose-element.png"
        className="choose__doubble"
        alt="element"
      />
      <Image
        src="/img/choose/choose-element4.png"
        className="choose__bottom"
        alt="element"
        width={99}
        height={302}
      />
      {/* <!--Element--> */}
    </section>
  );
};

export default WhyChoose;
