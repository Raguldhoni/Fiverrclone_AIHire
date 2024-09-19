import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="banner__breadcumn ralt">
        <div className="breadcumnd__wrapper">
          <div className="container">
            <div className="profile__wrappers refer__friendwrapper">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                  <div className="breadcumnd__content">
                    <span className="d4 mb-24">Refer a Friend</span>
                    <ul className="breadcun__list flex-wrap gap-1 d-flex align-items-center">
                      <li>
                        <Link
                          href="/"
                          className="fz-16 fw-400 inter text-white">
                          Home
                        </Link>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="fz-16 fw-400 inter text-white">
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                      </li>
                      <li>
                        <Link href="#" className="fz-16 fw-400 inter base2">
                          Refer a Friend
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                  <div className="logout__btn">
                    <Link href="#" className="cmn--logout">
                      <span>
                        <i className="bi bi-box-arrow-right"></i>
                      </span>
                      <span className="fz-16 fw-600 inter">Log out</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="referfriend__section pt-120 pb-120">
        <div className="container__customize pt-100 pb-120 round16">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="overview__gitwrapper bgwhite round16 border">
                  <h3 className="pb-40 bborderdash mb-40 title">
                    Invite Friends
                  </h3>
                  <span className="fz-20 fw-500 title inter mb-10 d-block">
                    Add Email
                  </span>
                  <p className="fz-14 title mb-24 inter">
                    Separate emails with commas
                  </p>
                  <div className="d-flex p-8 round100 mb-30 border align-items-center justify-content-between">
                    <input
                      type="text"
                      className="w-100 border-0 send__mail title"
                      placeholder="Enter Email"
                    />
                    <button type="submit" className="cmn--btn friend__btn">
                      <span>Send Email</span>
                    </button>
                  </div>
                  <span className="fz-20 fw-500 title inter mb-10 d-block">
                    Your Invite Link
                  </span>
                  <p className="fz-14 title mb-24 inter">
                    You Can Share with your friends
                  </p>
                  <div className="copy-text justify-content-between">
                    <input
                      type="text"
                      className="text"
                      value="https://www.aihire.com/abcd"
                    />
                    <button>Copy</button>
                  </div>
                  <span className="fz-20 mt-30 fw-500 inter d-block title mb-10">
                    Share Via Social
                  </span>
                  <p className="fz-16 fw-400 mb-24 inter pra">
                    · Share with social media
                  </p>
                  <ul className="social socila__shape d-flex align-items-center">
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
              <div className="col-lg-4">
                <div className="start__definingbar">
                  <div className="defining__box round16 border bgwhite">
                    <h3 className="title mb-24">
                      Invite Friends &You Both Get Up To $100
                    </h3>
                    <span className="fz-16 fw-400 inter pra">
                      Introduce your friends to the easiest way to get things
                      done
                    </span>
                    <div className="man__matching">
                      <Image
                        height={176}
                        width={352}
                        src="/img/details/defining-friend.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
