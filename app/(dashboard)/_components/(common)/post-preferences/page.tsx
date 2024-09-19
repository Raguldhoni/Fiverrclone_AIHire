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
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
                  Your Preferences
                </Link>
                <Link
                  href="/post-timeline"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center"></span>
                  Add Timeline and Budget
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="postrequest__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">
                  Your Preferences
                </h3>
                <span className="fz-20 fw-500 title inter mb-10 d-block">
                  Which category best fits your project?
                </span>
                <p className="fz-14 title mb-24 inter">
                  These suggestions are based on your brief’s title.
                </p>
                <span className="fz-12 ralt aiquestion__text text-center d-block fw-400 mt-40 mb-40 inter pra">
                  <span className="aiquestion">Choose Any Categories</span>
                </span>
                <div className="natural__language round16 border">
                  <div className="bank__checkitem natural__item bborderdash pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bank11t20"
                    />
                    <label className="form-check-label" htmlFor="bank11t20">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Natural Language Processing (NLP)
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        This category focuses on the interaction between
                        computers
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu1"
                    />
                    <label className="form-check-label" htmlFor="natu1">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Computer Vision
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        Computer vision involves teaching computers to
                        understand
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu2"
                    />
                    <label className="form-check-label" htmlFor="natu2">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Machine Learning
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        Machine learning is a fundamental component of AI
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu3"
                    />
                    <label className="form-check-label" htmlFor="natu3">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Deep Learning
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        Deep learning is a subset of machine learning
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu4"
                    />
                    <label className="form-check-label" htmlFor="natu4">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Robotics and Automation
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        AI is applied in robotics to develop intelligent systems
                        capable
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu5"
                    />
                    <label className="form-check-label" htmlFor="natu5">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Recommendation Systems
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        Recommendation systems use AI algorithms to suggest
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu6"
                    />
                    <label className="form-check-label" htmlFor="natu6">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Data Analytics and Predictive Modeling
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        AI is used to analyze large datasets, extract insights
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item bborderdash pt-24 pb-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu7"
                    />
                    <label className="form-check-label" htmlFor="natu7">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Virtual Assistants
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        Virtual assistants utilize AI technologies to provide
                        automated
                      </span>
                    </label>
                  </div>
                  <div className="bank__checkitem natural__item pt-24 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="natu9"
                    />
                    <label className="form-check-label" htmlFor="natu9">
                      <span className="fz-20 fw-600 mb-10 d-block inter pra">
                        Healthcare AI
                      </span>
                      <span className="fz-14 pra inter fw-400">
                        AI is making significant contributions to the healthcare
                        industry
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                <Link href="/post-timeline" className="cmn--btn">
                  <span>Save & Continue</span>
                </Link>
                <Link href="#" className="cmn--btn outline__btn">
                  <span>Cancel</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box round16 border bgwhite">
                  <h3 className="title mb-24">Let&apos;s talk details</h3>
                  <span className="fz-16 fw-400 inter pra">
                    Tell us a bit more about what you&apos;re looking for.
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
