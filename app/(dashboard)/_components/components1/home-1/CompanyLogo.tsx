"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper";
// // Import Swiper styles
// import "swiper/css";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <section className="company__section bgwhite pb-60 pt-60">
      <div className="container">
        {/* <Swiper
          loop={true}
          slidesPerView="auto"
          autoplay={{
            delay: 1,
          }}
          speed={5000}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 5,
            },
            991: {
              slidesPerView: 6,
            },
            1199: {
              slidesPerView: 6,
            },
            1499: {
              slidesPerView: 6,
            },
          }}
          // modules={[Autoplay]}
          className="company__wrap">
          <SwiperSlide className="company__logo">
            <Image
              width={200}
              height={40}
              src="/img/company/company1.png"
              alt="company"
            />
          </SwiperSlide>
          <SwiperSlide className="company__logo">
            <Image
              width={200}
              height={40}
              src="/img/company/company2.png"
              alt="company"
            />
          </SwiperSlide>
          <SwiperSlide className="company__logo">
            <Image
              width={200}
              height={40}
              src="/img/company/company3.png"
              alt="company"
            />
          </SwiperSlide>
          <SwiperSlide className="company__logo">
            <Image
              width={200}
              height={40}
              src="/img/company/company4.png"
              alt="company"
            />
          </SwiperSlide>
          <SwiperSlide className="company__logo">
            <Image
              width={200}
              height={40}
              src="/img/company/company5.png"
              alt="company"
            />
          </SwiperSlide>
          <SwiperSlide className="company__logo">
            <Image
              width={200}
              height={40}
              src="/img/company/company6.png"
              alt="company"
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default CompanyLogo;
