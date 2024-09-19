import Image from "next/image";
import matching from "@/../public/img/details/matching.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="banner__breadcumn ralt">
        <div className="breadcumnd__wrapper">
          <div className="container">
            <div className="profile__wrappers post__requestwrapper pt-100 pb-100">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                  <div className="breadcumnd__content">
                    <span className="d4 mb-24">Post a Request</span>
                    <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                      <li>
                        <Link
                          href="/"
                          className="fz-16 fw-400 inter text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="fz-16 fw-400 inter text-white">
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link href="#" className="fz-16 fw-400 inter base2">
                          Post a Request
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
        {/* <!--post request--> */}
        <div className="overview__showcase ralt">
          <div className="container">
            <div className="overview__showcasewrap post__requestwrap round16 border bgwhite">
              <div className="overview__inntercase ralt d-flex align-items-center">
                <Link
                  href="/post-request"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  About The Project
                </Link>
                <Link
                  href="/post-preferences"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Your Preferences
                </Link>
                <Link
                  href="/post-timeline"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
                  Add Timeline and Budget
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}

      {/* <!-- description body Section Here --> */}
      <section className="postrequest__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">
                  Add Timeline and Budget
                </h3>
                <span className="fz-20 fw-500 title inter d-block">
                  I&apos;m looking to spend...
                </span>
                <div className="title__add mt-24">
                  <input type="text" placeholder="Up to" />
                </div>
                <div className="bank__checkitem mt-24 d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="we2"
                  />
                  <label
                    className="form-check-label fz-16 fw-400 ptext2 inter"
                    htmlFor="we2">
                    My budget is flexible
                  </label>
                </div>
                <span className="fz-12 ralt aiquestion__text text-center d-block fw-400 mt-40 mb-30 inter pra">
                  <span className="aiquestion">Add timeline and budget</span>
                </span>
                <span className="fz-20 fw-500 title inter d-block">
                  Let’s talk timing
                </span>
                <div className="title__add mt-24">
                  <input type="text" placeholder="Ideal delivery date" />
                </div>
                <div className="bank__checkitem mt-24 d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="we1"
                  />
                  <label
                    className="form-check-label fz-16 fw-400 ptext2 inter"
                    htmlFor="we1">
                    We’ll find available freelancers.
                  </label>
                </div>
                <div className="btn__grp mt-40 d-flex align-items-center gap-4 flex-wrap">
                  <Link href="/post-successful" className="cmn--btn">
                    <span>Save & Continue</span>
                  </Link>
                  <Link
                    href="/post-preferences"
                    className="cmn--btn outline__btn">
                    <span>Back</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box round16 border bgwhite">
                  <h3 className="title mb-24">
                    Now let&apos;s talk budget and timing
                  </h3>
                  <span className="fz-16 fw-400 inter pra">
                    You&apos;re not committing to anything final here.This just
                    helps us find you the most relevant
                  </span>
                  <div className="man__matching">
                    <Image src={matching} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
