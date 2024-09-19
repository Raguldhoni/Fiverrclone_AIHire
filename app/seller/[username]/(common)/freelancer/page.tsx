import Freelancers from "../../../../(dashboard)/_components/components1/freelancer/Freelancers";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Freelancer"
        items={["Home", "Find Talent", "Freelancer"]}
      />
      <Freelancers />
    </>
  );
};

export default page;
