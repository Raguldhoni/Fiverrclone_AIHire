import Link from "next/link";
import React from "react";

const Breadcrumb = () => {
  return (
    <section className="banner__breadcumn ralt">
      <div className="breadcumnd__wrapper">
        <div className="container">
          <div className="profile__wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                <div className="breadcumnd__content">
                  <span className="d4 mb-24">Profile</span>
                  <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                    <li>
                      <Link href="/" className="fz-16 fw-400 inter text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                    </li>
                    <li>
                      <Link href="#" className="fz-16 fw-400 inter text-white">
                        User Profile
                      </Link>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                    </li>
                    <li>
                      <Link href="#" className="fz-16 fw-400 inter base2">
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                <div className="logout__btn">
                  <Link href="#" className="cmn--logout">
                    <span>
                      <i className="bi bi-box-arrow-right"></i>
                    </span>
                    <span className="fz-16 fw-600 inter">Log out</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
