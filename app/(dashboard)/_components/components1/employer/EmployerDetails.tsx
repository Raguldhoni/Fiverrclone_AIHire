import Image from "next/image";
import Link from "next/link";
import SelectOption from "../shared/SelectOption";

const EmployerDetails = () => {
  return (
    <section className="employer__details pt-120 pb-120 sectionbg2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="service__detailswrapper">
              <div className="trending__based mb-40 bgwhite round16 shadow1">
                <div className="based__content border round16 bgwhite">
                  <div className="freelancer__profile bborderdash pb-24 mb-24 align-items-center d-flex ">
                    <div className="profile__check ralt">
                      <Image
                        src="/img/testimonial/biford-profile.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                      />
                      <i className="bi bi-check"></i>
                    </div>
                    <div className="box__em">
                      <div className="box__add">
                        <h4 className="mb-10 title">Binford Ltd.</h4>
                        <span className="fz-16 mb-16 bborderdash pb-20 d-block fw-400 inter title">
                          Member since December 31, 2020
                        </span>
                      </div>
                      <ul className="d-flex justify-content-center employer__listbase tranding__listbase align-items-center">
                        <li>
                          <span className="fz-16 fw-400 inter pra">
                            <i className="bi bi-geo-alt base"></i>
                            Japan
                          </span>
                        </li>
                        <li className="d-flex gap-2 fz-16 fw-500 inter title">
                          <i className="bi bi-star-fill ratting"></i>
                          5.0
                        </li>
                        <li>
                          <span className="fz-16 fw-400 inter pra">
                            <i className="bi bi-bar-chart pra"></i>
                            6-9 Years
                          </span>
                        </li>
                        <li>
                          <span className="fz-16 fw-400 inter success">
                            Level 2
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="trending__timing__list d-flex align-items-cener justify-content-between">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-shield-check d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Delivery Time
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          1-3 Days
                        </span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-pc-display-horizontal d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Response Times
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          1 Hour
                        </span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-globe d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Level of English
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          Basic
                        </span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-phone-flip d-flex align-items-center justify-content-center"></i>
                      <div className="box">
                        <span className="fz-12 fw-500 inter pra m-1 d-block">
                          Order completion
                        </span>
                        <span className="fz-16 fw-400 inter pra m-1 d-block">
                          100%
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bborderdash pb-24 mt-30 mb-30">
                  <h3 className="title mb-20">About Company</h3>
                  <p className="fz-16 fw-400 inter pra">
                    Binford Ltd is a leading software company specializing in
                    machine learning solutions. With a team of talented
                    professionals and a focus on innovation, we deliver
                    cutting-edge software products and services to clients
                    across various industries.
                  </p>
                </div>
                <div className="bborderdash pb-30 mt-30 mb-30">
                  <h3 className="title mb-20">What do we do?</h3>
                  <p className="fz-16 fw-400 inter pra">
                    The &quot;AI-powered Chatbot Development&quot; project
                    focuses on building an intelligent chatbot that leverages
                    artificial intelligence and natural language processing
                    techniques to provide automated customer support and
                    assistance.
                  </p>
                </div>
                <div className="pb-24 mt-30 mb-30">
                  <h4 className="title mb-20">About Company</h4>
                  <p className="fz-16 fw-400 inter pra">
                    The &quot;AI-powered Chatbot Development&quot; project
                    focuses on building an intelligent chatbot that leverages
                    artificial intelligence and natural language processing
                    techniques to provide automated customer support and
                    assistance.
                  </p>
                </div>
                <div className="company__foal">
                  <Image
                    width={816}
                    height={464}
                    src="/img/details/provide.jpg"
                    alt="img"
                  />
                </div>
                <p className="fz-16 fw-400 inter pra bborderdash pb-30">
                  These details provide an overview of the responsibilities and
                  requirements for a Machine Learning, API, and Python Engineer.
                  The specific tasks and technologies may vary depending on the
                  company&apos;s focus and the projects being developed.
                </p>
                <div className="attachment__footertag mt-30 gap-3 flex-wrap d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="base fz-18 fw-500 inter">Tag -</span>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Machine Learning
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      AI Chatbot
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Virtual Assistan
                    </Link>
                  </div>
                  <div className="share d-flex align-items-center gap-2">
                    <span className="fz-18 fw-500 inter base">Share -</span>
                    <ul className="social d-flex align-items-center">
                      <li>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="trending__based mb-40 bgwhite round16 shadow1">
                <h3 className="title pb-24 bborderdash mb-24">
                  Featured Services
                </h3>
                <div className="row g-4 justify-content-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10">
                    <div className="service__item border round16 p-8 bgwhite">
                      <Link
                        href="/service-details"
                        className="thumb round16 w-100">
                        <Image
                          width={378}
                          height={282}
                          src="/img/service/s1.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="/service-details"
                            className=" learning round16 fz-16 fw-500 inter base">
                            Machine Learning
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="/service-details" className="title">
                            Machine Learning Predictive
                          </Link>
                        </h5>
                        <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                          <div className="d-flex gap-2 fz-16 fw-600 inter title">
                            <i className="bi bi-star-fill ratting"></i>
                            5.0
                            <span className="fz-16 fw-400 inter pra">(34)</span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Active Order :{" "}
                            <span className="fz-18 fw-600 base inter">12</span>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <Image
                              width={32}
                              height={32}
                              src="/img/service/u1.png"
                              className="small__thumb"
                              alt="user"
                            />
                            <span className="fz-16 fw-500 pra inter">Luic</span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Starting :{" "}
                            <span className="fz-18 fw-600 base inter">
                              $300
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10">
                    <div className="service__item border round16 p-8 bgwhite">
                      <Link
                        href="/service-details"
                        className="thumb round16 w-100">
                        <Image
                          width={378}
                          height={282}
                          src="/img/service/s2.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="/service-details"
                            className=" learning round16 fz-16 fw-500 inter base">
                            NLP Specialists
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="/service-details" className="title">
                            Machine Translation Multilingual
                          </Link>
                        </h5>
                        <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                          <div className="d-flex gap-2 fz-16 fw-600 inter title">
                            <i className="bi bi-star-fill ratting"></i>
                            5.0
                            <span className="fz-16 fw-400 inter pra">(34)</span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Active Order :{" "}
                            <span className="fz-18 fw-600 base inter">12</span>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <Image
                              width={32}
                              height={32}
                              src="/img/service/u2.png"
                              className="small__thumb"
                              alt="user"
                            />
                            <span className="fz-16 fw-500 pra inter">
                              Victoria
                            </span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Starting :{" "}
                            <span className="fz-18 fw-600 base inter">
                              $300
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10">
                    <div className="service__item border round16 p-8 bgwhite">
                      <Link
                        href="/service-details"
                        className="thumb round16 w-100">
                        <Image
                          width={378}
                          height={282}
                          src="/img/service/s3.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="/service-details"
                            className=" learning round16 fz-16 fw-500 inter base">
                            Data Scientist
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="/service-details" className="title">
                            AI-based Stock Trading
                          </Link>
                        </h5>
                        <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                          <div className="d-flex gap-2 fz-16 fw-600 inter title">
                            <i className="bi bi-star-fill ratting"></i>
                            5.0
                            <span className="fz-16 fw-400 inter pra">(34)</span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Active Order :{" "}
                            <span className="fz-18 fw-600 base inter">12</span>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <Image
                              width={32}
                              height={32}
                              src="/img/service/u3.png"
                              className="small__thumb"
                              alt="user"
                            />
                            <span className="fz-16 fw-500 pra inter">
                              Leslie
                            </span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Starting :{" "}
                            <span className="fz-18 fw-600 base inter">
                              $300
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-10">
                    <div className="service__item border round16 p-8 bgwhite">
                      <Link
                        href="/service-details"
                        className="thumb round16 w-100">
                        <Image
                          width={378}
                          height={282}
                          src="/img/service/s4.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="/service-details"
                            className=" learning round16 fz-16 fw-500 inter base">
                            AI Consultansts
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="/service-details" className="title">
                            AI-driven Product
                          </Link>
                        </h5>
                        <div className="d-flex bborder pb-20 mb-20 align-items-center justify-content-between">
                          <div className="d-flex gap-2 fz-16 fw-600 inter title">
                            <i className="bi bi-star-fill ratting"></i>
                            5.0
                            <span className="fz-16 fw-400 inter pra">(34)</span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Active Order :{" "}
                            <span className="fz-18 fw-600 base inter">12</span>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <Image
                              width={32}
                              height={32}
                              src="/img/service/u4.png"
                              className="small__thumb"
                              alt="user"
                            />
                            <span className="fz-16 fw-500 pra inter">
                              Mitchell
                            </span>
                          </div>
                          <span className="fz-16 fw-400 inter pra">
                            Starting :{" "}
                            <span className="fz-18 fw-600 base inter">
                              $300
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment__details__wrapper round16 mb-40 bgwhite">
                <div className="average__review bborderdash pb-30 mb-30">
                  <h4 className="title pb-30 mb-30 bborderdash">
                    Average Reviews
                  </h4>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      5<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "90%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">90%</span>
                  </div>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      4<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "75%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">75%</span>
                  </div>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      3<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "67%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">67%</span>
                  </div>
                  <div className="aver__item mb-15 d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      2<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "44%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">44%</span>
                  </div>
                  <div className="aver__item d-flex align-items-center">
                    <span className="d-flex align-items-center gap-1 fz-16 fw-400 inter title">
                      1<i className="bi bi-star title"></i>
                    </span>
                    <div className="aver__bars">
                      <div className="bars" style={{ width: "21%" }}></div>
                    </div>
                    <span className="fw-16 fw-400 inter title">21%</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-30 flex-wrap justify-content-between">
                  <h5 className="inter title fz-20 fw-600">4.6 (66 reviews)</h5>
                  <div className="sort__latest d-flex align-items-center gap-3">
                    <span className="fz-16 fw-400 inter ptext2">Sort By:</span>
                    <SelectOption
                      options={[
                        { value: "Newest", label: "Newest" },
                        { value: "Recent", label: "Recent" },
                      ]}
                      placeholder="Newest"
                      fullWidth={false}
                    />
                  </div>
                </div>
                <div className="review__commentbox mb-30">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                    <div className="d-flex pt-24 gap-3 align-items-center">
                      <Image
                        width={60}
                        height={60}
                        src="/img/testimonial/review3.png"
                        className="round50"
                        alt="re-img"
                      />
                      <div className="name__content">
                        <h5 className="title">
                          Darrell Steward
                          <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                            Software engineer
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24 pb-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                  <div className="discussion d-flex align-items-center ">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review1.png"
                      alt="review"
                      className="round50"
                    />
                    <input type="text" placeholder="Join the discussion..." />
                  </div>
                </div>
                <div className="review__commentbox mb-40">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="d-flex pt-24 gap-3 align-items-center">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review2.png"
                      className="round50"
                      alt="re-img"
                    />
                    <div className="name__content">
                      <h5 className="title">
                        Albert Flores
                        <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                          Customer success
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="review__commentbox mb-40">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="d-flex pt-24 gap-3 align-items-center">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review3.png"
                      className="round50"
                      alt="re-img"
                    />
                    <div className="name__content">
                      <h5 className="title">
                        Annette Black
                        <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                          Personal assistant
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="cmn--btn d-flex align-items-center gap-2">
                  <span>See All Reviews</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </button>
              </div>
              <div className="trending__based bgwhite round16 shadow1">
                <h4 className="pb-24 title bborderdash mb-24">
                  Write a review
                </h4>
                <form action="#0" className="writing__review">
                  <div className="wrigt__grp">
                    <label htmlFor="name">
                      Name <span className="base">*</span>
                    </label>
                    <input type="text" id="name" placeholder="Enter Name..." />
                  </div>
                  <div className="wrigt__grp">
                    <label htmlFor="email">
                      Email <span className="base">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Email..."
                    />
                  </div>
                  <div className="wrigt__grp">
                    <label>
                      Ratting <span className="base">*</span>
                    </label>
                    <div className="ratting__grp d-flex gap-2">
                      <Link href="#">
                        <i className="bi bi-star ratting fz-16"></i>
                      </Link>
                      <Link href="#">
                        <i className="bi bi-star ratting fz-16"></i>
                      </Link>
                      <Link href="#">
                        <i className="bi bi-star ratting fz-16"></i>
                      </Link>
                      <Link href="#">
                        <i className="bi bi-star ratting fz-16"></i>
                      </Link>
                      <Link href="#">
                        <i className="bi bi-star ratting fz-16"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="wrigt__grp">
                    <label htmlFor="name">
                      Review <span className="base">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      rows={4}></textarea>
                  </div>
                  <button className="cmn--btn mt-16">
                    <span>Submit Reviews</span>
                    <span>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="basic__skilled__wrapper">
              <div className="darrell__profile round16 bgwhite">
                <div className="profile__check ralt">
                  <Image
                    src="/img/testimonial/biford-profile.jpg"
                    alt="profile"
                    height={120}
                    width={120}
                  />
                  <i className="bi bi-check"></i>
                </div>
                <div className="darrell__content mt-40 text-center">
                  <h4 className="title mb-16">Binford Ltd.</h4>
                  <span className="fz-16 fw-400 inter title">
                    Our expertise lies in developing advanced machine learning
                    algorithms
                  </span>
                  <ul className="social justify-content-center pt-24 mb-3 pb-24 bborderdash d-flex align-items-center">
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
                  <div className="binford__loca mt-20 mb-40">
                    <div className="d-flex fz-16 fw-400 inter pra mb-8 align-items-center justify-content-between">
                      Projects View
                      <span className="fz-16 fw-500 inter title">1.5k</span>
                    </div>
                    <div className="d-flex fz-16 fw-400 inter pra mb-8 align-items-center justify-content-between">
                      Projects Sale
                      <span className="fz-16 fw-500 inter title">120+</span>
                    </div>
                    <div className="d-flex fz-16 fw-400 inter pra mb-8 align-items-center justify-content-between">
                      Followers
                      <span className="fz-16 fw-500 inter title">2.2k</span>
                    </div>
                    <div className="d-flex fz-16 fw-400 inter pra mb-8 align-items-center justify-content-between">
                      Following
                      <span className="fz-16 fw-500 inter title">671</span>
                    </div>
                  </div>
                  <div className="d-flex bingord__btngrp align-items-center justify-content-between flex-wrap">
                    <Link href="#" className="cmn--btn d-block">
                      <span>
                        <i className="bi bi-plus-circle"></i>
                      </span>
                      <span>Follow</span>
                    </Link>
                    <Link href="#" className="cmn--btn outline__btn d-block">
                      <span>
                        <i className="bi bi-messenger"></i>
                      </span>
                      <span>Message</span>
                    </Link>
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

export default EmployerDetails;
