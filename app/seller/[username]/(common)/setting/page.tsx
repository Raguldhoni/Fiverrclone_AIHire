"use client";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";

const page = () => {
  const offlineOptions = [
    { value: "2 hours", label: "2 Hours" },
    { value: "2 days", label: "2 Days" },
  ];
  const leaveOptions = [
    { value: "1", label: "Not Comfortable" },
    { value: "2", label: "AC Not Working" },
  ];
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#fff",
      color: "black",
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
    menu: (styles: any) => ({
      ...styles,
      backgroundColor: "#fff",
      zIndex: "10",
    }),
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
            <div className="profile__wrappers setting__breadcumnd">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                  <div className="breadcumnd__content">
                    <span className="d4 mb-24">Settings</span>
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
                          Settings
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

      <section className="setting__section pb-120">
        <div className="container__customizemain pt-100 pb-120 round16">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="setting__tabs p-8 round16 border bgwhite">
                  <ul
                    className="nav border-0 round16 nav-tabs"
                    id="myTab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true">
                        Account
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false">
                        Security
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false">
                        Form W-9
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab">
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">Account</h3>
                      <div className="grp__full mb-30">
                        <label
                          htmlFor="fullname"
                          className="fz-20 fw-500 title inter mb-24 d-block">
                          Full Name
                        </label>
                        <div className="p-8 round100 mb-30 border align-items-center justify-content-between">
                          <input
                            type="text"
                            id="fullname"
                            className="w-100 border-0 send__mail title"
                            placeholder="Darrell Steward"
                          />
                        </div>
                      </div>
                      <div className="grp__full mb-30">
                        <label
                          htmlFor="emails"
                          className="fz-20 fw-500 title inter mb-24 d-block">
                          Email
                        </label>
                        <div className="p-8 round100 mb-30 border align-items-center justify-content-between">
                          <input
                            type="email"
                            id="emails"
                            className="w-100 border-0 send__mail title"
                            placeholder="inf***@gmail.com"
                          />
                        </div>
                      </div>
                      <span className="fz-20 fw-500 title inter mb-10 d-block">
                        Online Status
                      </span>
                      <p className="fz-14 title mb-24 inter">
                        When online, your Gigs are visible under the online
                        search filter.
                      </p>
                      <Select
                        options={offlineOptions}
                        styles={selectStyles}
                        placeholder="Go Offline for"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                      <span className="fz-20 fw-500 title inter mb-10 d-block">
                        Account Deactivation
                      </span>
                      <span className="fz-16 pra d-block mb-10 inter">
                        · Your profile and Gigs won&apos;t be shown on AIHIRE’s
                        anymore
                      </span>
                      <span className="fz-16 pra d-block mb-10 inter">
                        · Active orders will be cancelled
                      </span>
                      <span className="fz-16 pra d-block inter">
                        · You won&apos;t be able to re-activate your Gigs
                      </span>
                      <span className="fz-20 mt-30 fw-500 title inter mb-10 d-block">
                        I&apos;m leaving because...
                      </span>
                      <Select
                        options={leaveOptions}
                        styles={selectStyles}
                        placeholder="Choose a reason"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                      <div className="btn__grp mt-40 d-flex align-items-center gap-4 flex-wrap">
                        <Link href="#" className="cmn--btn">
                          <span>Save & Changes</span>
                        </Link>
                        <Link href="#" className="cmn--btn outline__btn">
                          <span>Deactivate Account</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab">
                    <div className="overview__gitwrapper mb-24 bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        Security
                      </h3>
                      <div className="grp__full mb-30">
                        <label
                          htmlFor="pas1"
                          className="fz-20 fw-500 title inter mb-24 d-block">
                          Current Password
                        </label>
                        <div className="p-8 round16 border align-items-center justify-content-between">
                          <input
                            type="text"
                            id="pas1"
                            className="w-100 round16 border-0 send__mail title"
                          />
                        </div>
                      </div>
                      <div className="grp__full mb-30">
                        <label
                          htmlFor="npas"
                          className="fz-20 fw-500 title inter mb-24 d-block">
                          New Password
                        </label>
                        <div className="p-8 round16 border align-items-center justify-content-between">
                          <input
                            type="text"
                            id="npas"
                            className="w-100 round16 border-0 send__mail title"
                          />
                        </div>
                      </div>
                      <div className="grp__full mb-30">
                        <label
                          htmlFor="cpas"
                          className="fz-20 fw-500 title inter mb-24 d-block">
                          Confirm Password
                        </label>
                        <div className="p-8 round16 border align-items-center justify-content-between">
                          <input
                            type="text"
                            id="cpas"
                            className="w-100 round16 border-0 send__mail title"
                          />
                        </div>
                      </div>
                      <p className="fz-16 fw-400 inter pra">
                        8 characters or longer. Combine upper and lowercase
                        letters and numbers.
                      </p>
                      <div className="btn__grp mt-40 d-flex align-items-center gap-4 flex-wrap">
                        <Link href="#" className="cmn--btn">
                          <span>Save Changes</span>
                        </Link>
                        <Link href="#" className="cmn--btn outline__btn">
                          <span>Cancel</span>
                        </Link>
                      </div>
                    </div>
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        Others Security
                      </h3>
                      <div className="bborderdash pb-24 mb-30">
                        <span className="fz-20 fw-500 mb-10 d-block inter title">
                          Phone Verification
                        </span>
                        <p className="fz-14 fw-400 d-block mb-24 inter title">
                          Your phone is verified with AIHire. Click Edit to
                          change your phone number
                        </p>
                        <Link href="#" className="cmn--btn outline__btn">
                          <span>Edit</span>
                        </Link>
                      </div>
                      <div className="bborderdash pb-24 mb-30">
                        <span className="fz-20 fw-500 mb-10 d-block inter title">
                          Two Factor Authentication
                        </span>
                        <p className="fz-14 fw-400 d-block mb-24 inter title">
                          To help keep your account secure, we&apos;ll ask you
                          to submit a code when using a new device to log in.
                          We&apos;ll send the code via SMS, email, or AIHire
                          notification.
                        </p>
                        <Link href="#" className="cmn--btn outline__btn">
                          <span>Edit</span>
                        </Link>
                      </div>
                      <div className="bborderdash pb-24 mb-30">
                        <span className="fz-20 fw-500 mb-10 d-block inter title">
                          Security Questions
                        </span>
                        <p className="fz-14 fw-400 d-block mb-24 inter title">
                          Your phone is verified with AIHire. Click Edit to
                          change your phone number
                        </p>
                        <div className="form-check d-flex align-items-center form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="switch4"
                          />
                        </div>
                      </div>
                      <span className="fz-20 fw-500 mb-24 d-block inter title">
                        Connected Devices
                      </span>
                      <div className="window__devices round16 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="left__box flex-wrap gap-4 d-flex align-items-center">
                          <div className="icon">
                            <Image
                              width={48}
                              height={37}
                              src="/img/details/window.png"
                              alt="img"
                            />
                          </div>
                          <div className="widow__content">
                            <span className="fz-20 d-block d-flex flex-wrap align-items-center gap-2 mb-1 fw-500 inter title">
                              Chrome 114, Windows{" "}
                              <span className="fz-16 success2">
                                This Device
                              </span>
                            </span>
                            <span className="fz-14 fw-400 inter pra">
                              Last Activity 30 minutes ago • New York, US
                            </span>
                          </div>
                        </div>
                        <Link href="#" className="fz-18 fw-500 inter pra">
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab">
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        US Account Info
                      </h3>
                      <span className="fz-20 fw-500 title inter mb-15 d-block">
                        US Account Info
                      </span>
                      <span className="fz-16 fw-000 d-block mb-10 inter pra">
                        · To stay compliant with U.S. tax regulations, please
                        update your details with any change.
                      </span>
                      <span className="fz-16 fw-000 d-block mb-10 inter pra">
                        · What is a U.S. person (as defined by the U.S. tax
                        authorities)?
                      </span>
                      <span className="fz-20 mt-40 fw-500 title inter mb-15 d-block">
                        Are you a U.S. person?
                      </span>
                      <div className="natural__language round16 border">
                        <div className="bank__checkitem natural__item bborderdash pb-24 d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="bank11t20"
                            name="us"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="bank11t20">
                            <span className="fz-20 fw-600 mb-10 d-block inter pra">
                              No
                            </span>
                            <span className="fz-14 pra inter fw-400">
                              I confirm that all the services I offer on AIHire
                              are performed while outside of the U.S.
                            </span>
                          </label>
                        </div>
                        <div className="bank__checkitem natural__item pt-24 d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="us"
                            id="natu1"
                          />
                          <label className="form-check-label" htmlFor="natu1">
                            <span className="fz-20 fw-600 mb-10 d-block inter pra">
                              Yes
                            </span>
                            <span className="fz-14 pra inter fw-400">
                              U.S. tax authorities might request Form W-9 and
                              information regarding your activity on AIHire.
                            </span>
                          </label>
                        </div>
                      </div>
                      <p className="fz-16 fw-400 inter mt-40 mb-40 pra">
                        ·{" "}
                        <Link href="#" className="base">
                          Learn more
                        </Link>{" "}
                        about tax regulations and read our{" "}
                        <Link href="#" className="base">
                          Privacy Policy
                        </Link>{" "}
                        to learn how we use your data.
                      </p>
                      <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                        <Link href="#" className="cmn--btn">
                          <span>Save & Changes</span>
                        </Link>
                        <Link href="#" className="cmn--btn outline__btn">
                          <span>Cancel</span>
                        </Link>
                      </div>
                    </div>
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
