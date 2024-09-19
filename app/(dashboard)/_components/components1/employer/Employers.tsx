import React from "react";
import Pagination from "../shared/Pagination";
import Image from "next/image";
import Checkbox from "../shared/Checkbox";
import {
  categoryTypes,
  jobTypes,
  languages,
  locations,
  skills,
} from "../../data/filters";
import { employees } from "../../data/employees";
import Link from "next/link";

const Employers = () => {
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
            <div className="row g-4">
              {employees.map(
                ({
                  id,
                  country,
                  level,
                  memberSince,
                  rating,
                  src,
                  title,
                  year,
                }) => (
                  <div
                    key={id}
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="darrell__profile round16 bgwhite">
                      <div className="profile__check ralt">
                        <Image
                          width={120}
                          height={120}
                          src={src}
                          alt="profile"
                        />
                        <i className="bi bi-check"></i>
                      </div>
                      <div className="darrell__content mt-40 text-center">
                        <h4 className="title mb-16">{title}</h4>
                        <span className="fz-16 fw-400 inter title">
                          {memberSince}
                        </span>
                        <ul className="d-flex mt-24 justify-content-center employer__listbase flex-wrap tranding__listbase align-items-center">
                          <li>
                            <span className="fz-16 fw-400 inter pra">
                              <i className="bi bi-geo-alt base"></i>
                              {country}
                            </span>
                          </li>
                          <li className="d-flex gap-2 fz-16 fw-500 inter title">
                            <i className="bi bi-star-fill ratting"></i>
                            {rating}
                          </li>
                          <li>
                            <span className="fz-16 fw-400 inter pra">
                              <i className="bi bi-bar-chart pra"></i> {year}
                            </span>
                          </li>
                          <li>
                            <span className="fz-16 fw-600 inter success">
                              {level}
                            </span>
                          </li>
                        </ul>
                        <ul className="social justify-content-center mt-30 mb-40 pt-24 tborderdash d-flex align-items-center">
                          <li>
                            <Link href="#">
                              <i className="bi bi-facebook base"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="bi bi-instagram base"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="bi bi-twitter base"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="bi bi-pinterest base"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="bi bi-dribbble base"></i>
                            </Link>
                          </li>
                        </ul>
                        <Link
                          href="/employer-details"
                          className="cmn--btn outline__btn d-block">
                          <span>View Profile</span>
                          <span>
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employers;
