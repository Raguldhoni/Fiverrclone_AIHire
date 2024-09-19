import timelyWork from "../../../../../public/img/choose/timely-work.png";
import Image from "next/image";

const HowItWork = () => {
  return (
    <section className="timelywork__section bgwhite overhid pt-120 pb-120">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-7">
            <div className="perfoming__content">
              <div className="section__title mb-40">
                <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                  How It’s Work
                </h4>
                <h2 className="title mb-24  " data--duration="1.2s">
                  Get Expert in Less Time and Our Work Process
                </h2>
                <p
                  className="ptext2 fz-16 fw-400 inter  "
                  data--duration="1.4s">
                  Our working process is designed to simplify complex tasks,
                  optimize operations, and maximize productivity. From initial
                  planning and ideation to execution
                </p>
              </div>
              <div className="row g-4">
                <div className="col-lg-12  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={24}
                        height={24}
                        src="/img/custom-icon/search-hire.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Post a Job</h5>
                      <p className="fz-14 fw-400 inter pra">
                        Create your free job posting and start receiving Quotes
                        within hours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={24}
                        height={24}
                        src="/img/custom-icon/aibrain.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Hire Freelancers</h5>
                      <p className="fz-14 fw-400 inter pra">
                        Compare the quotes you get and hire the best freelance
                        professionals for the job.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={24}
                        height={24}
                        src="/img/custom-icon/airound.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Get Work Done</h5>
                      <p className="fz-14 fw-400 inter pra">
                        Decide on how and when payments will be made and use
                        e-pay to collaborate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12  ">
                  <div className="perfoming__item d-flex">
                    <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                      <Image
                        width={24}
                        height={24}
                        src="/img/custom-icon/inter.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Make Secure Payments</h5>
                      <p className="fz-14 fw-400 inter pra">
                        Choose from multiple payment methods with SafePay
                        payment protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="timelywork__thumb">
              <Image src={timelyWork} alt="perfoming" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
