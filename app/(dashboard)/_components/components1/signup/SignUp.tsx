import signup from "../../../../../public/img/faq/signup.png";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className="signup__section ralt bg__all pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="signup__boxes round16 border">
              <h3 className="title mb-16">Let’s Get Started!</h3>
              <p className="fz-16 title fw-400 inter mb-40">
                Please enter your email address to join us
              </p>
              <form action="#0" className="write__review">
                <div className="row g-4 ">
                  <div className="col-lg-6">
                    <div className="frm__grp">
                      <label
                        htmlFor="name"
                        className="fz-18 fw-500 inter title mb-16">
                        First Nmae
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter First Name..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="frm__grp">
                      <label
                        htmlFor="lname"
                        className="fz-18 fw-500 inter title mb-16">
                        Last Nmae
                      </label>
                      <input
                        type="text"
                        id="lname"
                        placeholder="Enter Last Name..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="enamee"
                        className="fz-18 fw-500 inter title mb-16">
                        Enter Your Email ID
                      </label>
                      <input
                        type="text"
                        id="enamee"
                        placeholder="Enter Your Email..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="frm__grp">
                      <label
                        htmlFor="pas"
                        className="fz-18 fw-500 inter title mb-16">
                        Enter Your Password
                      </label>
                      <input
                        type="text"
                        id="pas"
                        placeholder="Enter Your Password..."
                      />
                    </div>
                  </div>
                  <p className="fz-16 fw-400 title inter">
                    Do you have an account?{" "}
                    <Link href="/singin" className="base">
                      Signin
                    </Link>
                  </p>
                  <div className="col-lg-6">
                    <div className="frm__grp">
                      <button
                        type="submit"
                        className="cmn--btn basebor outline__btn">
                        <span>Sign Up</span>
                        <span>
                          <i className="bi bi-arrow-up-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="signup__thumb">
              <Image src={signup} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
