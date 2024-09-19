import FreelancerDetails from "../../components1/freelancer/FreelancerDetails";
import Breadcrumb from "../../components1/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb
        items={["Home", "Find Talent", "Freelancer", "Details"]}
        title="Freelancer - Details"
      />
      <FreelancerDetails />
    </>
  );
};

export default page;
