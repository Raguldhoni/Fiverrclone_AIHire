import BlogDetails from "../../components1/blog/BlogDetails";
import Breadcrumb from "../../components1/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb title="Blog - Details" items={["Home", "Blog", "Details"]} />
      <BlogDetails />
    </>
  );
};

export default page;
