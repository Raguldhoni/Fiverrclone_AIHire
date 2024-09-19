"use client";
import Link from "next/link";
import Select from "react-select";
const page = () => {
  const rangeOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];
  const transactionOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];
  const serviceOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];
  const currencyOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];
  const countryOptions = [
    { value: "1", label: "UK" },
    { value: "2", label: "USA" },
    { value: "3", label: "Canada" },
  ];

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#F3F6FA",
      color: "black",
      padding: "6px 10px",
      borderRadius: "50px",
      border: "1px solid #DFE0E4",
      boxShadow: "0",
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "6px 10px",
      textAlign: "left",
      backgroundColor: isSelected ? "#0D47A1" : "white",
      "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#000" }),
    singleValue: (styles: any) => ({ ...styles, color: "#000" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      height: "auto",
    }),
  };
  const selectCountryStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#fff",
      color: "black",
      width: "100%",
      padding: "5px 10px",
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
      "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#000" }),
    singleValue: (styles: any) => ({ ...styles, color: "#000" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      height: "auto",
    }),
  };
  return (
    <>
      <section className="banner__breadcumn ralt">
        <div className="breadcumnd__wrapper">
          <div className="container">
            <div className="profile__wrappers setting__breadcumnd">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-7">
                  <div className="breadcumnd__content">
                    <span className="d4 mb-24">Payments</span>
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
                          Payments
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

      <section className="setting__section pb-120">
        <div className="container__customizemain pt-100 pb-120 round16">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="setting__tabs p-8 round16 border bgwhite">
                  <ul
                    className="nav border-0 round16 nav-tabs"
                    id="myTab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true">
                        Billing History
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false">
                        Billing Information
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false">
                        Available Balances
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="payment-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#payment"
                        type="button"
                        role="tab"
                        aria-controls="payment"
                        aria-selected="false">
                        Payment Methods
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab">
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        Billing History
                      </h3>
                      <div className="d-flex billing__history mb-30 align-items-center gap-2 flex-wrap">
                        <Select
                          options={rangeOptions}
                          styles={selectStyles}
                          placeholder="Data Range"
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                        />
                        <Select
                          options={transactionOptions}
                          styles={selectStyles}
                          placeholder="Transaction"
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                        />
                        <Select
                          options={serviceOptions}
                          styles={selectStyles}
                          placeholder="Service"
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                        />
                        <Select
                          options={currencyOptions}
                          styles={selectStyles}
                          placeholder="Currency"
                          components={{
                            IndicatorSeparator: () => null,
                          }}
                        />

                        <form
                          action="#0"
                          className="billing__form round100 border d-flex align-items-center justify-content-between">
                          <input type="text" placeholder="Search" />
                          <i className="bi bi-search fz-18 title"></i>
                        </form>
                      </div>
                      <div className="billing__table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="fz-20 fw-500 pra inter">Date</td>
                              <td className="fz-20 fw-500 pra inter">
                                Transaction
                              </td>
                              <td className="fz-20 fw-500 pra inter">
                                Service
                              </td>
                              <td className="fz-20 fw-500 pra inter">Order</td>
                              <td className="fz-20 fw-500 pra inter">
                                Currency
                              </td>
                              <td className="fz-20 fw-500 pra inter">Total</td>
                              <td className="text-uppercase fz-20 fw-500 pra inter">
                                Pdf
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                03/05/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                55700223
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Machine Learning
                              </td>
                              <td className="fz-16 fw-400 inter pra">3</td>
                              <td className="fz-16 fw-400 inter pra">$</td>
                              <td className="fz-16 fw-400 inter pra">
                                $215.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                03/05/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                55700223
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Deep Learning
                              </td>
                              <td className="fz-16 fw-400 inter pra">4</td>
                              <td className="fz-16 fw-400 inter pra">€</td>
                              <td className="fz-16 fw-400 inter pra">
                                €654.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                27/06/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                34034474
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Robotics{" "}
                              </td>
                              <td className="fz-16 fw-400 inter pra">5</td>
                              <td className="fz-16 fw-400 inter pra">¥</td>
                              <td className="fz-16 fw-400 inter pra">
                                ¥956.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                09/07/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                58276066
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Data Analytics
                              </td>
                              <td className="fz-16 fw-400 inter pra">2</td>
                              <td className="fz-16 fw-400 inter pra">₽</td>
                              <td className="fz-16 fw-400 inter pra">
                                ₽546.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                15/07/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                43397744
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Virtual Assistants
                              </td>
                              <td className="fz-16 fw-400 inter pra">$</td>
                              <td className="fz-16 fw-400 inter pra">₽</td>
                              <td className="fz-16 fw-400 inter pra">
                                $156.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                17/07/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                37890606
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Healthcare AI
                              </td>
                              <td className="fz-16 fw-400 inter pra">1</td>
                              <td className="fz-16 fw-400 inter pra">$</td>
                              <td className="fz-16 fw-400 inter pra">$96.00</td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                19/07/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                76031847
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                AI in Finance
                              </td>
                              <td className="fz-16 fw-400 inter pra">6</td>
                              <td className="fz-16 fw-400 inter pra">€</td>
                              <td className="fz-16 fw-400 inter pra">
                                €856.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                21/07/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                66277431
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                NLP Language
                              </td>
                              <td className="fz-16 fw-400 inter pra">3</td>
                              <td className="fz-16 fw-400 inter pra">€</td>
                              <td className="fz-16 fw-400 inter pra">
                                €856.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                23/08/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                11081197
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Machine Learning
                              </td>
                              <td className="fz-16 fw-400 inter pra">4</td>
                              <td className="fz-16 fw-400 inter pra">€</td>
                              <td className="fz-16 fw-400 inter pra">
                                €756.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="fz-16 fw-400 inter pra">
                                04/09/2023
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                66538135
                              </td>
                              <td className="fz-16 fw-400 inter pra">
                                Machine Learning
                              </td>
                              <td className="fz-16 fw-400 inter pra">4</td>
                              <td className="fz-16 fw-400 inter pra">€</td>
                              <td className="fz-16 fw-400 inter pra">
                                €356.00
                              </td>
                              <td>
                                <i className="bi bi-download fz-18 base"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab">
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        Billing Information
                      </h3>
                      <form action="#0" className="row g-4">
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="name"
                            className="fz-20 fw-500 inter mb-16 title">
                            Full name
                          </label>
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter name"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="email"
                            className="fz-20 fw-500 inter mb-16 title">
                            Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="company"
                            className="fz-20 fw-500 inter mb-16 title">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            placeholder="Enter Company"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label className="fz-20 fw-500 inter mb-16 title">
                            Country
                          </label>
                          <Select
                            options={countryOptions}
                            styles={selectCountryStyles}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                          />
                        </div>
                        <div className="col-lg-12 basig__grpinput">
                          <label
                            htmlFor="adress"
                            className="fz-20 fw-500 inter mb-16 title">
                            Address
                          </label>
                          <input
                            type="text"
                            id="adress"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="city"
                            className="fz-20 fw-500 inter mb-16 title">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            placeholder="Enter City"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="pcode"
                            className="fz-20 fw-500 inter mb-16 title">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            id="pcode"
                            placeholder="Enter Code"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="vatnumber"
                            className="fz-20 fw-500 inter mb-16 title">
                            VAT Number
                          </label>
                          <input
                            type="text"
                            id="vatnumber"
                            placeholder="Enter Number"
                          />
                        </div>
                        <div className="col-lg-6 basig__grpinput">
                          <label
                            htmlFor="state"
                            className="fz-20 fw-500 inter mb-16 title">
                            State/Province/Territory
                          </label>
                          <input
                            type="text"
                            id="state"
                            placeholder="Enter State"
                          />
                        </div>
                        <div className="col-lg-12 ">
                          <div className="agry__policy mb-40 mt-10">
                            <div className="bank__checkitem mb-8 d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="poli1"
                              />
                              <label
                                className="form-check-label fz-16 fw-400 ptext2 inter"
                                htmlFor="poli1">
                                Yes, email my billing info and original
                                invoices.
                              </label>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-4 flex-wrap">
                            <Link href="#" className="cmn--btn">
                              <span>Save Change</span>
                            </Link>
                            <Link href="#" className="cmn--btn outline__btn">
                              <span>Cancel</span>
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab">
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        Available Balances
                      </h3>
                      <div className="row g-4 mb-40">
                        <div className="col-lg-6">
                          <span className="fz-20 fw-600 mb-20 d-block inter pra">
                            AIHIRE Balance
                          </span>
                          <div className="natural__language round16 border">
                            <span className="fz-16 fw-500 d-block mb-10 inter base">
                              From Canceled Orders
                            </span>
                            <span className="fz-20 fw-500 mb-10 d-block inter title">
                              $0.00
                            </span>
                            <span className="fz-14 pra inter d-block">
                              Use for purchases.
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <span className="fz-20 fw-600 mb-20 d-block inter pra">
                            AIHIRE Credits
                          </span>
                          <div className="natural__language round16 border">
                            <span className="fz-16 fw-500 d-block mb-10 inter base">
                              Credits
                            </span>
                            <span className="fz-20 fw-500 mb-10 d-block inter title">
                              $0.00
                            </span>
                            <span className="fz-14 pra inter d-block">
                              Use for purchases.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="earn__creditbox round16 border">
                        <h2 className="title mb-16">
                          Like to earn some credits?
                        </h2>
                        <p className="fz-16 inter pra mb-40">
                          Refer people you know and everyone benefits!
                        </p>
                        <Link href="#" className="cmn--btn">
                          <span>Earn AIHire Credits</span>
                          <span className="ps-3">
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="payment"
                    role="tabpanel"
                    aria-labelledby="payment-tab">
                    <div className="overview__gitwrapper bgwhite round16 border">
                      <h3 className="pb-40 bborderdash mb-40 title">
                        Payment Methods
                      </h3>
                      <div className="earn__creditbox round16 border">
                        <div className="payment__card bborderdash pb-24 mb-24 d-flex align-items-center">
                          <Link
                            href="#"
                            className="d-flex align-items-center gap-2">
                            <i className="bi bi-credit-card-2-back"></i>
                            Credit card
                          </Link>
                          <Link
                            href="#"
                            className="d-flex align-items-center gap-2">
                            <i className="bi bi-paypal"></i>
                            PayPal
                          </Link>
                        </div>
                        <Link
                          href="#"
                          className="added d-flex align-items-center gap-2">
                          <span>
                            <i className="bi bi-plus-circle base fz-20"></i>
                          </span>
                          <span className="fz-20 fw-500 inter base">
                            Add a payment method
                          </span>
                        </Link>
                      </div>
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
