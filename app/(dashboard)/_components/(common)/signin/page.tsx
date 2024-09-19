import Breadcrumb from "../../components1/shared/Breadcrumb";
import SignIn from "../../components1/signin/SignIn";
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
