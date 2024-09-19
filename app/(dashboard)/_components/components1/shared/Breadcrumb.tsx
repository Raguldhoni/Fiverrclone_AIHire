import Image from "next/image";
import breadcrumbImg from "../../../../../public/img/bn/bread-service.png";
import React from "react";
import Link from "next/link";
type breadCrumbProps = {
  title: string;
  items: string[];
};

const Breadcrumb = ({ title, items }: breadCrumbProps) => {
  return (
    <section className="banner__breadcumn ralt">
      <div className="breadcumnd__wrapper">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
              <div className="breadcumnd__content">
                <span className="d4 mb-24">{title}</span>
                <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                  {items.map((item, i) => (
                    <React.Fragment key={item}>
                      <li>
                        <Link
                          href={item == "Home" ? "/" : "#"}
                          className={`fz-16 fw-400 inter ${
                            i === items.length - 1 ? "base2" : "text-white"
                          }`}>
                          {item}
                        </Link>
                      </li>
                      {i !== items.length - 1 && (
                        <li>
                          <i className="bi bi-chevron-right"></i>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
              <div className="featured__card">
                <Image src={breadcrumbImg} className="w-100" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
