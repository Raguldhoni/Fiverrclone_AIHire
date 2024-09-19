import Projects from "../../../../(dashboard)/_components/components1/project/Projects";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Projects" items={["Home", "Browse Job", "Projects"]} />
      <Projects />
    </>
  );
};

export default page;
