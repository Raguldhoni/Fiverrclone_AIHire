import HelpSupport from "../../../../(dashboard)/_components/components1/help-support/HelpSupport";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Help & Support"
        items={["Home", "Pages", "Help & Support"]}
      />
      <HelpSupport />
    </>
  );
};

export default page;
