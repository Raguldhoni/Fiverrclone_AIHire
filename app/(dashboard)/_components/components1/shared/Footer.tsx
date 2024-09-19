import LogoDark from "../../../../../public/img/logo/logolisht.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer__section bgadd">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
              <div className="footer__item">
                <Link href="/" className="footer__logo mb-24 d-block">
                  <Image src={LogoDark} alt="logo" />
                </Link>
                <p className="pfz-16 inter fw-400 cef__pra mb-30">
                  Join our community of businesses, entrepreneurs, and
                  freelancers who are passionate about AI and its potential
                </p>
                <ul className="social d-flex align-items-center">
                  <li>
                    <Link href="#">
                      <i className="bi bi-facebook"></i>
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
                  <li>
                    <Link href="#">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-skype"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6  ">
              <div className="footer__item">
                <Link
                  href="#"
                  className="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                  Quick Link
                </Link>
                <ul className="quick__link">
                  <li>
                    <Link
                      href="/about"
                      className="fz-16 fw-400 inter cef__pra d-block">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="fz-16 fw-400 inter cef__pra d-block">
                      Browse Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="fz-16 fw-400 inter cef__pra d-block">
                      Find Talent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="fz-16 fw-400 inter cef__pra d-block">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="fz-16 fw-400 inter cef__pra d-block">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
              <div className="footer__item">
                <Link
                  href="#"
                  className="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                  Contact
                </Link>
                <ul className="footer__contact">
                  <li>
                    <Link
                      href="#"
                      className="fz-16 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                      <i className="bi bi-telephone-plus cmn__icon cmn__icon"></i>
                      <span>(316) 555-0116</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="fz-16 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                      <i className="bi bi-envelope-open cmn__icon"></i>
                      <span>info@example.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="fz-16 d-flex align-items-center gap-3 fw-400 inter cef__pra d-block">
                      <i className="bi bi-geo-alt cmn__icon"></i>
                      <span>31 Brandy Way, Sutton, SM2 6SE</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6  ">
              <div className="footer__item">
                <Link
                  href="#"
                  className="footer__title fz-24 fw-600 inter text-white mb-24 d-block">
                  Newsletter
                </Link>
                <p className="pfz-16 fw-400 inter cef__pra  mb-24">
                  Subscribe our newsletter to get our latest update & news
                </p>
                <form action="#0" className="d-flex align-items-center">
                  <input type="text" placeholder="Email address" />
                  <button type="submit" className="cmn--btn">
                    <span>
                      <i className="bi bi-cursor"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom d-flex align-items-center">
          <p className="fz-16 fw-400 inter text-white">
            Copyright &copy;  {new Date().getFullYear()} {" "}
            <Link href="#" className="hover">
              AIHire.
            </Link>{" "}
            Designed By{" "}
            <Link
              href="/https://themeforest.net/user/pixelaxis"
              className="base3">
              Pixelaxis
            </Link>
          </p>
          <ul className="help__support d-flex align-items-center">
            <li>
              <Link href="#" className="text-white fz-16 fw-400 inter">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white fz-16 fw-400 inter">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white fz-16 fw-400 inter">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
