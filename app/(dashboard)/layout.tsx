"use client";
import Navbar from "./_components/navbar";
import Banner from "./_components/components1/home-1/Banner"
import CompanyLogo from "./_components/components1/home-1/CompanyLogo";
import WhyChoose from "./_components/components1/home-1/WhyChoose";
import Categories from "./_components/components1/home-1/Categories";
import Service from "./_components/components1/home-1/Service";
import Perform from "./_components/components1/home-1/Perform";
import Freelancer from "./_components/components1/home-1/Freelancer";
// import App from "next/App";
import GetStarted from "./_components/components1/home-1/GetStarted";
import HowItWork from "./_components/components1/home-1/HowItWork";
import Testimonial from "./_components/components1/home-1/Testimonial";
import Footer from "./_components/components1/shared/Footer";
import App from "./_components/components1/home-1/App";
import '../../public/sass/main.scss';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <main className="h-full  px-0 2xl:px-56">
            {/* <Navbar />  */}
            
            <Banner />
            {/* {children} */}
            <CompanyLogo />
            {/* <Navbar />  */}
      {/* <!-- Company Logo End --> */}

      {/* <!-- Choose Here --> */}
      {/* <WhyChoose /> */}
      {/* <!-- Choose End --> */}

      {/* <!-- Categoris section Here --> */}
      <Categories />
      {/* <!-- Categoris section End --> */}

      {/* <!-- Service section Here --> */}
      {/* <Service /> */}
      {/* <!-- Service section End --> */}

      {/* <!-- Perfoming section Here --> */}
      {/* <Perform /> */}
      {/* <!-- Perfoming section End --> */}

      {/* <!-- Freelancing section Here --> */}
      {/* <Freelancer /> */}
      {/* <!-- Freelancing section End --> */}

      {/* <!-- App Here --> */}
      {/* <App />  */}
      {/* <!-- App End --> */}

      {/* <!-- Get Started Section Here --> */}
      {/* <GetStarted /> */}
      {/* <!-- Get Started Section End --> */}

      {/* <!-- timelywork section Here --> */}
      {/* <HowItWork /> */}
      {/* <!-- timelywork section End --> */}

      {/* <!-- testimonial two Here --> */}
      {/* <Testimonial /> */}
      {/* <!-- testimonial two End --> */}



      {/* <!--Footer Section--> */}
      <Footer />
            
        </main>
    );
}

export default DashboardLayout;