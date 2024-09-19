import about1 from "../../../../../public/img/about/about-s2.jpg";
import about2 from "../../../../../public/img/about/about-s2.jpg";
import radius1 from "../../../../../public/img/about/radius1.png";
import radius2 from "../../../../../public/img/about/radius2.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="about__three bgwhite  pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="about__three__content">
              <div className="section__title ralt">
                <h4 className="sub2 d-inline ralt base  ">About us</h4>
                <h2 className="title mt-16  ">
                  Our Comprehensive Services Provide The Power of AI
                </h2>
              </div>
              <ul
                className="nav mt-30 mb-16 d-flex align-items-center nav-tabs"
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
                    Our Mission
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
                    Our Vission
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
                    How We Work
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fz-14 fw-400 inter pra fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  Access a curated pool of highly skilled AI professionals with
                  expertise in cutting-edge technologies. Find AI projects that
                  align with your interests and showcase your capabilities.
                  Collaborate with clients who value your expertise and provide
                  opportunities for growth.
                </div>
                <div
                  className="tab-pane fz-14 fw-400 inter pra fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab">
                  Access a curated pool of highly skilled AI professionals with
                  expertise in cutting-edge technologies. Find AI projects that
                  align with your interests and showcase your capabilities.
                  Collaborate with clients who value your expertise and provide
                  opportunities for growth.
                </div>
                <div
                  className="tab-pane fz-14 fw-400 inter pra fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab">
                  Access a curated pool of highly skilled AI professionals with
                  expertise in cutting-edge technologies. Find AI projects that
                  align with your interests and showcase your capabilities.
                  Collaborate with clients who value your expertise and provide
                  opportunities for growth.
                </div>
              </div>
              <div className="about__btn d-flex align-items-center mt-40">
                <Link href="/employer-details" className="cmn--btn">
                  <span>Read More</span>
                  <span className="ps-1">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
                <div className="d-flex gap-2 align-items-center">
                  <Link
                    href="/https://www.youtube.com/watch?v=wXNv-x5zVgE&ab_channel=KnotebookNetwork%27s"
                    className="video-btn d-flex align-items-center justify-content-center">
                    <i className="bi bi-play"></i>
                  </Link>
                  <span className="fz-16 fw-500 inter pra">See More Info</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="about__threethumb">
              <div className="thumb1">
                <Image src={about2} alt="img" className=" " />
                <Image src={radius2} className="radius__small1  " alt="img" />
                <Image src={radius1} className="radius__small2  " alt="img" />
              </div>
              <div className="thumb2  ">
                <Image src={about1} alt="img" />
              </div>
              <div className="experience__box round16 d-flex align-items-center gap-3">
                <span className="d2 base2">30+</span>
                <span className="fz-18 fw-500 inter text-white">
                  Years of experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
