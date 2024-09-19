import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import SignIn from "../../../../(dashboard)/_components/components1/signin/SignIn";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Sign In" items={["Home", "Pages", "Sign In"]} />
      <SignIn />
    </>
  );
};

export default page;
