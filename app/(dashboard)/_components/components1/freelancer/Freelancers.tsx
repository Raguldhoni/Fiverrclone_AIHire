import {
  categoryTypes,
  deliveryTimes,
  locations,
  ratings,
  responseTime,
} from "../../data/filters";
import Checkbox from "../shared/Checkbox";
import Pagination from "../shared/Pagination";
import CustomRangeSlider from "../shared/CustomRangeSlider";
import { freelancers } from "../../data/freelancers";
import Image from "next/image";
import Link from "next/link";

const Freelancers = () => {
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
                  <h5 className="title mb-16 pt-20">Types of Categories</h5>
                  {categoryTypes.map(({ id, title, number, checked }) => (
                    <Checkbox
                      title={title}
                      number={number}
                      key={id}
                      id={id}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="pt-24 tborderdash bborderdash pb-24">
                  <h5 className="title mb-16">Pricing Scale</h5>
                  <CustomRangeSlider />
                </div>
                <div className="bank__check__wrap pb-24 tborderdash">
                  <h5 className="title mb-16 pt-24">Deliver Time</h5>
                  {deliveryTimes.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={label}
                      number={number}
                      id={id}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="bank__check__wrap pb-24 tborderdash">
                  <h5 className="title mb-16 pt-24">Response Time</h5>
                  {responseTime.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={label}
                      id={id}
                      number={number}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="bank__check__wrap bborderdash pb-24 mb-24 tborderdash">
                  <h5 className="title mb-16 pt-24">Star Category</h5>
                  {ratings.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={
                        <>
                          <i className="bi bi-star-fill ratting"></i>
                          {label}
                        </>
                      }
                      number={number}
                      id={id}
                      checked={checked}
                    />
                  ))}
                </div>
                <div className="bank__check__wrap mb-24 pb-24 bborderdash">
                  <h5 className="title mb-16">Location</h5>

                  {locations.map(({ id, label, number, checked }) => (
                    <Checkbox
                      key={id}
                      title={label}
                      id={id}
                      number={number}
                      checked={checked}
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

          <div className="col-xl-8 col-lg-8">
            <div className="row g-4">
              {freelancers.map(({ id, level, price, src, title }) => (
                <div
                  key={id}
                  className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="frelancer__item shadow2 round16 bgwhite">
                    <div className="d-flex mb-24 align-items-center justify-content-between">
                      <div className="d-flex gap-2 fz-16 fw-600 inter title">
                        <i className="bi bi-star-fill ratting"></i>
                        5.0
                        <span className="fz-16 fw-400 inter pra">(34)</span>
                      </div>
                      <span className="success2 d-block fz-16 fw-600 inter">
                        {level}
                      </span>
                    </div>
                    <Link href="/freelancer-details" className="thumbs m-auto">
                      <Image width={140} height={140} src={src} alt="service" />
                    </Link>
                    <h5 className="mt-24 text-center mb-20">
                      <Link href="/freelancer-details" className="title">
                        {title}
                      </Link>
                    </h5>
                    <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
                      <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                        <i className="bi bi-stopwatch"></i>
                        Full-Time
                      </div>
                      <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                        <i className="bi bi-bar-chart"></i>
                        6-9 Years
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-20 justify-content-between">
                      <span className="fz-18 fw-500 inter base">{price}</span>
                      <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                        <i className="bi bi-chat-right-text title fz-16"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelancers;
