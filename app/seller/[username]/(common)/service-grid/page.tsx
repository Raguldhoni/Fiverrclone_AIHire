import ServiceGrid from "../../../../(dashboard)/_components/components1/service/ServiceGrid";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Services" items={["Home", "Browse Job", "Services"]} />
      <ServiceGrid />
    </>
  );
};

export default page;
