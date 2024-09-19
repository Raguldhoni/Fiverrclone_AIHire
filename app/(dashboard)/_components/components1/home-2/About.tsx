import linebase from "../../../../../public/img/about/linebase.png";
import linebase2 from "../../../../../public/img/about/linebase2.png";
import about from "../../../../../public/img/about/about.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className="about__section bg__about overhid pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-7">
            <div className="abotus__content">
              <div className="section__title mb-40">
                <h4 className="sub ralt base2 mb-16  " data--duration="1.1s">
                  About us
                </h4>
                <h2 className="text-white mb-24  " data--duration="1.2s">
                  Connecting AI Talent with Opportunities
                </h2>
                <p
                  className="whitep fz-16 fw-400 inter  "
                  data--duration="1.4s">
                  At our AI Freelancer Marketplace, we understand that success
                  stems from building amazing teams. We provide the platform and
                  resources to connect you
                </p>
              </div>
              <div className="row g-4 mb-40">
                <div className="col-xxl-6 col-xl-9 col-lg-8 col-md-6  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={36}
                        height={36}
                        src="/img/categories/searchbase2.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="text-white mb-10">Access Opportunities</h5>
                      <p className="fz-14 fw-400 inter whitep">
                        Our marketplace provides a platform for talented AI
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-9 col-lg-8 col-md-6  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={36}
                        height={36}
                        src="/img/categories/aibrainbase2.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="text-white mb-10">Increased Visibility</h5>
                      <p className="fz-14 fw-400 inter whitep">
                        By joining our marketplace, talented individuals can
                        increase
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-9 col-lg-8 col-md-6  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={36}
                        height={36}
                        src="/img/categories/airoundbase2.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="text-white mb-10">Access to AI Talent</h5>
                      <p className="fz-14 fw-400 inter whitep">
                        Our marketplace provides a curated pool of talented AI
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-9 col-lg-8 col-md-6  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={36}
                        height={36}
                        src="/img/categories/qualitybase2.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="text-white mb-10">Quality Assurance</h5>
                      <p className="fz-14 fw-400 inter whitep">
                        We ensure a rigorous vetting process for talent on our
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/employer-details" className="cmn--btn2">
                <span>Explore More</span>
                <span className="ps-1">
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5  ">
            <div className="about__shapethumb">
              <Image src={about} alt="perfoming" />
              <div className="experience__box round16 d-flex align-items-center gap-3">
                <span className="d2 text-white">30+</span>
                <span className="fz-18 fw-500 inter text-white">
                  Years of experience
                </span>
              </div>
              <Image src={linebase} className="linebase__bottom" alt="img" />
              <Image src={linebase2} className="linebase__top" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
