import { serviceData } from "../../data/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <section className="service__section pt-120 pb-120  bg__tblr">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="section__title text-center mb-60">
              <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                Services
              </h4>
              <h2 className="title mb-24  " data--duration="1.2s">
                Popular Trending Services
              </h2>
              <p className="ptext2 fz-16 fw-400 inter  " data--duration="1.4s">
                Discover the hottest and most sought-after services that are
                currently trending on our AI Freelancer Marketplace. Stay ahead
                of the curve
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          {serviceData.map(
            ({
              activeOrder,
              id,
              level,
              rating,
              src,
              tag,
              title,
              totalRatings,
              user,
            }) => (
              <div
                key={id}
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="service__item shadow2 round16 p-8 bgwhite">
                  <Link href="/service-grid" className="thumb round16 w-100">
                    <Image
                      src={src}
                      width={290}
                      height={217}
                      className="round16 w-100"
                      alt="service"
                    />
                  </Link>
                  <div className="service__content">
                    <div className="d-flex mb-16 align-items-center justify-content-between">
                      <Link
                        href="#"
                        className=" learning round16 fz-16 fw-600 inter base">
                        {tag}
                      </Link>
                      <span className="success2 d-block fz-16 fw-600 inter">
                        {level}
                      </span>
                    </div>
                    <h5 className="mb-16">
                      <Link href="/service-grid" className="title">
                        {title}
                      </Link>
                    </h5>
                    <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                      <div className="d-flex gap-2 fz-16 fw-600 inter title">
                        <i className="bi bi-star-fill ratting"></i>
                        {rating.toFixed(1)}
                        <span className="fz-16 fw-400 inter pra">(34)</span>
                      </div>
                      <span className="fz-16 fw-400 inter pra">
                        Active Order :{" "}
                        <span className="fz-18 fw-600 base inter">
                          {activeOrder}
                        </span>
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          width={32}
                          height={33}
                          src={user.src}
                          className="small__thumb"
                          alt="user"
                        />
                        <span className="fz-16 fw-500 pra inter">
                          {user.name}
                        </span>
                      </div>
                      <span className="fz-16 fw-400 inter pra">
                        Starting :{" "}
                        <span className="fz-18 fw-600 base inter">$300</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-center mt-40">
          <Link href="/service-details" className="cmn--btn outline__btn">
            <span>See All</span>
            <span className="ps-1">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
