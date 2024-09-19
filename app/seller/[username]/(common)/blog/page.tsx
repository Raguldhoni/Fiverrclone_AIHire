import Blogs from "../../../../(dashboard)/_components/components1/blog/Blogs";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Blog" items={["Home", "Blog"]} />
      <Blogs />
    </>
  );
};

export default page;
