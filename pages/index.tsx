import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services, userData } from "../data";
import SEO from "@/components/SEO";

const About: NextPage = () => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <SEO
        title={`${userData.name} Portfolio`}
        description={userData.defaultDescription}
      />
      <div className="my-3 text-base font-medium">
        <div dangerouslySetInnerHTML={{ __html: userData?.about }} />
      </div>
      <div
        className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          Area of interest
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
