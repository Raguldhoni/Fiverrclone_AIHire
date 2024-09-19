import EmployerDetails from "../../components1/employer/EmployerDetails";
import Breadcrumb from "../../components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Employer - Details"
        items={["Home", "Pages", "Employer", "Details"]}
      />
      <EmployerDetails />
    </>
  );
};

export default page;
