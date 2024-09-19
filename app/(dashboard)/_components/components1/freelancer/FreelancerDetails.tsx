import Link from "next/link";
import Checkbox from "../shared/Checkbox";
import Pagination from "../shared/Pagination";
import Image from "next/image";
import SelectOption from "../shared/SelectOption";
const features = [
  {
    id: "bank11t20",
    label: "Prompt writing",
    checked: true,
  },
  {
    id: "bank22",
    label: "Generated image examples",
    checked: true,
  },
  {
    id: "bank44t8",
    label: "Unlimited Revisions",
    checked: true,
  },
  {
    id: "bank33t12",
    label: "Image upscaling",
    checked: false,
  },
];

const FreelancerDetails = () => {
  return (
    <section className="freelancer__details pt-120 pb-120 sectionbg2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="service__detailswrapper">
              <div className="trending__based mb-40 bgwhite round16 shadow1">
                <div className="based__content border round16 bgwhite">
                  <div className="freelancer__profile bborderdash pb-24 mb-24 align-items-center d-flex ">
                    <div className="profile__check ralt">
                      <Image
                        width={88}
                        height={88}
                        src="/img/testimonial/darrell.jpg"
                        alt="profile"
                      />
                      <i className="bi bi-check"></i>
                    </div>
                    <div className="box__add">
                      <h4 className="mb-10 title">Darrell Steward</h4>
                      <span className="fz-16 mb-16 d-block fw-400 inter title">
                        Machine Learner
                      </span>
                      <ul className="d-flex tranding__listbase align-items-center justify-content-between">
                        <li>
                          <span className="fz-16 d-flex align-items-cener gap-1 fw-400 inter pra">
                            <i className="bi bi-geo-alt base fz-18"></i>
                            Japan
                          </span>
                        </li>
                        <li className="d-flex gap-2 fz-16 fw-600 inter title">
                          <i className="bi bi-star-fill ratting"></i>
                          4.8
                          <span className="fz-16 fw-400 inter pra">(114)</span>
                        </li>
                        <li>
                          <span className="fz-16 d-flex align-items-cener gap-1 fw-400 inter pra">
                            Member:
                            <span className="base">January 5, 2023</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="trending__timing__list d-flex align-items-cener justify-content-between">
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock d-flex align-items-center justify-content-center"></i>
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
                      <i className="bi bi-stopwatch d-flex align-items-center justify-content-center"></i>
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
                      <i className="bi bi-shield-check d-flex align-items-center justify-content-center"></i>
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
                  <h3 className="title mb-20">Description</h3>
                  <p className="fz-16 fw-400 inter pra">
                    The &quot;AI-powered Chatbot Development&quot; project
                    focuses on building an intelligent chatbot that leverages
                    artificial intelligence and natural language processing
                    techniques to provide automated customer support and
                    assistance.
                  </p>
                </div>
                <h4 className="title mb-24">My Skills :</h4>
                <div className="chatbot__tag mb-30 pb-30 bborderdash d-flex align-items-center">
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    UI/UX Design
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Front End
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Back End
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Data Analytics
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Machine Learning
                  </Link>
                </div>
                <div className="freelancer__education bborderdash pb-30 mb-30">
                  <span className="fz-20 mb-24 d-block inter title fw-600">
                    Educations
                  </span>
                  <div className="freelance__attach ralt">
                    <div className="freelanc__inneredu mb-40 align-items-center d-flex">
                      <div className="edu__number round50 d-flex align-items-center justify-content-center">
                        <span className="round50 d-flex align-items-center justify-content-center">
                          01
                        </span>
                      </div>
                      <div className="content__box round16">
                        <span className="base date fz-16 mb-16 fw-500 d-inline-block inter bgwhite round16">
                          2013 - 2023
                        </span>
                        <span className="fz-20 fw-500 inter title d-block mb-16">
                          Diploma in Machine Learning
                        </span>
                        <span className="fz-16 mb-2 d-block fw-500 inter success2">
                          Modern AI Institute
                        </span>
                        <p className="pra inter fz-14 fw-400">
                          The Modern AI Institute is an organization dedicated
                          to advancing the field of artificial intelligence (AI)
                          through research, education, and innovation. It aims
                          to explore the latest developments in AI and harness
                          their potential for various applications.
                        </p>
                      </div>
                    </div>
                    <div className="freelanc__inneredu align-items-center d-flex">
                      <div className="edu__number round50 d-flex align-items-center justify-content-center">
                        <span className="round50 d-flex align-items-center justify-content-center">
                          02
                        </span>
                      </div>
                      <div className="content__box round16">
                        <span className="base date fz-16 mb-16 fw-500 d-inline-block inter bgwhite round16">
                          2013 - 2023
                        </span>
                        <span className="fz-20 fw-500 inter title d-block mb-16">
                          BSC in Machine Learning
                        </span>
                        <span className="fz-16 mb-2 d-block fw-500 inter success2">
                          Stanford University
                        </span>
                        <p className="pra inter fz-14 fw-400">
                          Stanford University is a prestigious institution
                          located in Stanford, California, United States. It is
                          renowned for its academic excellence and has a strong
                          reputation in various fields, including artificial
                          intelligence (AI).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="freelancer__education bborderdash pb-30 mb-30">
                  <span className="fz-20 mb-24 d-block inter title fw-600">
                    Work & Experience:
                  </span>
                  <div className="freelance__attach ralt">
                    <div className="freelanc__inneredu mb-40 align-items-center d-flex">
                      <div className="edu__number round50 d-flex align-items-center justify-content-center">
                        <span className="round50 d-flex align-items-center justify-content-center">
                          01
                        </span>
                      </div>
                      <div className="content__box round16">
                        <span className="base date fz-16 mb-16 fw-500 d-inline-block inter bgwhite round16">
                          2013 - 2020
                        </span>
                        <span className="fz-20 fw-500 inter title d-block mb-16">
                          Python Developer
                        </span>
                        <span className="fz-16 mb-2 d-block fw-500 inter success2">
                          JK Software Ltd
                        </span>
                        <p className="pra inter fz-14 fw-400">
                          The Modern AI Institute is an organization dedicated
                          to advancing the field of artificial intelligence (AI)
                          through research, education, and innovation. It aims
                          to explore the latest developments in AI and harness
                          their potential for various applications.
                        </p>
                      </div>
                    </div>
                    <div className="freelanc__inneredu align-items-center d-flex">
                      <div className="edu__number round50 d-flex align-items-center justify-content-center">
                        <span className="round50 d-flex align-items-center justify-content-center">
                          02
                        </span>
                      </div>
                      <div className="content__box round16">
                        <span className="base date fz-16 mb-16 fw-500 d-inline-block inter bgwhite round16">
                          2013 - 2021
                        </span>
                        <span className="fz-20 fw-500 inter title d-block mb-16">
                          Machine Learning, API, Python Engineer
                        </span>
                        <span className="fz-16 mb-2 d-block fw-500 inter success2">
                          Olv Software Ltd
                        </span>
                        <p className="pra inter fz-14 fw-400">
                          Stanford University is a prestigious institution
                          located in Stanford, California, United States. It is
                          renowned for its academic excellence and has a strong
                          reputation in various fields, including artificial
                          intelligence (AI).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="fz-16 bborderdash fw-400 pb-30 mb-30 inter pra">
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
                    <div className="service__item shadow2 round16 p-8 bgwhite">
                      <Link href="#" className="thumb round16 w-100">
                        <Image
                          width={380}
                          height={283}
                          src="/img/service/s1.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="#"
                            className=" learning round16 fz-16 fw-500 inter base">
                            Machine Learning
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="#" className="title">
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
                    <div className="service__item shadow2 round16 p-8 bgwhite">
                      <Link href="#" className="thumb round16 w-100">
                        <Image
                          width={380}
                          height={283}
                          src="/img/service/s2.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="#"
                            className=" learning round16 fz-16 fw-500 inter base">
                            NLP Specialists
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="#" className="title">
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
                    <div className="service__item shadow2 round16 p-8 bgwhite">
                      <Link href="#" className="thumb round16 w-100">
                        <Image
                          width={380}
                          height={283}
                          src="/img/service/s3.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="#"
                            className=" learning round16 fz-16 fw-500 inter base">
                            Data Scientist
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="#" className="title">
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
                    <div className="service__item shadow2 round16 p-8 bgwhite">
                      <Link href="#" className="thumb round16 w-100">
                        <Image
                          width={380}
                          height={283}
                          src="/img/service/s4.jpg"
                          className="round16 w-100"
                          alt="service"
                        />
                      </Link>
                      <div className="service__content">
                        <div className="d-flex mb-16 align-items-center justify-content-between">
                          <Link
                            href="#"
                            className=" learning round16 fz-16 fw-500 inter base">
                            AI Consultansts
                          </Link>
                          <span className="success2 d-block fz-16 fw-600 inter">
                            Level 2
                          </span>
                        </div>
                        <h5 className="mb-16">
                          <Link href="#" className="title">
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
              <div className="basic__boxskill mb-24 round16 bgwhite">
                <span className="fz-18 d-block fw-500 title inter mb-10">
                  Budget
                </span>
                <div className="form__price pb-24 d-flex align-items-center bborderdash">
                  <i className="bi bi-tags tags__icon"></i>
                  <span className="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                    From
                    <span className="fssizing d-flex align-items-start gap-1">
                      $399
                      <i className="bi bi-info-circle infocircle"></i>
                    </span>
                  </span>
                </div>
                <div className="d-flex mb-16 mt-24 align-items-center justify-content-between">
                  <span className="fz-18 fw-500 inter pra">Per Pages</span>
                  <h3 className="base fz-18 fw-500">$29</h3>
                </div>
                <div className="bank__check__wrap mb-30">
                  {features.map(({ checked, id, label }) => (
                    <Checkbox
                      key={id}
                      id={id}
                      title={label}
                      checked={checked}
                    />
                  ))}
                </div>
                <Link
                  href="#"
                  className="cmn--btn d-flex justify-content-center d-block">
                  <span>Send Proposal</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
              <div className="basic__boxskill round16 bgwhite">
                <h4 className="title pb-24 bborderdash mb-24">
                  Linked Accounts
                </h4>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerDetails;
