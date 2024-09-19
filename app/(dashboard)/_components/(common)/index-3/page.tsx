"use client";
import App from "../../components1/home-1/App";
import Service from "../../components1/home-1/Service";
import Testimonial from "../../components1/home-1/Testimonial";
import About from "../../components1/home-3/About";
import Banner from "../../components1/home-3/Banner";
import Category from "../../components1/home-3/Category";
import Freelancer from "../../components1/home-3/Freelancer";
import HowItWork from "../../components1/home-3/HowItWork";
import Perform from "../../components1/home-3/Perform";
import TaskCategory from "../../components1/home-3/TaskCategory";
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
