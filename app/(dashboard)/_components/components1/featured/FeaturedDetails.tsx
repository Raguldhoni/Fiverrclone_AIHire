import Image from "next/image";
import Checkbox from "../shared/Checkbox";
import Link from "next/link";
const features = [
  {
    id: "bank11t20",
    label: "Set your budget and timeframe",
    checked: true,
  },
  {
    id: "bank22",
    label: "Outline your proposal",
    checked: true,
  },
  {
    id: "bank44t8",
    label: "Get paid for your work",
    checked: true,
  },
  {
    id: "bank33t12",
    label: "It&apos;s free to sign up on jobs",
    checked: false,
  },
];

const FeaturedDetails = () => {
  return (
    <section className="project__details pt-120 pb-120 sectionbg2">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-8">
            <div className="chatbot__developers">
              <div className="chatbot__items featiredjob__details round16 mb-24 shadow2 bgwhite">
                <div className="d-flex flex-wrap pb-24 mb-24 gap-3 bborderdash align-items-center justify-content-between">
                  <div className="share d-flex align-items-center gap-2">
                    <span className="fz-18 fw-500 inter base">Share -</span>
                    <ul className="social socialbase d-flex align-items-center">
                      <li>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
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
                    </ul>
                  </div>
                  <span className="base fw-500 inter">
                    Published-{" "}
                    <span className="pra inter fw-400 ">
                      25/06/23, 09:12 AM
                    </span>
                  </span>
                </div>
                <h2 className="title mb-20">Chat GPT API developer</h2>
                <p className="fz-16 fw-400 inter pra">
                  I need a Python script that extract a PDF document
                  information. And then we can use this information to create
                  multiple choice question using CHAT GPT. At the moment we are
                  doing next steps: 1- Use to enter de PDF file. And then we ask
                  to chatpdf to generate question from 5 to five.
                </p>
                <div className="hiring__thumb mt-30 mb-30">
                  <Image
                    width={792}
                    height={450}
                    src="/img/details/feature-details.jpg"
                    alt="details"
                  />
                </div>
                <h3 className="title bborderdash tborderdash pb-30 pt-30 mb-30">
                  Job Title: <span className="base">AI Engineer </span>
                </h3>
                <h4 className="title mb-24">Skills Required :</h4>
                <div className="chatbot__tag mb-30 pb-30 bborderdash d-flex align-items-center">
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Python
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    Software Architecture
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    API Integration
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    OpenAI
                  </Link>
                  <Link
                    href="#"
                    className="learning round16 fz-16 fw-500 inter base">
                    HTML
                  </Link>
                </div>
                <span className="fz-20 fw-600 inter title d-block mb-24">
                  Responsibilities :
                </span>
                <div className="global__list bborderdash pb-30 mb-30">
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Develop, implement, and deploy AI models and algorithms
                      for various applications.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Collect, preprocess, and analyze large datasets to train
                      and validate AI models.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Design and optimize machine learning pipelines and
                      workflows.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Explore and experiment with new AI techniques and
                      algorithms to improve model performance.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Collaborate with cross-functional teams to understand
                      business needs and translate them into AI solutions.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Apply natural language processing (NLP) and computer
                      vision techniques to extract insights from unstructured
                      data.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Implement and deploy AI models on production systems,
                      ensuring scalability and performance.
                    </span>
                  </div>
                </div>
                <span className="fz-16 fw-600 inter title d-block mb-24">
                  Requirements :
                </span>
                <div className="global__list bborderdash pb-30 mb-30">
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Bachelor&apos;s or Master&apos;s degree in Computer
                      Science, Data Science, or a related field.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Strong knowledge of machine learning algorithms,
                      statistical modeling, and AI techniques.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Proficiency in programming languages such as Python, R, or
                      Java.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Experience with machine learning frameworks and libraries
                      such as TensorFlow, PyTorch, or scikit-learn.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Solid understanding of data preprocessing, feature
                      engineering, and model evaluation techniques.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Familiarity with deep learning architectures and
                      frameworks.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Experience with cloud platforms (e.g., AWS, Azure, GCP)
                      for training and deploying AI models.
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1 global__litem">
                    <i className="bi bi-dot base fz-20"></i>
                    <span className="fz-16 fw-500 inter pra">
                      Implement and deploy AI models on production systems,
                      ensuring scalability and performance.
                    </span>
                  </div>
                  <p className="fz-16 fw-400 inter pra mt-4">
                    This job requirement provides a comprehensive overview of
                    the skills, qualifications, and responsibilities expected
                    from an AI Engineer. The specific requirements may vary
                    depending on the organization and the nature of the AI
                    projects involved.
                  </p>
                </div>
                <div className="attachment__footertag mt-30 gap-3 flex-wrap d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="base fz-18 fw-500 inter">Tag -</span>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Machine Learning
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      AI Chatbot
                    </Link>
                    <Link
                      href="#"
                      className="ata__tag fz-14 fw-400 pra border round100">
                      Virtual Assistan
                    </Link>
                  </div>
                  <div className="share d-flex align-items-center gap-2">
                    <span className="fz-18 fw-500 inter base">Share -</span>
                    <ul className="social d-flex align-items-center">
                      <li>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="basic__skilled__wrapper">
              <div className="basic__boxskill mb-24 round16 bgwhite">
                <span className="fz-18 d-block fw-500 title inter mb-10">
                  Budget
                </span>
                <div className="form__price pb-24 d-flex align-items-center bborderdash">
                  <i className="bi bi-tags tags__icon"></i>
                  <span className="fz-16 d-flex align-items-center gap-2 fw-400 inter title">
                    From
                    <span className="fssizing d-flex align-items-start gap-1">
                      $163 - 999
                      <i className="bi bi-info-circle infocircle"></i>
                    </span>
                  </span>
                </div>
                <div className="job__budget pt-24">
                  <div className="enter__amount mb-20 border d-flex align-items-center justify-content-between round100">
                    <input type="text" placeholder="Enter Amout" />
                    <select name="amout" className="bg-transparent border-0">
                      <option value="1">$</option>
                      <option value="1">$1</option>
                      <option value="1">$2</option>
                    </select>
                  </div>
                  <div className="enter__amount mb-20 border d-flex align-items-center justify-content-between round100">
                    <input type="text" placeholder="Enter Email" />
                    <i className="bi bi-envelope-open"></i>
                  </div>
                  <div className="enter__amount border d-flex align-items-center justify-content-between round100">
                    <input type="text" placeholder="Enter Cover Letter" />
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="bank__check__wrap mt-24">
                  {features.map(({ checked, id, label }) => (
                    <Checkbox
                      key={id}
                      checked={checked}
                      id={id}
                      title={label}
                    />
                  ))}
                </div>
                <Link
                  href="#"
                  className="cmn--btn mt-30 d-flex justify-content-center d-block">
                  <span>Send Proposal</span>
                  <span>
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
              <div className="darrell__profile round16 bgwhite">
                <div className="profile__check ralt">
                  <Image
                    height={88}
                    width={88}
                    src="/img/testimonial/biford-profile.jpg"
                    alt="profile"
                  />
                  <i className="bi bi-check"></i>
                </div>
                <div className="darrell__content mt-40 text-center">
                  <h4 className="title mb-16">Binford Ltd.</h4>
                  <span className="fz-16 fw-400 inter title">
                    Member since December 31, 2020
                  </span>
                  <ul className="social justify-content-center pt-24 mb-40 pb-40 bborderdash d-flex align-items-center">
                    <li>
                      <Link href="#">
                        <i className="bi bi-facebook base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-instagram base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-twitter base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-pinterest base"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="bi bi-dribbble base"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="binford__loca mb-40">
                    <div className="d-flex mb-8 align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        Location <span className="base">Verified</span>
                      </span>
                    </div>
                    <div className="d-flex mb-8 align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        26 Projects completed
                      </span>
                    </div>
                    <div className="d-flex mb-8 align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        Payment Method <span className="base">Verified</span>
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i className="bi bi-check2-circle base"></i>
                      <span className="fz-16 fw-400 inter pra">
                        Email <span className="base">Verified</span>
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    className="cmn--btn outline__btn d-block">
                    <span>View Profile</span>
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

export default FeaturedDetails;
