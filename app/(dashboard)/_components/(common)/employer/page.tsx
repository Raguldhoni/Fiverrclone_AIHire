import Employers from "../../components1/employer/Employers";
import Breadcrumb from "../../components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Employer" items={["Home", "Pages", "Employer"]} />
      <Employers />
    </>
  );
};

export default page;
