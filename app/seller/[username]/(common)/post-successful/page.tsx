import artTake from "@/../public/img/details/art-take.png";
import Image from "next/image";
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
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Add Timeline and Budget
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}

      {/* <!-- post-successful Section Here --> */}
      <section className="postsuccessful__section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="post__successful bgwhite round16">
                <div className="art__thumb mb-40">
                  <Image src={artTake} alt="img" />
                </div>
                <h2 className="title mb-24">
                  Your part is done, we’ll take it from here
                </h2>
                <p className="fz-16 inter pra mb-40">
                  Keep an eye on your inbox, offers should arrive in no time
                </p>
                <div className="btn__grp justify-content-center d-flex align-items-center gap-4 flex-wrap">
                  <Link href="/" className="cmn--btn">
                    <span>Back To Home</span>
                  </Link>
                  <Link href="#" className="cmn--btn outline__btn">
                    <span>Cancel</span>
                  </Link>
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
