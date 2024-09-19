import Image from "next/image";
import howWork from "../../../../../public/img/service/working-perfomr.png";
const HowItWork = () => {
  return (
    <section className="working_thresection bgwhite ralt overhid pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between g-4 flex-row-reverse">
          <div className="col-xxl-6 col-xl-7 col-lg-7">
            <div className="perfoming__content">
              <div className="section__title mb-40">
                <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                  How It&apos;s Work
                </h4>
                <h2 className="title mb-24  " data--duration="1.2s">
                  Get Proficient in Less Time with Our Process
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
                        src="/img/custom-icon/post-job.png"
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
                        src="/img/custom-icon/freelancer.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Hire Pfreelancers</h5>
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
                        src="/img/custom-icon/working-done.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Get Work Done</h5>
                      <p className="fz-14 fw-400 inter pra">
                        Proficiency in machine learning algorithms, including
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
                        src="/img/custom-icon/payment-done.png"
                        alt="machine"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb-10">Make Secure Payments</h5>
                      <p className="fz-14 fw-400 inter pra">
                        Strong foundation in data science concepts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="working__perform">
              <Image src={howWork} className="w-100" alt="ser" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
