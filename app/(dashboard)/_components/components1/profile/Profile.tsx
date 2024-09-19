"use client";
import Image from "next/image";
import Pagination from "../shared/Pagination";
import { activeGigs } from "../../data/activeGig";
import Checkbox from "../shared/Checkbox";
import Link from "next/link";
import SelectOption from "../shared/SelectOption";
import { useState } from "react";
import Editor from "../shared/editor/editor";

const Profile = () => {
  const [desc, setDesc] = useState(false);
  const [lang, setLang] = useState(false);
  const [skill, setSkill] = useState(false);
  const [edu, setEdu] = useState(false);
  const [certi, setCerti] = useState(false);

  return (
    <section className="profile__section sectionbg pb-120">
      <div className="container">
        <div className="profile__customize">
          <div className="row ">
            <div className="col-lg-4">
              <div className="main__profile__sidebar">
                <div className="darrell__profile round16 mb-24 border bgwhite">
                  <div className="profile__check ralt">
                    <Image
                      width={88}
                      height={88}
                      src="/img/frelancer/f6.png"
                      alt="profile"
                    />
                    <i className="bi bi-check"></i>
                  </div>
                  <div className="darrell__content mt-40 text-center">
                    <h4 className="title mb-16">Darrell Steward</h4>
                    <span className="fz-16 fw-400 inter title">
                      Machine Learner
                    </span>
                    <ul className="d-flex mt-24 justify-content-center employer__listbase flex-wrap tranding__listbase align-items-center">
                      <li>
                        <span className="fz-16 fw-400 inter pra">
                          <i className="bi bi-geo-alt base"></i>
                          Japan
                        </span>
                      </li>
                      <li className="d-flex gap-2 fz-16 fw-500 inter title">
                        <i className="bi bi-star-fill ratting"></i>
                        4.8 <span className="pra fz-14">(114)</span>
                      </li>
                      <li>
                        <span className="fz-16 fw-400 inter pra">
                          Member: <span className="base">2021</span>
                        </span>
                      </li>
                    </ul>
                    <ul className="social justify-content-center mt-30 mb-40 d-flex align-items-center">
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
                    <Link href="/profile" className="cmn--btn outline__btn">
                      <span>View Profile</span>
                      <span>
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="all__editbar round16 bgwhite border">
                  <div className="description__edit ralt pb-24 bborderdash commn__spacenone">
                    <ul>
                      <li
                        className="nav-item w-100 mb-16 d-flex align-items-center justify-content-between"
                        role="presentation">
                        <span className="fz-24 fw-600 inter title">
                          Description
                        </span>
                        <button
                          onClick={() => setDesc(true)}
                          className="fz-16 fw-600 inter base bg-white">
                          Edit
                        </button>
                      </li>
                    </ul>
                    <div>
                      {desc ? (
                        <div className=" base">
                          <div className="description__twobox round16">
                            <textarea className="w-100" rows={6}>
                              Hi, This is Darrell Steward. An Expert Machine
                              Learner. You can call me a Researcher and problem
                              solver! I am Following the 2023 Design Trends. My
                              attribution of work is Minimalist/Flat/simple.
                            </textarea>
                            <div className="update__grp d-flex align-items-center mt-2">
                              <button
                                onClick={() => setDesc(false)}
                                className="cmn--btn text-center outline__btn d-block">
                                <span>Cancel</span>
                              </button>
                              <button
                                onClick={() => setDesc(false)}
                                className="cmn--btn text-center d-block">
                                <span>Update</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="fz-16 fw-400 inter title base"
                          id="home"
                          role="tabpanel">
                          Hi, This is Darrell Steward. An Expert Machine
                          Learner. You can call me a Researcher and problem
                          solver! I am Following the 2023 Design Trends. My
                          attribution of work is Minimalist/Flat/simple.
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                    <ul className="nav" role="tablist">
                      <li
                        className="nav-item w-100 mb-16 d-flex align-items-center justify-content-between"
                        role="presentation">
                        <span className="fz-24 fw-600 inter title">
                          Languages
                        </span>
                        <button
                          onClick={() => setLang(true)}
                          className="nav-link fz-16 fw-600 inter base">
                          Add New
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      {lang ? (
                        <div>
                          <div className="description__twobox round16">
                            <div className="language__add pb-24 bborderdash mb-24">
                              <span className="addlan mb-16 border pra d-block round100 bgwhite">
                                Add Language
                              </span>
                              <SelectOption
                                options={[
                                  { label: "Begginer", value: "1" },
                                  { label: "Intermediate", value: "2" },
                                ]}
                                placeholder="Experience Level"
                              />
                            </div>
                            <div className="update__grp d-flex align-items-center">
                              <button
                                onClick={() => setLang(false)}
                                className="cmn--btn text-center outline__btn d-block">
                                <span>Cancel</span>
                              </button>
                              <button
                                onClick={() => setLang(false)}
                                className="cmn--btn text-center d-block">
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="language__items mb-16 d-flex align-items-center justify-content-between">
                            <span className="title title inter fz-16">
                              English
                            </span>
                            <div className="d-flex gap-2 align-items-center">
                              <Link href="#">
                                <i className="bi title bi-pencil-square"></i>
                              </Link>
                              <Link href="#">
                                <i className="bi title bi-trash3"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="language__items d-flex align-items-center justify-content-between">
                            <span className="title title inter fz-16">
                              English
                            </span>
                            <div className="d-flex gap-2 align-items-center">
                              <Link href="#">
                                <i className="bi title bi-pencil-square"></i>
                              </Link>
                              <Link href="#">
                                <i className="bi title bi-trash3"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                    <h4 className="title mb-24">Linked Accounts</h4>
                    <ul className="social flex-wrap d-flex align-items-center">
                      <li>
                        <Link href="#">
                          <i className="bi bi-facebook base"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-skype base"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-twitter base"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-instagram base"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-linkedin base"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-github base"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-plus-lg base"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                    <ul className="nav" role="tablist">
                      <li
                        className="nav-item w-100 mb-16 d-flex align-items-center justify-content-between"
                        role="presentation">
                        <span className="fz-24 fw-600 inter title">Skills</span>
                        <button
                          onClick={() => setSkill(true)}
                          className="nav-link fz-16 fw-600 inter base">
                          Add New
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      {skill ? (
                        <div>
                          <div className="description__twobox round16">
                            <div className="language__add pb-24 bborderdash mb-24">
                              <input
                                placeholder="Skill Name"
                                type="text"
                                className="addlan mb-16 border pra d-block round100 bgwhite"
                              />

                              <SelectOption
                                options={[
                                  { label: "Begginer", value: "1" },
                                  { label: "Intermediate", value: "2" },
                                ]}
                                placeholder="Experience Level"
                              />
                            </div>
                            <div className="update__grp d-flex align-items-center">
                              <button
                                onClick={() => setSkill(false)}
                                className="cmn--btn text-center outline__btn d-block">
                                <span>Cancel</span>
                              </button>
                              <button
                                onClick={() => setSkill(false)}
                                className="cmn--btn text-center d-block">
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="skill__tag d-flex flex-wrap">
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Machine Learning
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Vitual Assistan
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              AI
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              AI Chatbot
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              NIP Specialists
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Data Scientists
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Deep Learning
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Robotics
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Data Analysts
                            </Link>
                            <Link
                              href="#"
                              className="border round100 fz-14 pra">
                              Python
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="description__edit pt-24 ralt pb-24 bborderdash commn__spacenone">
                    <ul className="nav" role="tablist">
                      <li
                        className="nav-item w-100 mb-16 d-flex align-items-center justify-content-between"
                        role="presentation">
                        <span className="fz-24 fw-600 inter title">
                          Education
                        </span>
                        <button
                          className="nav-link fz-16 fw-600 inter base"
                          onClick={() => setEdu(true)}>
                          Add New
                        </button>
                      </li>
                    </ul>
                    <div>
                      {edu ? (
                        <div>
                          <div className="description__twobox round16">
                            <div className="language__add pb-24 bborderdash mb-24">
                              <SelectOption
                                options={[
                                  { label: "USA", value: "1" },
                                  { label: "UK", value: "2" },
                                ]}
                                placeholder="Country of college/university"
                                classes="mb-16"
                              />
                              <SelectOption
                                options={[
                                  { label: "Stanford University", value: "1" },
                                  { label: "Harvard University", value: "2" },
                                ]}
                                placeholder="college/university name"
                                classes="mb-16"
                              />
                              <SelectOption
                                options={[
                                  { label: "Department 1", value: "1" },
                                  { label: "Department 2", value: "2" },
                                ]}
                                placeholder="Department"
                                classes="mb-16"
                              />
                              <SelectOption
                                options={[
                                  { label: "3rd year", value: "1" },
                                  { label: "Done", value: "2" },
                                ]}
                                placeholder="year of graduation"
                                classes="mb-16"
                              />
                            </div>
                            <div className="update__grp d-flex align-items-center">
                              <button
                                onClick={() => setEdu(false)}
                                className="cmn--btn text-center outline__btn d-block">
                                <span>Cancel</span>
                              </button>
                              <button
                                onClick={() => setEdu(false)}
                                className="cmn--btn text-center d-block">
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span className="fz-16 fw-400 inter addpra">
                            Add your Education
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="description__edit pt-24 ralt  commn__spacenone">
                    <ul className="nav" role="tablist">
                      <li
                        className="nav-item w-100 mb-16 d-flex align-items-center justify-content-between"
                        role="presentation">
                        <span className="fz-24 fw-600 inter title">
                          Certification
                        </span>
                        <button
                          className="nav-link fz-16 fw-600 inter base"
                          onClick={() => setCerti(true)}>
                          Add New
                        </button>
                      </li>
                    </ul>
                    <div>
                      {certi ? (
                        <div>
                          <div className="description__twobox round16">
                            <div className="language__add pb-24 bborderdash mb-24">
                              <input
                                className="addlan mb-16 border pra d-block round100 bgwhite"
                                type="text"
                                placeholder=" Certificate or Award"
                              />
                              <input
                                className="addlan mb-16 border pra d-block round100 bgwhite"
                                type="text"
                                placeholder=" Certified From"
                              />
                              <input
                                className="addlan border pra d-block round100 bgwhite"
                                type="text"
                                placeholder=" Year"
                              />
                            </div>
                            <div className="update__grp d-flex align-items-center">
                              <button
                                onClick={() => setCerti(false)}
                                className="cmn--btn text-center outline__btn d-block">
                                <span>Cancel</span>
                              </button>
                              <button
                                onClick={() => setCerti(false)}
                                className="cmn--btn text-center d-block">
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span className="fz-16 fw-400 inter addpra">
                            Add your Certification
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="create__gigpublist border round16 bgwhite">
                <div
                  className="nav mb-40 border round16 d-flex align-items-center nav-tabs"
                  role="tablist">
                  <button
                    className="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1 active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true">
                    <i className="bi bi-file-earmark-plus"></i>
                    New Gig
                  </button>
                  <button
                    className="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false">
                    <i className="bi bi-file-earmark-bar-graph"></i>
                    Active Gig
                  </button>
                  <button
                    className="nav-link fz-16 fw-500 pra d-flex align-items-center gap-1"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false">
                    <i className="bi bi-pencil-square"></i>
                    Edit Profile
                  </button>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane base fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab">
                    <Link
                      href="/overview"
                      className="gig__box d-block border text-center round16 bgwhite">
                      <span className="icon round100 d-flex align-items-center justify-content-center">
                        <i className="bi bi-plus-lg"></i>
                      </span>
                      <span className="fz-24 fw-600 inter pra">
                        Create a new Gig
                      </span>
                    </Link>
                  </div>
                  <div
                    className="tab-pane base fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab">
                    <div className="row justify-content-center g-4">
                      {activeGigs.map(
                        ({
                          id,
                          activeOrder,
                          level,
                          name,
                          rating,
                          src,
                          starting,
                          tag,
                          title,
                          user,
                        }) => (
                          <div
                            key={id}
                            className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="service__item border round16 p-8 bgwhite">
                              <Link
                                href="/service-details"
                                className="thumb round16 w-100">
                                <Image
                                  width={365}
                                  height={272}
                                  src={src}
                                  className="round16 w-100"
                                  alt="service"
                                />
                              </Link>
                              <div className="service__content">
                                <div className="d-flex mb-16 align-items-center justify-content-between">
                                  <Link
                                    href="/service-details"
                                    className=" learning round16 fz-16 fw-500 inter base">
                                    {tag}
                                  </Link>
                                  <span className="success2 d-block fz-16 fw-600 inter">
                                    {level}
                                  </span>
                                </div>
                                <h5 className="mb-16">
                                  <Link
                                    href="/service-details"
                                    className="title">
                                    {title}
                                  </Link>
                                </h5>
                                <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                                  <div className="d-flex gap-2 fz-16 fw-600 inter title">
                                    <i className="bi bi-star-fill ratting"></i>
                                    {rating}
                                    <span className="fz-16 fw-400 inter pra">
                                      (34)
                                    </span>
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
                                      height={32}
                                      src={user}
                                      className="small__thumb"
                                      alt="user"
                                    />
                                    <span className="fz-16 fw-500 pra inter">
                                      {name}
                                    </span>
                                  </div>
                                  <span className="fz-16 fw-400 inter pra">
                                    Starting :{" "}
                                    <span className="fz-18 fw-600 base inter">
                                      {starting}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <Pagination />
                  </div>

                  <div
                    className="tab-pane base fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab">
                    <div
                      className="accordion profile__gigedit"
                      id="accordionExample">
                      <div className="accordion-item mb-40">
                        <span className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button collapsed bborder"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Basic Info
                          </button>
                        </span>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne">
                          <div className="accordion-body">
                            <div className="basic__infos mb-24">
                              <div className="d-flex flex-wrap basic__proadded align-items-center">
                                <div className="pro__andthumb d-flex align-items-center">
                                  <span className="fz-20 fw-500 inter title">
                                    Profile Photo
                                  </span>
                                  <div className="pro__photo">
                                    <Image
                                      width={120}
                                      height={120}
                                      src="/img/frelancer/f6.png"
                                      alt="frelance"
                                    />
                                  </div>
                                </div>
                                <div className="update__btn d-flex align-items-center">
                                  <Link href="#" className="cmn--btn">
                                    <span>Update Photo</span>
                                  </Link>
                                  <Link
                                    href="#"
                                    className="cmn--btn outline__btn">
                                    <span>Delete Photo</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <form action="#0" className="row g-4">
                              <div className="col-lg-6 basig__grpinput">
                                <label
                                  htmlFor="name"
                                  className="fz-20 fw-500 inter mb-16 title">
                                  Full name:
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  placeholder="Enter name"
                                />
                              </div>
                              <div className="col-lg-6 basig__grpinput">
                                <label
                                  htmlFor="email1s"
                                  className="fz-20 fw-500 inter mb-16 title">
                                  Email:
                                </label>
                                <input
                                  type="text"
                                  id="email1s"
                                  placeholder="Enter email"
                                />
                              </div>
                              <div className="col-lg-12 basig__grpinput">
                                <label
                                  htmlFor="numbr"
                                  className="fz-20 fw-500 inter mb-16 title">
                                  Phone <span className="pra">(Optional):</span>
                                </label>
                                <input
                                  type="text"
                                  id="numbr"
                                  placeholder="Enter number"
                                />
                              </div>
                              <div className="col-lg-12 ">
                                <span className="fz-20 fw-500 inter title mb-16 d-block">
                                  Gender:
                                </span>
                                <div className="male__box flex-wrap d-flex align-items-center">
                                  <div className="male__check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="male"
                                    />
                                    <label
                                      className="form-check-label fz-18 fw-500 inter title"
                                      htmlFor="male">
                                      Male
                                    </label>
                                  </div>
                                  <div className="male__check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="female"
                                    />
                                    <label
                                      className="form-check-label fz-18 fw-500 inter title"
                                      htmlFor="female">
                                      Female
                                    </label>
                                  </div>
                                  <div className="male__check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="other"
                                    />
                                    <label
                                      className="form-check-label fz-18 fw-500 inter title"
                                      htmlFor="other">
                                      Other
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 ">
                                <span className="fz-20 fw-500 inter title mb-16 d-block">
                                  BIO:
                                </span>

                                <Editor />

                                <div className="agry__policy mb-40 mt-24">
                                  <Checkbox
                                    id="privacy"
                                    title="I agree with all terms & conditions"
                                    checked={true}
                                  />
                                  <Checkbox
                                    id="terms"
                                    title="I agree to the privacy & policy"
                                    checked={true}
                                  />
                                </div>
                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                  <Link href="#" className="cmn--btn">
                                    <span>Save Change</span>
                                  </Link>
                                  <Link
                                    href="#"
                                    className="cmn--btn outline__btn">
                                    <span>Delete</span>
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-40">
                        <span className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button bborder collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            Address
                          </button>
                        </span>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo">
                          <div className="accordion-body">
                            <span className="fz-20 d-block fw-500 inter title mb-16">
                              Location :
                            </span>
                            <SelectOption
                              options={[
                                { label: "USA", value: "1" },
                                { label: "UK", value: "2" },
                                { label: "Canada", value: "3" },
                              ]}
                              placeholder="Select Country"
                              classes="w-100 mb-16"
                            />
                            <form action="#0" className="row g-4">
                              <div className="col-lg-6 basig__grpinput">
                                <label
                                  htmlFor="address"
                                  className="fz-20 fw-500 inter mb-16 title">
                                  Address line 1 :
                                </label>
                                <input
                                  type="text"
                                  id="address"
                                  placeholder="Enter adress 1"
                                />
                              </div>
                              <div className="col-lg-6 basig__grpinput">
                                <label
                                  htmlFor="email2s"
                                  className="fz-20 fw-500 inter mb-16 title">
                                  Address line 2{" "}
                                  <span className="pra">(Optional)</span> :
                                </label>
                                <input
                                  type="text"
                                  id="email2s"
                                  placeholder="Enter adress 2"
                                />
                              </div>
                              <div className="col-lg-12 basig__grpinput">
                                <label
                                  htmlFor="numbr2"
                                  className="fz-20 fw-500 inter mb-16 title">
                                  Zip code :
                                </label>
                                <input
                                  type="text"
                                  id="numbr2"
                                  placeholder="Enter code"
                                />
                              </div>
                              <div className="col-lg-12 mt-40">
                                <div className="d-flex align-items-center gap-4 flex-wrap">
                                  <Link href="#" className="cmn--btn">
                                    <span>Save Change</span>
                                  </Link>
                                  <Link
                                    href="#"
                                    className="cmn--btn outline__btn">
                                    <span>Delete</span>
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-40">
                        <span className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button bborder collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            Privacy
                          </button>
                        </span>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree">
                          <div className="accordion-body">
                            <span className="fz-20 d-block fw-500 mb-16 inter title">
                              Who can see your profile photo?
                            </span>
                            <SelectOption
                              options={[
                                { label: "Anyone", value: "1" },
                                { label: "Friend", value: "2" },
                                { label: "Private", value: "3" },
                              ]}
                              placeholder="Anyone"
                              fullWidth={true}
                              classes="w-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <span className="accordion-header" id="headingfour">
                          <button
                            className="accordion-button bborder collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour">
                            Delete your account
                          </button>
                        </span>
                        <div
                          id="collapsefour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingfour">
                          <div className="accordion-body">
                            <p className="fz-16 inter pra mb-16">
                              When you delete your account, you lose access to
                              Front account services, and we permanently delete
                              your personal data. You can cancel the deletion
                              for 14 days.
                            </p>
                            <div className="bank__checkitem mb-40 d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="conf"
                              />
                              <label
                                className="form-check-label fz-16 fw-400 ptext2 inter"
                                htmlFor="conf">
                                Confirm that I want to delete my account.
                              </label>
                            </div>
                            <Link href="#" className="cmn--btn outline__btn">
                              <span>Delete</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
