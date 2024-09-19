"use client";
import Image from "next/image";
// import { Autoplay, Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Link from "next/link";

const Freelancer = () => {
  return (
    <section className="freelancer__sectiontwo ralt pt-120 pb-120">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="section__title ralt mb-40">
              <h4 className="sub ralt base2 mb-16  " data--duration="1.1s">
                Top-Rated Freelancers
              </h4>
              <h2 className="text-white  " data--duration="1.2s">
                Unleash the Power of the Best
              </h2>
            </div>
          </div>
          <div className="col-lg-4 position-relative">
            <div className="nav-2 d-flex justify-content-lg-end">
              <button className="swiper-prev">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button className="swiper-next">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <Swiper
          loop
          autoplay
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView="auto"
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{
            el: ".swiper-dots",
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1199: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1399: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="freelancer__wrapper">
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 1
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f1.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Bessie Cooper
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 2
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f2.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Courtney Henry
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 3
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f3.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Darlene Robertson
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 1
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f4.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Arilene McCocy
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 1
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f1.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Bessie Cooper
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 2
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f2.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Courtney Henry
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 3
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f3.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Darlene Robertson
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 1
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f4.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Arilene McCocy
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 1
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f1.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Bessie Cooper
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="frelancer__item shadow2 round16 bgwhite">
            <div className="d-flex mb-24 align-items-center justify-content-between">
              <div className="d-flex gap-2 fz-16 fw-600 inter title">
                <i className="bi bi-star-fill ratting"></i>
                5.0
                <span className="fz-16 fw-400 inter pra">(34)</span>
              </div>
              <span className="success2 d-block fz-16 fw-600 inter">
                Level 2
              </span>
            </div>
            <Link href="/freelancer" className="thumbs m-auto">
              <Image
                width={140}
                height={140}
                src="/img/frelancer/f2.png"
                alt="service"
              />
            </Link>
            <h5 className="mt-24 mb-20">
              <Link href="/freelancer" className="title">
                Courtney Henry
              </Link>
            </h5>
            <div className="d-flex bborderdash pb-20 align-items-center justify-content-between">
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-stopwatch"></i>
                Full-Time
              </div>
              <div className="d-flex fz-16 fw-400 gap-2 inter pra align-items-center">
                <i className="bi bi-bar-chart"></i>
                6-9 Years
              </div>
            </div>
            <div className="d-flex align-items-center mt-20 justify-content-between">
              <span className="fz-18 fw-600 inter base">$32 /hr</span>
              <div className="cmn__ibox boxes1 round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-chat-right-text title fz-16"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default Freelancer;
