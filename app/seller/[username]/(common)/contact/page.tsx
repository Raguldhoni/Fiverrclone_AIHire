import Contact from "../../../../(dashboard)/_components/components1/contact/Contact";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb title="Contact us" items={["Home", "Contact us"]} />
      <Contact />
    </>
  );
};

export default page;
