import errorImg from "../../../../../public/img/faq/error.png";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <section className="error__section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8">
            <div className="thum mb-40">
              <Image src={errorImg} className="w-100" alt="img" />
            </div>
            <div className="error__content text-center">
              <h2 className="title mb-24">Oops! Page Not Found</h2>
              <p className="ptext2 fz-16 fw-400 inter mb-40">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="cmn--btn">
                <span>Back To Home</span>
                <span>
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
