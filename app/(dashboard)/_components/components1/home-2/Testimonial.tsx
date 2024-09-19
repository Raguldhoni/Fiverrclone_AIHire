"use client";
import Image from "next/image";
// import { Autoplay, Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section className="testimonial__sectiontwo ralt pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section__title ralt text-center mb-40">
              <h4 className="sub2 d-inline ralt base  ">
                Client Success Stories
              </h4>
              <h2 className="title mt-16 mb-24  ">
                Hear What Our Customers Have to Say
              </h2>
              <p className="pra pfz-16 fw-400 inter  ">
                Discover the hottest and most sought-after services that are
                currently trending on our AI Freelancer
              </p>
            </div>
          </div>
        </div>
        {/* <Swiper
          loop
          autoplay
          modules={[Navigation, Autoplay]}
          slidesPerView="auto"
          centeredSlides={false}
          centeredSlidesBounds={false}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          className="testimonial__slidetwo">
          <SwiperSlide>
            <div className="testimonial__items test__spacetwo shadow1 bgwhite round16">
              <div className="quote round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-quote pra"></i>
              </div>
              <div className="ratting mb-16 mt-24 d-flex align-items-center gap-2">
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
              </div>
              <p className="ptext3 inter fz-20 fw-400 mb-40">
                Joining the AI Freelancer Marketplace has been a game-changer
                for my business
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="thumb">
                  <Image
                    width={60}
                    height={60}
                    src="/img/testimonial/us1.png"
                    alt="annette"
                  />
                </div>
                <div className="cont">
                  <span className="fz-20 fw-600 inter ptext">
                    Annette Black
                  </span>
                  <span className="fz-16 d-block ptext fw-400 inter">
                    Actor
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__items test__spacetwo shadow1 bgwhite round16">
              <div className="quote round50 d-flex align-items-center justify-content-center ">
                <i className="bi bi-quote pra"></i>
              </div>
              <div className="ratting mb-16 mt-24 d-flex align-items-center gap-2">
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
              </div>
              <p className="ptext3 inter fz-20 fw-400 mb-40">
                Joining the AI Freelancer Marketplace has been a game-changer
                for my business
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="thumb">
                  <Image
                    width={60}
                    height={60}
                    src="/img/testimonial/us2.png"
                    alt="annette"
                  />
                </div>
                <div className="cont">
                  <span className="fz-20 fw-600 inter ptext">Jenny Wilson</span>
                  <span className="fz-16 d-block ptext fw-400 inter">
                    Musician
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__items test__spacetwo shadow1 bgwhite round16">
              <div className="quote round50 d-flex align-items-center justify-content-center">
                <i className="bi bi-quote pra"></i>
              </div>
              <div className="ratting mb-16 mt-24 d-flex align-items-center gap-2">
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
              </div>
              <p className="ptext3 inter fz-20 fw-400 mb-40">
                Joining the AI Freelancer Marketplace has been a game-changer
                for my business
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="thumb">
                  <Image
                    width={60}
                    height={60}
                    src="/img/testimonial/us3.png"
                    alt="annette"
                  />
                </div>
                <div className="cont">
                  <span className="fz-20 fw-600 inter ptext">
                    Kathryn Murphy
                  </span>
                  <span className="fz-16 d-block ptext fw-400 inter">
                    Software engineer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__items test__spacetwo shadow1 bgwhite round16">
              <div className="quote round50 justify-content-center d-flex align-items-center">
                <i className="bi bi-quote pra"></i>
              </div>
              <div className="ratting mb-16 mt-24 d-flex align-items-center gap-2">
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
                <i className="bi bi-star-fill ratting"></i>
              </div>
              <p className="ptext3 inter fz-20 text-center fw-400 mb-40">
                Joining the AI Freelancer Marketplace has been a game-changer
                for my business
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="thumb">
                  <Image
                    width={60}
                    height={60}
                    src="/img/testimonial/us3.png"
                    alt="annette"
                  />
                </div>
                <div className="cont">
                  <span className="fz-20 fw-600 inter ptext">
                    Kathryn Murphy
                  </span>
                  <span className="fz-16 d-block ptext fw-400 inter">
                    Software engineer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-nav d-flex justify-content-center">
            <button className="swiper-prev">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="swiper-next">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </Swiper> */}
      </div>
    </section>
  );
};

export default Testimonial;
