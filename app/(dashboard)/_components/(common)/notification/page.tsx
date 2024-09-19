import Switch from "../../components1/shared/Switch";
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
                    <span className="d4 mb-24">Notification</span>
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
                          Notification
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

      <section className="notification__section pb-120">
        <div className="container__customize pt-120 pb-120 round16 border">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="notification__item mb-24 round16 bgwhite border">
                  <div className="d-flex bborder pb-24 mb-24 flex-wrap gap-2 align-items-center justify-content-between">
                    <h3 className="title">My Network</h3>
                    <Link href="#" className="cmn--btn outline__btn">
                      <span>Toggle All</span>
                    </Link>
                  </div>
                  <span className="fz-16 d-block mb-24 inter pra text-uppercase">
                    SEND ME :
                  </span>
                  <p className="fz-16 permission__pra border mb-24 fw-400 inter title">
                    We need permission from your browser to shaw notifications.
                    <Link href="#" className="base">
                      Request permission
                    </Link>
                  </p>
                  <Switch
                    title="New for you"
                    desc="A weekly email featuring shots from designers you follow"
                    id="s1"
                    isNew={true}
                  />
                  <Switch
                    title="Account Activity"
                    desc="Get important notifications about you or activity you've missed"
                    id="s2"
                    checked={false}
                  />

                  <Switch
                    title="Meetups near you"
                    desc="Get an email when a Dribbble Meetup is posted close to my location"
                    id="s3"
                    isNew={true}
                  />
                  <Switch
                    title="Opportunities"
                    desc="Get a daily email when new design jobs are posted in your area"
                    id="s4"
                    checked={true}
                  />
                </div>
                <div className="notification__item mb-24 round16 bgwhite border">
                  <div className="d-flex bborder pb-24 mb-24 flex-wrap gap-2 align-items-center justify-content-between">
                    <h3 className="title">User Emails</h3>
                    <Link href="#" className="cmn--btn outline__btn">
                      <span>Toggle All</span>
                    </Link>
                  </div>
                  <span className="fz-16 d-block mb-24 inter pra text-uppercase">
                    Subscribe Mt To :
                  </span>
                  <Switch
                    title="Company news"
                    desc="Get news, announcements, and product updates"
                    id="s5"
                    isNew={true}
                  />
                  <Switch
                    title="Replay"
                    desc="A weekly email featuring popular shots"
                    id="s6"
                  />

                  <Switch
                    title="Courtside"
                    desc="A weekly email featuring latest stories from our blog"
                    id="s7"
                    checked={false}
                  />
                  <Switch
                    title="Weekly Jobs"
                    desc="weekly digest of design jobs"
                    id="s8"
                  />
                </div>
                <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                  <Link href="#" className="cmn--btn">
                    <span>
                      <i className="bi bi-arrow-clockwise"></i>
                    </span>
                    <span>Turn Off</span>
                  </Link>
                  <span className="fz-16 fw-400 inter pra">
                    Turn all notifications on or off
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="notification__item round16 bgwhite border">
                  <div className="d-flex bborder pb-24 mb-24 flex-wrap gap-2 align-items-center justify-content-between">
                    <h3 className="title">Usage</h3>
                    <Link href="#" className="cmn--btn outline__btn">
                      <span>Toggle All</span>
                    </Link>
                  </div>
                  <span className="fz-16 d-block mb-24 inter pra text-uppercase">
                    Allow other to:
                  </span>
                  <Switch
                    title="Encrypt Data"
                    desc="Encrypt all data associated with account"
                    id="s9"
                  />
                  <Switch
                    title="Location Services"
                    desc="Allow third party apps to use current location"
                    id="s10"
                    checked={false}
                  />
                  <Switch
                    title="Allow private notes"
                    desc="Members can send you private note"
                    id="s11"
                    checked={false}
                  />
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
