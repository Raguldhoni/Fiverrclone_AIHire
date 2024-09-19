import homethumb1 from "../../../../../public/img/bn/home3-alithumb1.jpg";
import homethumb2 from "../../../../../public/img/bn/home3-alithumb2.jpg";
import lineDash from "../../../../../public/img/bn/line-dash.png";
import lineDash3 from "../../../../../public/img/bn/line-dash3.png";
import taskIcon from "../../../../../public/img/bn/task-icon.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner__section  bg__img3 ralt overhid ">
      {/* <!-- Header Here --> */}

      {/* <!-- Header End --> */}

      <div className="container">
        <div className="banner__content__wrapper pt-50 pb-50">
          <div className="row justify-content-center align-items-center">
            <div className="col-xxl-8 col-xl-8 col-lg-10">
              <div className="banner__content banner__threespace text-center ralt">
                <h4 className="base2 mb-16  ">Empower Your AI Journey</h4>
                <span className="d1 text-white mb-24 fw-600  ">
                  Discover AI Freelance Collaboration
                </span>
                <form
                  action="#"
                  className="search__component mb-24 d-flex align-items-center justify-content-between  ">
                  <input type="text" placeholder="What you're looking for?" />
                  <button
                    type="button"
                    className="cmn--btn d-flex align-items-center">
                    <span>Search</span>
                    <span>
                      <i className="bi bi-search fz-12"></i>
                    </span>
                  </button>
                </form>
                <div className="banner__aitag d-flex justify-content-center align-items-center  ">
                  <span className="aitag__text fz-16 fw-400 inter text-white">
                    Popular Searches
                  </span>
                  <Link
                    href="#"
                    className="praborder home3bg round100 fz-12 fw-400 inter text-white">
                    Machine Learning
                  </Link>
                  <Link
                    href="#"
                    className="praborder home3bg round100 fz-12 fw-400 inter text-white">
                    NLP Specialists
                  </Link>
                  <Link
                    href="#"
                    className="praborder home3bg round100 fz-12 fw-400 inter text-white">
                    Data Scientists
                  </Link>
                  <Link
                    href="#"
                    className="praborder home3bg round100 fz-12 fw-400 inter text-white">
                    AI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Element--> */}
      <Image src={homethumb1} alt="img" className="home3__elementleft" />
      <Image src={homethumb2} alt="img" className="home3__elementright" />
      <Image src={lineDash} alt="img" className="home3__linedash" />
      <Image src={lineDash3} alt="img" className="home3__linedash2" />
      <Image src={taskIcon} alt="img" className="home3__shapetast" />
      {/* <!--Element--> */}
    </section>
  );
};

export default Banner;
