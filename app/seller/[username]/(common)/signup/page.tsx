import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";
import SignUp from "../../../../(dashboard)/_components/components1/signup/SignUp";

const page = () => {
  return (
    <>
      <Breadcrumb title="Sign up" items={["Home", "Pages", "Sign up"]} />
      <SignUp />
    </>
  );
};

export default page;
