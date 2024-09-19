import FeaturedDetails from "../../../../(dashboard)/_components/components1/featured/FeaturedDetails";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Featured Job - Details"
        items={["Home", "Browse Job", "Featured Job", "Details"]}
      />
      <FeaturedDetails />
    </>
  );
};

export default page;
