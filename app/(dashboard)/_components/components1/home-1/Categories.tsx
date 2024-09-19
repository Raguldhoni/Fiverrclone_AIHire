import { Button } from "@/components/ui/button";
import { TooltipProvider } from "../../tooltip-provider";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";


const Categories = () => {
  const searchParams = useSearchParams();
const favorites = searchParams.get("favorites");
  return (
    <section className="categoris__section pt-120 pb-120  bgwhite">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="section__title text-center mb-60">
              <h4 className="sub ralt base mb-16  " data--duration="1.1s">
                Categorires
              </h4>
              <h2 className="title mb-24  " data--duration="1.2s">
                Trending Top Categorires
              </h2>
              <p className="ptext2 fz-16 fw-400 inter  " data--duration="1.4s">
                Our platform connects you with talented AI freelancers from
                around the world who can help you with your projects and tasks,
                no matter how big or small.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-0">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bright bborder  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/aimacine.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                <TooltipProvider text="Favorites">
                            <Button
                                asChild
                                variant={favorites ? "secondary" : "ghost"}
                                size="lg"
                                className="p-4"
                            >
                                <Link
                                    href={{
                                        pathname: "/raguldhoni/jh73v4rtw30jp0dh6f72cexxe5708b13",
                                        
                                    }}
                                    className="p-0"
                                >NLP Specialist
                                    {/* <Heart className={favorites ? "fill-black" : ""} /> */}
                                </Link>
                            </Button>
                        </TooltipProvider>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bright bborder  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/inter.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    Data Scientists
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bright bborder  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/aibrain.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    Machine Learning
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bborder  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/deep-learning.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    Deep Learning
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bright  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/robotic.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    Robotics Engineer
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bright  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/airound.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    AI Consultants
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite bright  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/umacine.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    Chatbot Developers
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="cate__items bgwhite  bgwhite">
              <div className="icon m-auto d-flex align-items-center justify-content-center boxes1 round50">
                <Image
                  width={24}
                  height={24}
                  src="/img/custom-icon/data-analysis.png"
                  alt="machine"
                />
              </div>
              <div className="content text-center mt-30">
                <h4 className="mb-10 transition">
                  <Link href="/service-grid" className="title">
                    Data Analysts
                  </Link>
                </h4>
                <p className="fz-16 fw-400 inter ptext2 mb-30 transition">
                  Our AI freelancer marketplace is more than just a platform
                </p>
                <Link
                  href="/service-grid"
                  className="arrow m-auto boxes1 round50 d-flex align-items-center justify-content-center">
                  <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-40">
          <Link href="/service-grid" className="cmn--btn outline__btn">
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

export default Categories;
