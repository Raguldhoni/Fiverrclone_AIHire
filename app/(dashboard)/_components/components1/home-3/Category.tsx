import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <section className="trending__categories pb-120 sectionbg2 pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-40">
              <h4 className="sub ralt base mb-16  " data--duration="0.5s">
                Categorires
              </h4>
              <h2 className="title mb-24  " data--duration="0.7s">
                Discover The Trending Top Categories
              </h2>
              <p className="ptext2 fz-16 fw-400 inter  " data--duration="0.9s">
                Our AI freelancer marketplace is more than just a platform.
                It&apos;s a community of professionals who are passionate about
                AI
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-xl-6 col-lg-6">
            <div className="trending__catewrapper">
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/ainlp.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Travel cars
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/data-scient.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Data Scientists
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/aibraind.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Machine Learning
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/deep-learning.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Deep Learning
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="trending__catewrapper">
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/robotic.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Robotics Engineer
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/airound.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      AI Consultants
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/chatbot.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Chatbot Developers
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
              <div className="trendingcate__items d-flex align-items-center  ">
                <div className="icon d-flex align-items-center justify-content-center boxes1 round50">
                  <Image
                    width={60}
                    height={60}
                    src="/img/categories/data-analysis.png"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h4 className="mb-10">
                    <Link href="/featuredjob" className="title">
                      Data Analysts
                    </Link>
                  </h4>
                  <p className="fz-16 fw-400 inter title">
                    We&apos;ve organized our cards into categories to help you
                    find the perfect match for your lifestyle
                  </p>
                </div>
                <Link
                  href="/featuredjob"
                  className="arrow round50 d-flex justify-content-center align-items-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-40">
          <Link href="/featuredjob" className="cmn--btn outline__btn">
            <span>See All Categories</span>
            <span className="ps-1">
              <i className="bi bi-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
