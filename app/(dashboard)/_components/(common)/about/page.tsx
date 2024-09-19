import App from "../../components1/home-1/App";
import CompanyLogo from "../../components1/home-1/CompanyLogo";
import Freelancer from "../../components1/home-1/Freelancer";
import Perform from "../../components1/home-1/Perform";
import Testimonial from "../../components1/home-1/Testimonial";
import WhyChoose from "../../components1/home-1/WhyChoose";
import Breadcrumb from "../../components1/shared/Breadcrumb";
import HowWork from "../../components1/shared/HowWork2";

const page = () => {
  return (
    <>
      <Breadcrumb title="About" items={["Home", "Pages", "About us"]} />
      <Perform />
      <WhyChoose />
      <HowWork />
      <Freelancer />
      <App />
      <CompanyLogo />
      <Testimonial />
    </>
  );
};

export default page;
