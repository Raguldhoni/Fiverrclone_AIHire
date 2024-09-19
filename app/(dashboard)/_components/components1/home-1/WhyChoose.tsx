import budget from "../../../../../public/img/choose/budget.png";
import workIcon from "../../../../../public/img/choose/work-icon.png";
import serviceIcon from "../../../../../public/img/choose/service-icon.png";
import happyIcon from "../../../../../public/img/choose/happy-icon.png";
import choose1 from "../../../../../public/img/choose/choose1.png";
import Image from "next/image";
import Link from "next/link";
const WhyChoose = () => {
  return (
    <section className="choose__section bg__blr ralt pb-120 pt-120">
      <div className="container">
        <div className="row g-4 flex-row-reverse justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="choose__content">
              <div className="section__title mb-40">
                <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                  Why Choose Us
                </h4>
                <h2 className="title mb-24  " data--duration="1.2s">
                  We Provide AI Related Service
                </h2>
                <p
                  className="ptext2 fz-16 fw-400 inter  "
                  data--duration="1.4s">
                  Our platform connects you with talented AI freelancers from
                  around the world who can help you with your projects and
                  tasks, no matter how big or small.
                </p>
              </div>
              <ul className="choose__listwrap">
                <li className="d-flex mb-24  " data--duration="1.7s">
                  <Image
                    src={workIcon}
                    alt="icon"
                    className="choose__icon fshadow bgwhite round50"
                  />
                  <span className="contentbox">
                    <span className="fz-20 d-block mb-1 fw-600 inter title">
                      Get High Quality Work
                    </span>
                    <span className="pra fz-14 fw-400 inter">
                      Hand your project over to a talented freelancer in
                      minutes, get long-lasting results.
                    </span>
                  </span>
                </li>
                <li className="d-flex  " data--duration="1.9s">
                  <Image
                    src={budget}
                    alt="icon"
                    className="choose__icon fshadow bgwhite round50"
                  />
                  <span className="contentbox">
                    <span className="fz-20 d-block mb-1 fw-600 inter title">
                      Stick to your budget service
                    </span>
                    <span className="pra fz-14 fw-400 inter">
                      Find the right service for every price. No hourly rates,
                      just project-based pricing.
                    </span>
                  </span>
                </li>
                <li className="d-flex  " data--duration="1.9s">
                  <Image
                    src={happyIcon}
                    alt="icon"
                    className="choose__icon fshadow bgwhite round50"
                  />
                  <span className="contentbox">
                    <span className="fz-20 d-block mb-1 fw-600 inter title">
                      Pay when you&apos;re happy
                    </span>
                    <span className="pra fz-14 fw-400 inter">
                      Upfront quotes mean no surprises. Payments only get
                      released when you approve.
                    </span>
                  </span>
                </li>
                <li className="d-flex  " data--duration="1.9s">
                  <Image
                    src={serviceIcon}
                    alt="icon"
                    className="choose__icon fshadow bgwhite round50"
                  />
                  <span className="contentbox">
                    <span className="fz-20 d-block mb-1 fw-600 inter title">
                      Count on 24/7 support
                    </span>
                    <span className="pra fz-14 fw-400 inter">
                      Our round-the-clock support team is available to help
                      anytime, anywhere.
                    </span>
                  </span>
                </li>
              </ul>
              <Link href="/service-grid" className="cmn--btn">
                <span>View services</span>
                <span className="ps-1">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="choose__thumb ralt">
              <Image src={choose1} alt="card" className="choose__mthumb" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
