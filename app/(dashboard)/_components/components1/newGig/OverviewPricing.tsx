"use client";
import Image from "next/image";
import defining2 from "../../../../../public/img/details/defining2.jpg";
import CheckboxCenter from "../shared/CheckboxCenter";
import Checkbox from "../shared/Checkbox";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import Select from "react-select";

const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "#fff",
    color: "black",
    width: "auto",
    padding: "5px 2px",
    // borderRadius: "50px",
    border: "none",
    boxShadow: "0",
    "&:hover": {
      borderColor: "#DFE0E4",
    },
  }),
  option: (styles: any, { isSelected }: { isSelected: any }) => ({
    ...styles,
    color: isSelected ? "#fff" : "#000",
    padding: "6px 10px",
    textAlign: "left",
    backgroundColor: isSelected ? "#0D47A1" : "white",
    //   "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
  }),
  placeholder: (styles: any) => ({ ...styles, color: "#000" }),
  singleValue: (styles: any) => ({ ...styles, color: "#000" }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: "0",
    height: "auto",
  }),
};
const selectStyles2 = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "#fff",
    color: "black",
    width: "auto",
    padding: "6px 10px",
    borderRadius: "16px",
    border: "1px solid #DFE0E4",
    boxShadow: "0",
    "&:hover": {
      borderColor: "#DFE0E4",
    },
  }),
  option: (styles: any, { isSelected }: { isSelected: any }) => ({
    ...styles,
    color: isSelected ? "#fff" : "#000",
    padding: "6px 10px",
    textAlign: "left",
    backgroundColor: isSelected ? "#0D47A1" : "white",
    //   "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
  }),
  placeholder: (styles: any) => ({ ...styles, color: "#000" }),
  singleValue: (styles: any) => ({ ...styles, color: "#000" }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: "0",
    height: "auto",
  }),
};
const deliveryOptions = [
  { label: "10:30 am", value: "1" },
  { label: "04:30 pm", value: "2" },
];
const extraOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];
const revisionsOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
];

const OverviewPricing = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="banner__breadcumn ralt">
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="8QEK7B9GUhM"
          onClose={() => setOpen(false)}
        />
        <div className="overview__showcase pt-120 ralt">
          <div className="container">
            <div className="overview__showcasewrap round16 border bgwhite">
              <div className="overview__inntercase ralt d-flex align-items-center">
                <Link
                  href="/overview"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100">
                      <i className="bi bi-check"></i>
                    </span>
                  </span>
                  Overview
                </Link>
                <Link
                  href="/overview/pricing"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  <span className="ver__innerbox d-flex align-items-center justify-content-center">
                    <span className="over__box d-flex align-items-center justify-content-center round100"></span>
                  </span>
                  Pricing
                </Link>
                <Link
                  href="/overview/description"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Description & FAQ
                </Link>
                <Link
                  href="/overview/requirements"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Requirements
                </Link>
                <Link
                  href="/overview/gallery"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Gallery
                </Link>
                <Link
                  href="/overview/publish"
                  className="d-block ralt over__item fz-16 fw-500 inter pra">
                  Publish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overview__section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">
                  Scope & Pricing
                </h3>
                <div className="scope__table border round16">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="fz-16 fw-400 inter pra">Package</td>
                        <td className="fz-20 fw-500 inter pra">Basic</td>
                        <td className="fz-20 fw-500 inter pra">Skilled</td>
                        <td className="fz-20 fw-500 inter pra">Prime</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <span className="max126">Name your package</span>
                            <i className="bi bi-pencil"></i>
                          </span>
                        </td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <span className="max126">Name your package</span>
                            <i className="bi bi-pencil"></i>
                          </span>
                        </td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <span className="max126">Name your package</span>
                            <i className="bi bi-pencil"></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <span className="max126">
                              Describe the details of your offering
                            </span>
                            <i className="bi bi-pencil"></i>
                          </span>
                        </td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <span className="max126">
                              Describe the details of your offering
                            </span>
                            <i className="bi bi-pencil"></i>
                          </span>
                        </td>
                        <td>
                          <span className="d-flex align-items-center gap-2">
                            <span className="max126">
                              Describe the details of your offering
                            </span>
                            <i className="bi bi-pencil"></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Select
                            options={deliveryOptions}
                            styles={selectStyles}
                            placeholder="Delivery Time"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </td>
                        <td>
                          <Select
                            options={deliveryOptions}
                            styles={selectStyles}
                            placeholder="Delivery Time"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </td>
                        <td>
                          <Select
                            options={deliveryOptions}
                            styles={selectStyles}
                            placeholder="Delivery Time"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 inter max150 pra">
                          Integration of an AI model to the app
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 max150 inter pra">
                          Functional app/website
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 max150 inter pra">
                          Application/Website Design
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 max150 inter pra">
                          Include Source Code
                        </td>
                        <td>
                          <CheckboxCenter check={false} />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 max150 inter pra">Setup file</td>
                        <td>
                          <CheckboxCenter check={false} />
                        </td>
                        <td>
                          <CheckboxCenter check={false} />
                        </td>
                        <td>
                          <CheckboxCenter />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 max150 inter pra">
                          Detailed code comments
                        </td>
                        <td>
                          <CheckboxCenter check={false} />
                        </td>
                        <td>
                          <CheckboxCenter check={false} />
                        </td>
                        <td>
                          <CheckboxCenter check={false} />
                        </td>
                      </tr>
                      <tr>
                        <td className="fz-16 max150 inter pra">Revisions</td>
                        <td>
                          <Select
                            options={revisionsOptions}
                            styles={selectStyles}
                            placeholder="Select"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </td>
                        <td>
                          <Select
                            options={revisionsOptions}
                            styles={selectStyles}
                            placeholder="Select"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </td>
                        <td>
                          <Select
                            options={revisionsOptions}
                            styles={selectStyles}
                            placeholder="Select"
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="pra max150 inter fz-16">Price</td>
                        <td className="fz-16 text-center inter pra">$</td>
                        <td className="fz-16 text-center inter pra">$</td>
                        <td className="fz-16 text-center inter pra">$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="overview__gitwrapper mb-40 bgwhite round16 border">
                <h3 className="pb-40 bborderdash mb-40 title">
                  Add Extra Services
                </h3>
                <div className="extra__pricebox border round16 mb-40">
                  <div className="extra__seitem mb-16 d-flex align-items-center justify-content-between flex-wrap">
                    <span className="basic fz-18 fw-500 inter pra">Basic</span>
                    <div className="extra__component d-flex align-items-center">
                      <span className="fz-14 fw-400 inter pra">
                        I&apos;ll deliver in only
                      </span>
                      <Select
                        options={extraOptions}
                        styles={selectStyles2}
                        placeholder="Select"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                      <span className="fz-14 fw-400 inter pra">
                        For an Extra
                      </span>
                      <div className="quantity__box justify-content-center d-flex align-items-center">
                        <input
                          type="number"
                          name="qty"
                          id="qty"
                          min="1"
                          max="200"
                          step="1"
                          value="200"
                        />
                        <div className="d-grid">
                          <button
                            className="qtyminus rotates"
                            aria-hidden="true">
                            <i className="bi bi-chevron-up"></i>
                          </button>
                          <button className="qtyplus" aria-hidden="true">
                            <i className="bi bi-chevron-down"></i>
                          </button>
                        </div>
                      </div>
                      <span className="fz-14 fw-400 inter pra">$</span>
                    </div>
                  </div>
                  <div className="extra__seitem mb-16 d-flex align-items-center justify-content-between flex-wrap">
                    <span className="basic fz-18 fw-500 inter pra">
                      Standard
                    </span>
                    <div className="extra__component d-flex align-items-center">
                      <span className="fz-14 fw-400 inter pra">
                        I&apos;ll deliver in only
                      </span>
                      <Select
                        options={extraOptions}
                        styles={selectStyles2}
                        placeholder="Select"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                      <span className="fz-14 fw-400 inter pra">
                        For an Extra
                      </span>
                      <div className="quantity__box justify-content-center d-flex align-items-center">
                        <input
                          type="number"
                          name="qty"
                          id="qty2"
                          min="1"
                          max="200"
                          step="1"
                          value="200"
                        />
                        <div className="d-grid">
                          <button
                            className="qtyminus rotates"
                            aria-hidden="true">
                            <i className="bi bi-chevron-up"></i>
                          </button>
                          <button className="qtyplus" aria-hidden="true">
                            <i className="bi bi-chevron-down"></i>
                          </button>
                        </div>
                      </div>
                      <span className="fz-14 fw-400 inter pra">$</span>
                    </div>
                  </div>
                  <div className="extra__seitem d-flex align-items-center justify-content-between flex-wrap">
                    <span className="basic fz-18 fw-500 inter pra">
                      Premium
                    </span>
                    <div className="extra__component d-flex align-items-center">
                      <span className="fz-14 fw-400 inter pra">
                        I&apos;ll deliver in only
                      </span>
                      <Select
                        options={extraOptions}
                        styles={selectStyles2}
                        placeholder="Select"
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                      <span className="fz-14 fw-400 inter pra">
                        For an Extra
                      </span>
                      <div className="quantity__box justify-content-center d-flex align-items-center">
                        <input
                          type="number"
                          name="qty"
                          id="qty3"
                          min="1"
                          max="200"
                          step="1"
                          value="200"
                        />
                        <div className="d-grid">
                          <button
                            className="qtyminus rotates"
                            aria-hidden="true">
                            <i className="bi bi-chevron-up"></i>
                          </button>
                          <button className="qtyplus" aria-hidden="true">
                            <i className="bi bi-chevron-down"></i>
                          </button>
                        </div>
                      </div>
                      <span className="fz-14 fw-400 inter pra">$</span>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between bborderdash pb-40 mb-40">
                  <div className="col-lg-4">
                    <Checkbox title="Application/Website Design" id="ch1" />
                    <Checkbox title="Include Source Code" id="ch2" />
                  </div>
                  <div className="col-lg-4">
                    <Checkbox title="Detailed Code Comments" id="ch3" />
                    <Checkbox title="Setup file" id="ch4" />
                  </div>
                  <div className="col-lg-4">
                    <Checkbox title="Additional Revision" id="ch5" />
                  </div>
                </div>
                <Link
                  href="/overview/description"
                  className="add__gig d-flex align-items-center gap-2">
                  <i className="bi bi-plus-circle base fz-18"></i>
                  <span className="fz-16 fw-600 inter base">Add Gig Extra</span>
                </Link>
              </div>
              <div className="btn__grp d-flex align-items-center gap-4 flex-wrap">
                <Link href="/overview/description" className="cmn--btn">
                  <span>Save & Continue</span>
                </Link>
                <Link
                  href="/overview/pricing"
                  className="cmn--btn outline__btn">
                  <span>Back</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="start__definingbar">
                <div className="defining__box mb-24 round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">
                    Set your packages
                  </h4>
                  <div className="defining__thumb ralt mb-24">
                    <Image src={defining2} alt="img" />
                    <span
                      onClick={() => setOpen(true)}
                      className="video-btn videobtn d-flex align-items-center justify-content-center">
                      <i className="bi bi-play"></i>
                    </span>
                  </div>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Set the prices for your 3 packages.
                  </span>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Select the elements you want to include in each offer.
                  </span>
                  <span className="defining mb-8 d-flex align-items-center ralt">
                    Add Extras to increase your order value.
                  </span>
                  <span className="defining d-flex align-items-center ralt">
                    Communication and Timelines
                  </span>
                </div>
                <div className="defining__box round16 border bgwhite">
                  <h4 className="title pb-24 mb-24 bborderdash">Description</h4>
                  <div className="des__added">
                    <span className="defining mb-8 d-flex align-items-center ralt">
                      Summarize what this package offers buyers, and why you
                      included these items in your package.
                    </span>
                    <span className="defining mb-8 d-flex align-items-center ralt">
                      You can use maximum 100 chars.
                    </span>
                    <span className="defining mb-8 d-flex align-items-center ralt">
                      This &quot;Full Logo Design&quot; package includes a
                      standard logo design with 4 revisions and the source file.
                    </span>
                    <span className="defining d-flex align-items-center ralt">
                      Add tags to help buyers find your Gig while searching.
                    </span>
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

export default OverviewPricing;
