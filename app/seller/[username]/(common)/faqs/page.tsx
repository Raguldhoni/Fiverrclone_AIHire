import Faq from "../../../../(dashboard)/_components/components1/faq/Faq";
import App from "../../../../(dashboard)/_components/components1/home-1/App";
import CompanyLogo from "../../../../(dashboard)/_components/components1/home-1/CompanyLogo";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
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
