import app from "../../../../../public/img/app/app1.png";
import appstore from "../../../../../public/img/app/appstore.png";
import googleplay from "../../../../../public/img/app/googlepaly.png";
import Image from "next/image";
import Link from "next/link";

const App = () => {
  return (
    <section className="app__section ralt bg__all pb-120 pt-120">
      <div className="container">
        <div className="row g-4 flex-row-reverse align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="app__content">
              <div className="section__title mb-30">
                <h4 className="sub ralt base mb-16  ">Download Our Apps</h4>
                <h2 className="title mb-24  ">
                  Get Our Mobile App for Free and Unlock a World
                </h2>
                <p className="ptext2 fz-16 fw-400 inter  ">
                  Download our free mobile app today from the App Store or
                  Google Play Store and discover a whole new level of
                  convenience and accessibility.
                </p>
              </div>
              <div className="app__store d-flex align-items-center gap-3 flex-wrap  ">
                <Link href="#">
                  <Image src={appstore} alt="app" />
                </Link>
                <Link href="#">
                  <Image src={googleplay} alt="app" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="app__thumb ralt">
              <Image src={app} alt="card" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
