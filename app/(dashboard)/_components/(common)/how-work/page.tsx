import App from "../../components1/home-1/App";
import GetStarted from "../../components1/home-1/GetStarted";
import HowItWork from "../../components1/home-1/HowItWork";
import HowWork from "../../components1/home-2/HowWork";
import Breadcrumb from "../../components1/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="How It Works" items={["Home", "How It Works"]} />
      <HowWork />
      <App />
      <HowItWork />
      <GetStarted />
    </>
  );
};

export default page;
