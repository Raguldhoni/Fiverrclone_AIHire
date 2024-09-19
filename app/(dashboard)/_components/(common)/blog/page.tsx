import Blogs from "../../components1/blog/Blogs";
import Breadcrumb from "../../components1/shared/Breadcrumb";
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
