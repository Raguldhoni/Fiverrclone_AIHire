import FeaturedJob from "../../../../(dashboard)/_components/components1/featured/FeaturedJob";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Featured Job"
        items={["Home", "Browse Job", "Featured Job"]}
      />
      <FeaturedJob />
    </>
  );
};

export default page;
