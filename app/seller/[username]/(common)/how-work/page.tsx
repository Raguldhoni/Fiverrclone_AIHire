import App from "../../../../(dashboard)/_components/components1/home-1/App";
import GetStarted from "../../../../(dashboard)/_components/components1/home-1/GetStarted";
import HowItWork from "../../../../(dashboard)/_components/components1/home-1/HowItWork";
import HowWork from "../../../../(dashboard)/_components/components1/home-2/HowWork";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
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
