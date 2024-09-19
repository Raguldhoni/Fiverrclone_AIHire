import Image from "next/image";
import Link from "next/link";

const TaskCategory = () => {
  return (
    <section className="task__categoris">
      <div className="container">
        <div className="task__categories__wrappper">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="task__item round16 bgwhite d-flex align-items-center">
                <div className="thumb">
                  <Image
                    width={200}
                    height={200}
                    src="/img/task/tast1.jpg"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h3 className="inter title mb-24">I need a task done</h3>
                  <p className="fz-16 fw-400 inter pra mb-40">
                    Have a specific AI task that needs to be completed? Look no
                    further!
                  </p>
                  <Link href="/featuredjob" className="cmn--btn outline__btn">
                    <span>View services</span>
                    <span>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="task__item round16 bgwhite d-flex align-items-center">
                <div className="thumb">
                  <Image
                    width={200}
                    height={200}
                    src="/img/task/tast2.jpg"
                    alt="img"
                  />
                </div>
                <div className="content">
                  <h3 className="inter title mb-24">I am a freelancer</h3>
                  <p className="fz-16 fw-400 inter pra mb-40">
                    Are you an AI professional looking for exciting freelance
                    opportunities?
                  </p>
                  <Link
                    href="/featuredjob-details"
                    className="cmn--btn outline__btn">
                    <span>List a Service</span>
                    <span>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskCategory;
