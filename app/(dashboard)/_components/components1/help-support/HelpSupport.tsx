import Image from "next/image";
import Link from "next/link";
import React from "react";

const HelpSupport = () => {
  return (
    <>
      <section className="support__section bgadd pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="search__content">
                <div className="section__title text-center mb-60">
                  <h4 className="sub ralt base mb-16  ">Support</h4>
                  <h2 className="title mb-24  ">How can We help you?</h2>
                  <p className="ptext2 fz-16 fw-400 inter  ">
                    This can be provided through various channels, such as
                    phone, email, chat, or social media. Support can also refer
                    to the help
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="support__helpitem text-center bgwhite round16">
                <div className="icon round50 d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/working60.png"
                    alt="img"
                  />
                </div>
                <h5 className="title mb-16">Documentation</h5>
                <p className="fz-16 fw-400 mb-40 inter ptext2">
                  Support refers to providing assistance or help to someone or
                  something
                </p>
                <Link href="#" className="cmn--btn outline__btn">
                  <span className="d-flex align-items-center gap-2">
                    <span>Download</span>
                    <i className="bi bi-download base"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="support__helpitem text-center bgwhite round16">
                <div className="icon round50 d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/working60.png"
                    alt="img"
                  />
                </div>
                <h5 className="title mb-16">Change Log</h5>
                <p className="fz-16 fw-400 mb-40 inter ptext2">
                  Support refers to providing assistance or help to someone or
                  something
                </p>
                <Link href="#" className="cmn--btn outline__btn">
                  <span className="d-flex align-items-center gap-2">
                    <span>Download</span>
                    <i className="bi bi-download base"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="support__helpitem text-center bgwhite round16">
                <div className="icon round50 d-flex align-items-center justify-content-center">
                  <Image
                    width={60}
                    height={60}
                    src="/img/custom-icon/working60.png"
                    alt="img"
                  />
                </div>
                <h5 className="title mb-16">Help process</h5>
                <p className="fz-16 fw-400 mb-40 inter ptext2">
                  Support refers to providing assistance or help to someone or
                  something
                </p>
                <Link href="#" className="cmn--btn outline__btn">
                  <span className="d-flex align-items-center gap-2">
                    <span>Download</span>
                    <i className="bi bi-download base"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="help__search pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="search__content">
                <div className="section__title text-center mb-40">
                  <h4 className="sub ralt base mb-16  ">Search</h4>
                  <h2 className="title mb-24  ">
                    Need any help, then search here
                  </h2>
                  <p className="ptext2 fz-16 fw-400 inter  ">
                    Support refers to providing assistance or help to someone or
                    something. In the context of customer service, support
                    typically involves
                  </p>
                </div>
                <div className="promot__coded">
                  <form
                    action="#"
                    className="d-flex align-items-center jus
                  ">
                    <input type="text" placeholder="Promo code" />
                    <button className="cmn--btn">
                      <span>Apply</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSupport;
