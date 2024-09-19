import Link from "next/link";

const page = () => {
    return (
        <>
            <section className="banner__breadcumn ralt">
                <div className="container"></div>
                <div className="overview__showcase pt-120 ralt">
                    <div className="container">
                        <div className="overview__showcasewrap round16 border bgwhite">
                            <div className="overview__inntercase ralt d-flex align-items-center">
                                <Link href="/overview" className="d-block ralt over__item fz-16 fw-500 inter pra">
                                    <span className="ver__innerbox d-flex align-items-center justify-content-center">
                                        <span className="over__box d-flex align-items-center justify-content-center round100">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </span>
                                    Overview
                                </Link>
                                <Link href="/overview-pricing" className="d-block ralt over__item fz-16 fw-500 inter pra">
                                    <span className="ver__innerbox d-flex align-items-center justify-content-center">
                                        <span className="over__box d-flex align-items-center justify-content-center round100">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </span>
                                    Pricing
                                </Link>
                                <Link href="/overview-description" className="d-block ralt over__item fz-16 fw-500 inter pra">
                                    <span className="ver__innerbox d-flex align-items-center justify-content-center">
                                        <span className="over__box d-flex align-items-center justify-content-center round100">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </span>
                                    Description & FAQ
                                </Link>
                                <Link href="/overview-requirments" className="d-block ralt over__item fz-16 fw-500 inter pra">
                                    <span className="ver__innerbox d-flex align-items-center justify-content-center">
                                        <span className="over__box d-flex align-items-center justify-content-center round100">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </span>
                                    Requirements
                                </Link>
                                <Link href="/overview-gallery" className="d-block ralt over__item fz-16 fw-500 inter pra">
                                    <span className="ver__innerbox d-flex align-items-center justify-content-center">
                                        <span className="over__box d-flex align-items-center justify-content-center round100">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </span>
                                    Gallery
                                </Link>
                                <Link href="/overview-publish" className="d-block ralt over__item fz-16 fw-500 inter pra">
                                    <span className="ver__innerbox d-flex align-items-center justify-content-center">
                                        <span className="over__box d-flex align-items-center justify-content-center round100">
                                            <i className="bi bi-check"></i>
                                        </span>
                                    </span>
                                    Publish
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overview__gallery__section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="almost__publish text-center bgwhite round16 border">
                                <div className="git__check d-flex align-items-center justify-content-center">
                                    <i className="bi bi-check"></i>
                                </div>
                                <h2 className="title mb-24">
                                    Successful Your Gig
                                </h2>
                                <p className="fz-16 inter pra mb-40">
                                    Successful your Gig and get ready to sale your Gig
                                </p>
                                <div className="btn__grp justify-content-center d-flex align-items-center gap-4 flex-wrap">
                                    <Link href="/" className="cmn--btn">
                                        <span>
                                            Back To Home
                                        </span>
                                    </Link>
                                    <Link href="/overview-publish" className="cmn--btn outline__btn">
                                        <span>
                                            Delete
                                        </span>
                                    </Link>
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