import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="banner__breadcumn ralt">
        <div className="breadcumnd__wrapper">
          <div className="container">
            <div className="profile__wrapper">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                  <div className="breadcumnd__content">
                    <span className="d4 mb-24">Chat Us</span>
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
                          Chat us
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

      <section className="chat__section pb-120">
        <div className="container">
          <div className="chat__uswrapper border bgwhite overhid round16">
            <div className="row g-0 p-0 justify-content-center">
              <div className="col-xl-4 col-lg-4">
                <div className="chat__user__wrapper">
                  <div className="cheat__user d-flex mb-30 align-items-center justify-content-between">
                    <Image
                      src="/img/bn/profile.jpg"
                      className="uericon round50"
                      width={60}
                      height={60}
                      alt="icon"
                    />
                    <div className="edit__user d-flex align-items-center gap-3">
                      <Link href="#">
                        <i className="bi bi-pencil title fz-18"></i>
                      </Link>
                      <div className="dropend">
                        <button
                          type="button"
                          className="dropdown-btn bg-transparent"
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <i className="bi bi-three-dots-vertical fz-18 title"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="droplist d-flex align-items-center gap-2"
                              href="#">
                              <i className="bi bi-person-dash"></i>
                              <span>Unfollow</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="droplist d-flex align-items-center gap-2"
                              href="#">
                              <i className="bi bi-x-circle"></i>
                              <span>Hide Contact</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chat__search border mb-30 d-flex align-items-center justify-content-between">
                    <input type="text" placeholder="Search" />
                    <i className="bi bi-search search__icon"></i>
                  </div>
                  <div className="chat__llist">
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar red">
                          <Image
                            width={60}
                            height={60}
                            className="avatar-img"
                            src="/img/testimonial/name1.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="m-0 fz-16 d-block title mb-1 fw-600">
                            {" "}
                            Theresa Webb{" "}
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400">
                            just ideas for next time
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="bg d-flex align-items-center justify-content-center">
                          1
                        </span>
                        <span className="mnutes mactive fz-12 inter fw-400">
                          4m
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar red">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name2.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="m-0 fz-16 d-block mb-1 title fw-600">
                            {" "}
                            Bessie Cooper{" "}
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400">
                            omg, this is amazing
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="bg d-flex align-items-center justify-content-center">
                          27
                        </span>
                        <span className="mnutes mactive fz-12 inter fw-400">
                          3m
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar red">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name3.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="m-0 fz-16 d-block mb-1 title fw-600">
                            {" "}
                            Ralph Edwards{" "}
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400">
                            You : perfect!
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="bg d-flex align-items-center justify-content-center">
                          7
                        </span>
                        <span className="mnutes mactive fz-12 inter fw-400">
                          32m
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar gactive">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name4.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="fz-16 title inter d-block mb-1 fw-600">
                            Jerome Bell
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400 prag">
                            woohoooo
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="mnutes prag fz-14 inter fw-400">
                          1h
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar gactive">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name5.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="fz-16 title inter d-block mb-1 fw-600">
                            Floyd Miles
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400 prag">
                            You : , this is really
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="mnutes prag fz-14 inter fw-400">
                          1h
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar gactive">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name6.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="fz-16 title inter d-block mb-1 fw-600">
                            Marvin McKinney
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400 prag">
                            Haha oh man
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="mnutes prag fz-14 inter fw-400">
                          2h
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start mb-30 d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar gactive">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name7.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="fz-16 title inter d-block mb-1 fw-600">
                            Albert Flores
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400 prag">
                            Albert Flores
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="mnutes prag fz-14 inter fw-400">
                          4h
                        </span>
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-start d-flex align-items-center justify-content-between chat__single">
                      <span className="d-flex gap-3 align-items-center">
                        <span className="avatar gactive">
                          <Image
                            width={40}
                            height={40}
                            className="avatar-img"
                            src="/img/testimonial/name8.jpg"
                            alt="avatar"
                          />
                        </span>
                        <span className="text-area">
                          <span className="fz-16 title inter d-block mb-1 fw-600">
                            Arlene McCoy
                          </span>
                          <span className="mdtxt fz-12 inter d-block fw-400 prag">
                            You : Hey!
                          </span>
                        </span>
                      </span>
                      <span className="date__time">
                        <span className="mnutes prag fz-14 inter fw-400">
                          1h
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="chat__box__view">
                  <div className="chat__person">
                    <div className="cheat__user d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-3">
                        <div className="user__avatar d-flex align-items-center gap-3 red">
                          <Image
                            width={50}
                            height={50}
                            src="/img/frelancer/f11.png"
                            className="uericon round50"
                            alt="icon"
                          />
                        </div>
                        <span className="fz-20 fw-600 inter pra">
                          Lois Lane
                        </span>
                      </div>
                      <div className="edit__user d-flex align-items-center gap-3">
                        <Link href="#">
                          <i className="bi bi-telephone fz-18 pra"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-camera-video fz-18 pra"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="chat__body pb-16">
                    <div className="chat__body__inner d-flex justify-content-between">
                      <ul className="left__side__chtat">
                        <li className="pb-80">
                          <span className="man mb-30">
                            <Image
                              width={50}
                              height={50}
                              src="/img/bn/profile.jpg"
                              alt="darlene"
                            />
                          </span>
                          <span className="textbg topbefore">
                            Lorem Ipsum is simply dummy text of the printing
                          </span>
                        </li>
                        <li className="pb-80">
                          <span className="man mb-30">
                            <Image
                              width={50}
                              height={50}
                              src="/img/bn/profile.jpg"
                              alt="darlene"
                            />
                          </span>
                          <span className="textbg">
                            I play Stronghold Kingdoms
                          </span>
                        </li>
                        <li className="pb-80">
                          <span className="man mb-30">
                            <Image
                              width={50}
                              height={50}
                              src="/img/bn/profile.jpg"
                              alt="darlene"
                            />
                          </span>
                          <span className="textbg">How to make payment?</span>
                        </li>
                      </ul>
                      <ul className="left__side__chtat pt-120 right__side__chats">
                        <li>
                          <span className="textbg">
                            I play Stronghold Kingdoms
                          </span>
                          <span className="man mt-30">
                            <Image
                              width={50}
                              height={50}
                              src="/img/frelancer/f11.png"
                              alt="darlene"
                            />
                          </span>
                        </li>
                        <li className="pt-80">
                          <span className="textbg">
                            Lorem Ipsum is simply dummy tex
                          </span>
                          <span className="man mt-30">
                            <Image
                              width={50}
                              height={50}
                              src="/img/frelancer/f11.png"
                              alt="darlene"
                            />
                          </span>
                        </li>
                        <li className="pt-80">
                          <span className="textbg">
                            I play Stronghold Kingdoms
                          </span>
                          <span className="man mt-30">
                            <Image
                              width={50}
                              height={50}
                              src="/img/frelancer/f11.png"
                              alt="darlene"
                            />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat__view__footer d-flex align-items-center">
                    <div className="addfile__left d-flex align-items-center gap-3">
                      <span className="file__choose">
                        <i className="bi bi-plus-circle pra fz-18"></i>
                        <input type="file" />
                      </span>
                      <Link href="#">
                        <i className="bi bi-mic"></i>
                      </Link>
                      <Link href="#">
                        <i className="bi bi-camera"></i>
                      </Link>
                      <Link href="#">
                        <i className="bi bi-emoji-heart-eyes"></i>
                      </Link>
                    </div>
                    <form
                      action="#"
                      className="d-flex round100 border align-items-center justify-content-between">
                      <input type="text" placeholder="Type a message..." />
                      <button type="submit" className="cmn__btn">
                        <span>
                          <i className="bi bi-send"></i>
                        </span>
                      </button>
                    </form>
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
