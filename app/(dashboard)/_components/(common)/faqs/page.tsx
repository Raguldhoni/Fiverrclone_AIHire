import Faq from "../../components1/faq/Faq";
import App from "../../components1/home-1/App";
import CompanyLogo from "../../components1/home-1/CompanyLogo";
import Breadcrumb from "../../components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="FAQs" items={["Home", "Pages", "FAQs"]} />
      <Faq />
      <App />
      <CompanyLogo />
    </>
  );
};

export default page;
