import banner2 from "../../../../../public/img/bn/banner-thumb2.png";
import linedash3 from "../../../../../public/img/bn/line-dash3.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner__section bg__img2 ralt overhid ">
      <div className="container">
        <div className="banner__content__wrapper">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="banner__content banner__twospace banner__contenttwospace ralt">
                <h4 className="base2 mb-16  ">
                  Get Your AI Projects Completed
                </h4>
                <span className="d2 text-white mb-24 fw-600  ">
                  Find the Right{" "}
                  <Link href="#" className="hover">
                    AI
                  </Link>{" "}
                  Freelancers
                </span>
                <p className="fz-20 fw-400 text-white inter mb-40  ">
                  Join our community of businesses, entrepreneurs, and
                  freelancers who are passionate about AI and its potential
                </p>
                <div className="banner__btn2 d-flex align-items-center">
                  <Link href="/seller/raguldhoni/freelancer" className="cmn--btn2">
                    <span>Hire a Frelancer</span>
                  </Link>
                  <Link href="/seller/raguldhoni/freelancer" className="cmn--btn outline__btn2">
                    <span>Apply as a Freelancer</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="banner__thumb2 banner__thumbcustom d-none d-lg-block">
                <Image src={banner2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Element--> */}
      <Image src={linedash3} className="line__hotemtwo" alt="img" />
      {/* <!--Element--> */}
    </section>
  );
};

export default Banner;
