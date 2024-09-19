import Image from "next/image";
import React from "react";

const Perform = () => {
  return (
    <section className="perfoming__section per__shapeadd ralt overhid pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-7 col-xl-8">
            <div className="perfoming__threewrap">
              <div className="perfoming__content">
                <div className="section__title mb-40">
                  <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                    Building High-Performing Teams
                  </h4>
                  <h2 className="title mb-24  " data--duration="1.2s">
                    Unlock the Power of Exceptional AI Teams Created with Ease
                  </h2>
                  <p
                    className="ptext2 fz-16 fw-400 inter  "
                    data--duration="1.4s">
                    At our AI Freelancer Marketplace, we understand that success
                    stems from building amazing teams. We provide the platform
                    and resources to connect you
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6  ">
                    <div className="perfoming__item d-flex">
                      <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                        <Image
                          src="/img/custom-icon/search-hire.png"
                          alt="machine"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title mb-10">Hire Quickly</h5>
                        <p className="fz-14 fw-400 inter pra">
                          Explore AI-focused freelancer marketplaces where you
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  ">
                    <div className="perfoming__item d-flex">
                      <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                        <Image
                          src="/img/custom-icon/aibrain.png"
                          alt="machine"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title mb-10">Top Talent</h5>
                        <p className="fz-14 fw-400 inter pra">
                          Collaborate with AI research institutions and
                          universities
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  ">
                    <div className="perfoming__item d-flex">
                      <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                        <Image
                          src="/img/custom-icon/airound.png"
                          alt="machine"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title mb-10">Variety of skills</h5>
                        <p className="fz-14 fw-400 inter pra">
                          Proficiency in machine learning algorithms, including
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  ">
                    <div className="perfoming__item d-flex">
                      <div className="cmn__ibox transition d-flex align-items-center justify-content-center boxes1 round50">
                        <Image
                          src="/img/custom-icon/inter.png"
                          alt="machine"
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className="content">
                        <h5 className="title mb-10">Scalability and Agility</h5>
                        <p className="fz-14 fw-400 inter pra">
                          Strong foundation in data science concepts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="perfoming__thumbthree"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perform;
