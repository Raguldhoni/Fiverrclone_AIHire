import Image from "next/image";
import Link from "next/link";
import React from "react";
import SelectOption from "../shared/SelectOption";

const BlogDetails = () => {
  return (
    <section className="blog__detail__section sectionbg pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="balance__transfercard shadow1 p-8 bgwhite mb-40 round16">
              <div className="bt__one mb-20">
                <Image
                  src="/img/blog/blogb1.jpg"
                  alt="balance"
                  width={840}
                  height={500}
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
                <p className="fz-16 fw-400 bborderdash pb-24 mb-30 ptext2 inter">
                  AI freelancer marketplaces have indeed become a growing trend
                  in the gig economy. As businesses increasingly recognize the
                  value of AI and machine learning in their operations, there is
                  a growing demand for specialized AI talent to support their
                  projects.
                </p>
                <h3 className="title mb-20 inter fw-600">
                  Access to AI Expertise
                </h3>
                <p className="fz-16 fw-400 mb-30 ptext2 inter">
                  AI freelancer marketplaces serve as platforms that connect
                  businesses with skilled AI professionals who can provide their
                  expertise on a freelance basis. AI freelancer marketplaces
                  provide businesses with access to a diverse pool of AI experts
                  from around the world. These professionals possess specialized
                  knowledge in areas such as machine learning, natural language
                  processing, computer vision, and data analysis. Businesses can
                  find the right talent with the required skills and experience
                  for their AI projects.
                </p>
                <div className="access__wrap mb-30 d-flex align-items-center gap-2">
                  <div className="acess">
                    <Image
                      src="/img/blog/access1.jpg"
                      className="round16"
                      width={392}
                      height={306}
                      alt="img"
                    />
                  </div>
                  <div className="acess">
                    <Image
                      src="/img/blog/access2.jpg"
                      className="round16"
                      width={392}
                      height={306}
                      alt="img"
                    />
                  </div>
                </div>
                <p className="fz-16 fw-400 inter pra">
                  AI freelancer marketplaces offer businesses the flexibility to
                  scale their AI projects according to their needs. Whether
                  it&apos;s a short-term project or ongoing support, businesses
                  can easily find and hire AI freelancers based on their project
                  requirements. This flexibility allows businesses to adapt to
                  changing project scopes and timelines. Hiring AI freelancers
                  through marketplaces can be cost-effective compared to
                  traditional hiring methods. Businesses can find skilled
                  professionals at competitive rates and avoid the overhead
                  costs associated with full-time employees. Freelancers
                  typically work on a project basis, allowing businesses to
                  allocate their budget efficiently.
                </p>
                <div className="attachment__footertag mt-30 gap-3 flex-wrap d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="base fz-18 fw-500 inter">Tag -</span>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Machine Learning
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      AI Chatbot
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Virtual Assistan
                    </Link>
                  </div>
                  <div className="share d-flex align-items-center gap-2">
                    <span className="fz-18 fw-500 inter base">Share -</span>
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
                          <i className="bi bi-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="balance__transfercard shadow1 p-8 bgwhite mb-40 round16">
              <div className="comment__details__wrapper round16 bgwhite">
                <div className="d-flex align-items-center mb-30 flex-wrap justify-content-between">
                  <h4 className="inter title fw-600">22 Comments</h4>
                  <div className="sort__latest d-flex align-items-center gap-3">
                    <span className="fz-16 fw-400 inter ptext2">Sort By:</span>
                    <SelectOption
                      options={[
                        { value: "Newest", label: "Newest" },
                        { value: "Recent", label: "Recent" },
                      ]}
                      placeholder="Newest"
                      fullWidth={false}
                    />
                  </div>
                </div>
                <div className="review__commentbox mb-30">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                    <div className="d-flex pt-24 gap-3 align-items-center">
                      <Image
                        width={60}
                        height={60}
                        src="/img/testimonial/review3.png"
                        className="round50"
                        alt="re-img"
                      />
                      <div className="name__content">
                        <h5 className="title">
                          Darrell Steward
                          <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                            Software engineer
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24 pb-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                  <div className="discussion d-flex align-items-center ">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review1.png"
                      alt="review"
                      className="round50"
                    />
                    <input type="text" placeholder="Join the discussion..." />
                  </div>
                </div>
                <div className="review__commentbox mb-40">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="d-flex pt-24 gap-3 align-items-center">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review2.png"
                      className="round50"
                      alt="re-img"
                    />
                    <div className="name__content">
                      <h5 className="title">
                        Albert Flores
                        <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                          Customer success
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="review__commentbox mb-40">
                  <span className="fz-18 bborderdash pb-24 d-flex gap-3 align-items-cener fw-400 ptext2 inter">
                    Mar 03, 2023
                    <span className="dotactive ralt fz-16 ptext2 inter d-block">
                      09:01 am
                    </span>
                  </span>
                  <div className="pt-24 bborderdash pb-24">
                    <div className="ratting mb-8 d-flex align-items-center gap-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p className="fz-16 fw-400 inter title">
                      I have been using the AI Freelancer Marketplace for my
                      project needs, and I must say it has been an exceptional
                      experience. The platform&apos;s advanced AI algorithms and
                      intelligent matching system have connected me with
                      top-notch AI freelancers who possess the skills
                    </p>
                  </div>
                  <div className="d-flex pt-24 gap-3 align-items-center">
                    <Image
                      width={60}
                      height={60}
                      src="/img/testimonial/review3.png"
                      className="round50"
                      alt="re-img"
                    />
                    <div className="name__content">
                      <h5 className="title">
                        Annette Black
                        <span className="d-block mt-1 ptext2 inter fz-16 fw-400">
                          Personal assistant
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="cmn__replaybox pt-24">
                    <div className="replays d-flex align-items-center">
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-hand-thumbs-up base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">178</span>
                      </Link>
                      <Link
                        href="#"
                        className="align-items-center d-flex gap-2">
                        <i className="bi bi-chat-left-text base fz-20"></i>
                        <span className="fz-18 fw-400 inter base">Reply</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="cmn--btn d-flex align-items-center gap-2">
                  <span>See All Comments</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="trending__based bgwhite round16 shadow1">
              <h4 className="pb-24 title bborderdash mb-24">
                Write a Comments
              </h4>
              <form action="#0" className="writing__review">
                <div className="wrigt__grp">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter Name..." />
                </div>
                <div className="wrigt__grp">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="Enter Email..." />
                </div>
                <div className="wrigt__grp">
                  <label htmlFor="name">Comments</label>
                  <textarea
                    className="form-control"
                    placeholder="write your comments"
                    id="textAreaExample"
                    rows={4}></textarea>
                </div>
                <button className="cmn--btn mt-16">
                  <span>Submit Comments</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            <div className="blog__sidebar bsticy">
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

export default BlogDetails;
