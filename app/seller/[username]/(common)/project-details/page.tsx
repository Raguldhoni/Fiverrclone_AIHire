import ProjectDetails from "../../../../(dashboard)/_components/components1/project/ProjectDetails";
import Breadcrumb from "../../../../(dashboard)/_components/components1/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Projects - Details"
        items={["Home", "Browse Job", "Projects", "Projects - Details"]}
      />
      <ProjectDetails />
    </>
  );
};

export default page;
