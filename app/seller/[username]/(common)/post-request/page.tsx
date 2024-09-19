"use client";
import imgs from "@/../public/img/details/imgs.png";
import matching from "@/../public/img/details/matching.png";
import Editor from "../../../../(dashboard)/_components/components1/shared/editor/editor";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";

const page = () => {
  const options = [
    { value: "14", label: "14px" },
    { value: "16", label: "16px" },
    { value: "18", label: "18px" },
  ];
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#fff",
      color: "black",
      width: "100%",
      padding: "5px 10px",
      borderRadius: "50px",
      border: "1px solid #DFE0E4",
      boxShadow: "0",
      "&:hover": {
        borderColor: "#DFE0E4",
      },
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "6px 10px",
      textAlign: "left",
      backgroundColor: isSelected ? "#0D47A1" : "white",
      "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#000" }),
    singleValue: (styles: any) => ({ ...styles, color: "#000" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      height: "auto",
    }),
  };
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
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
                  About The Project
                </Link>
                <Link
                  href="/post-preferences"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center"></span>
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
      {/* Post Requset section */}
      <section className="postrequest__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">
                  About the project
                </h3>
                <span className="fz-20 fw-500 title inter mb-10 d-block">
                  Give your project brief a title
                </span>
                <p className="fz-14 title mb-24 inter">
                  Keep it short and simple - this will help us match you to the
                  right category.
                </p>
                <input
                  type="text"
                  className="addquestion mb-30"
                  placeholder="Enter Title"
                />
                <span className="fz-20 fw-500 title inter mb-10 d-block">
                  What are you looking to get done?
                </span>
                <p className="fz-14 title mb-24 inter">
                  This will help get your brief to the right talent. Specifics
                  help here.
                </p>
                <div className="mb-10">
                  <Editor />
                </div>
                <Select
                  options={options}
                  styles={selectStyles}
                  placeholder="Text Size"
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />
                <span className="fz-20 mt-30 fw-500 inter d-block title mb-10">
                  Attach Files (up to 1)
                </span>
                <p className="fz-16 fw-400 mb-24 inter pra">
                  · Attach up to 5 files totaling a max of 5 GB
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    <Link
                      href="#"
                      className="image__upbox d-block text-center round16 border">
                      <Image src={imgs} className="mb-3" alt="img" />
                      <span className="fz-14 d-block inter pra mb-2">
                        Drag & drop a Photo or
                      </span>
                      <span className="base fw-14">Browse</span>
                    </Link>
                  </div>
                </div>
                <span className="fz-12 ralt aiquestion__text text-center d-block fw-400 mt-40 mb-40 inter pra">
                  <span className="aiquestion">About the project</span>
                </span>
                <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                  <Link href="/post-preferences" className="cmn--btn">
                    <span>Save & Continue</span>
                  </Link>
                  <Link href="#" className="cmn--btn outline__btn">
                    <span>Cancel</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box round16 border bgwhite">
                  <h3 className="title mb-24">Let the matching begin...</h3>
                  <span className="fz-16 fw-400 inter pra">
                    This is where you fill us in on the big picture.
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
