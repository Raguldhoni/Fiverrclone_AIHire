import React from "react";
import Pagination from "../shared/Pagination";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="blog__sections sectionbg pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
              <div className="bt__one mb-20">
                <Image
                  width={840}
                  height={500}
                  src="/img/blog/blogb1.jpg"
                  alt="balance"
                  className="round16 w-100"
                />
              </div>
              <div className="blog__content">
                <ul className="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle ptext2"></i>
                    By Admin
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-calendar3 ptext2"></i>
                    12 Jan, 2023
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-chat-text ptext2"></i>
                    32 Comments
                  </li>
                </ul>
                <h3 className="title mb-24">
                  <Link href="/blog-details" className="title">
                    AI Freelancer Marketplaces: A Growing Trend in the Gig
                    Economy
                  </Link>
                </h3>
                <p className="fz-16 fw-400 mb-40 ptext2 inter">
                  This article explores the rise of AI freelancer marketplaces
                  and how they are transforming the way businesses access AI
                  talent. It discusses the benefits, challenges...
                </p>
                <Link
                  href="/blog-details"
                  className="cmn--btn d-flex align-items-center gap-2 outline__btn">
                  <span>Read More</span>
                  <span className="mt-1">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
              <div className="bt__one mb-20">
                <Image
                  width={840}
                  height={500}
                  src="/img/blog/blogb2.jpg"
                  alt="balance"
                  className="round16 w-100"
                />
              </div>
              <div className="blog__content">
                <ul className="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle ptext2"></i>
                    By Admin
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-calendar3 ptext2"></i>
                    12 Jan, 2023
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-chat-text ptext2"></i>
                    32 Comments
                  </li>
                </ul>
                <h3 className="title mb-24">
                  <Link href="/blog-details" className="title">
                    Top AI Freelancer Marketplace Reports Record Growth in Q3
                  </Link>
                </h3>
                <p className="fz-16 fw-400 mb-40 ptext2 inter">
                  This article explores the rise of AI freelancer marketplaces
                  and how they are transforming the way businesses access AI
                  talent. It discusses the benefits, challenges...
                </p>
                <Link
                  href="/blog-details"
                  className="cmn--btn d-flex align-items-center gap-2 outline__btn">
                  <span>Read More</span>
                  <span className="mt-1">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="balance__transfercard shadow1 p-8 bgwhite mb-24 round16">
              <div className="bt__one mb-20">
                <Image
                  width={840}
                  height={500}
                  src="/img/blog/blogb3.jpg"
                  alt="balance"
                  className="round16 w-100"
                />
              </div>
              <div className="blog__content">
                <ul className="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle ptext2"></i>
                    By Admin
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-calendar3 ptext2"></i>
                    12 Jan, 2023
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-chat-text ptext2"></i>
                    32 Comments
                  </li>
                </ul>
                <h3 className="title mb-24">
                  <Link href="/blog-details" className="title">
                    AI Freelancer Marketplace Introduces New Features to Enhance
                    User Experience
                  </Link>
                </h3>
                <p className="fz-16 fw-400 mb-40 ptext2 inter">
                  This article explores the rise of AI freelancer marketplaces
                  and how they are transforming the way businesses access AI
                  talent. It discusses the benefits, challenges...
                </p>
                <Link
                  href="/blog-details"
                  className="cmn--btn d-flex align-items-center gap-2 outline__btn">
                  <span>Read More</span>
                  <span className="mt-1">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="balance__transfercard shadow1 p-8 bgwhite round16">
              <div className="bt__one mb-20">
                <Image
                  width={840}
                  height={500}
                  src="/img/blog/blogb4.jpg"
                  alt="balance"
                  className="round16 w-100"
                />
              </div>
              <div className="blog__content">
                <ul className="blog__addmin flex-wrap mb-24 d-flex align-items-center">
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-person-circle ptext2"></i>
                    By Admin
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-calendar3 ptext2"></i>
                    12 Jan, 2023
                  </li>
                  <li className="fz-18 ralt fw-400 inter ptext2 d-flex align-items-center gap-2">
                    <i className="bi bi-chat-text ptext2"></i>
                    32 Comments
                  </li>
                </ul>
                <h3 className="title mb-24">
                  <Link href="/blog-details" className="title">
                    AI Freelancers on the Rise: How Businesses are Leveraging AI
                    Talent
                  </Link>
                </h3>
                <p className="fz-16 fw-400 mb-40 ptext2 inter">
                  This article explores the rise of AI freelancer marketplaces
                  and how they are transforming the way businesses access AI
                  talent. It discusses the benefits, challenges...
                </p>
                <Link
                  href="/blog-details"
                  className="cmn--btn d-flex align-items-center gap-2 outline__btn">
                  <span>Read More</span>
                  <span className="mt-1">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <Pagination />
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="blog__sidebar">
              <div className="blog__common__item bgwhite round16 mb-24">
                <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                  Search
                </h4>
                <form
                  action="#0"
                  className="d-flex mb-24 filter__search align-items-center justify-content-between">
                  <input type="text" placeholder="Search" />
                  <i className="bi bi-search"></i>
                </form>
              </div>
              <div className="blog__common__item bgwhite round16 mb-24">
                <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                  Category
                </h4>
                <ul className="blog__categories">
                  <li>
                    <Link
                      href="/blog-details"
                      className="d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={24}
                          height={24}
                          src="/img/custom-icon/airound.png"
                          alt="round"
                        />
                      </span>
                      <span className="fz-18 fw-500 title inter">
                        All Categories
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={24}
                          height={24}
                          src="/img/custom-icon/aimacine.png"
                          alt="round"
                        />
                      </span>
                      <span className="fz-18 fw-500 title inter">
                        NLP Specialists
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={24}
                          height={24}
                          src="/img/custom-icon/inter.png"
                          alt="round"
                        />
                      </span>
                      <span className="fz-18 fw-500 title inter">
                        Data Scientists
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={24}
                          height={24}
                          src="/img/custom-icon/aibrain.png"
                          alt="round"
                        />
                      </span>
                      <span className="fz-18 fw-500 title inter">
                        Machine Learning
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={24}
                          height={24}
                          src="/img/custom-icon/deep-learning.png"
                          alt="round"
                        />
                      </span>
                      <span className="fz-18 fw-500 title inter">
                        Deep Learning
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={24}
                          height={24}
                          src="/img/custom-icon/umacine.png"
                          alt="round"
                        />
                      </span>
                      <span className="fz-18 fw-500 title inter">
                        Chatbot Developers
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blog__common__item bgwhite round16 mb-24">
                <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                  Recent Posts
                </h4>
                <ul className="recent__post">
                  <li>
                    <Link
                      href="/blog-details"
                      className="recent___item bborderdash mb-24 pb-24 d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={100}
                          height={100}
                          src="/img/blog/re1.jpg"
                          alt="round"
                        />
                      </span>
                      <span className="fz-20 post__content fw-600 title inter">
                        AI Freelancer Marketplace Launches
                        <span className="d-block fz-18 fw-400 base inter">
                          23 Mar, 2023
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="recent___item mb-24 bborderdash pb-24 d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={100}
                          height={100}
                          src="/img/blog/re2.jpg"
                          alt="round"
                        />
                      </span>
                      <span className="fz-20 post__content fw-600 title inter">
                        AI Freelancer Marketplace Expands
                        <span className="d-block fz-18 fw-400 base inter">
                          23 Mar, 2023
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="recent___item mb-24 bborderdash pb-24 d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={100}
                          height={100}
                          src="/img/blog/re3.jpg"
                          alt="round"
                        />
                      </span>
                      <span className="fz-20 post__content fw-600 title inter">
                        AI Freelancer Marketplace Facilitates
                        <span className="d-block fz-18 fw-400 base inter">
                          23 Mar, 2023
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-details"
                      className="recent___item d-flex align-items-center">
                      <span className="cateicon">
                        <Image
                          width={100}
                          height={100}
                          src="/img/blog/re4.jpg"
                          alt="round"
                        />
                      </span>
                      <span className="fz-20 post__content fw-600 title inter">
                        AI Freelancer Marketplace Launches
                        <span className="d-block fz-18 fw-400 base inter">
                          23 Mar, 2023
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blog__common__item bgwhite round16">
                <h4 className="head fw-600 bborderdash title pb-24 mb-24">
                  Follow Our Journey
                </h4>
                <ul className="social d-flex align-items-center">
                  <li>
                    <Link href="#">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="bi bi-twitch"></i>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
