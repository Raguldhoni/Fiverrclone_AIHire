"use client";
import App from "../../../../(dashboard)/_components/components1/home-1/App";
import Service from "../../../../(dashboard)/_components/components1/home-1/Service";
import Testimonial from "../../../../(dashboard)/_components/components1/home-1/Testimonial";
import About from "../../../../(dashboard)/_components/components1/home-3/About";
import Banner from "../../../../(dashboard)/_components/components1/home-3/Banner";
import Category from "../../../../(dashboard)/_components/components1/home-3/Category";
import Freelancer from "../../../../(dashboard)/_components/components1/home-3/Freelancer";
import HowItWork from "../../../../(dashboard)/_components/components1/home-3/HowItWork";
import Perform from "../../../../(dashboard)/_components/components1/home-3/Perform";
import TaskCategory from "../../../../(dashboard)/_components/components1/home-3/TaskCategory";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <TaskCategory />
      <About />
      <Service />
      <Perform />
      <Category />
      <HowItWork />
      <App />
      <Freelancer />
      <Testimonial />
    </>
  );
};

export default page;
