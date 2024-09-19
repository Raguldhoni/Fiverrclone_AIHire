import ServiceDetails from "../../../../(dashboard)/_components/components1/service/ServiceDetails";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Services - Details"
        items={["Home", "Browse Job", "Services", "Details"]}
      />
      <ServiceDetails />
    </>
  );
};

export default page;
