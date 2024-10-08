import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData, userData } from "../data";
import { Category } from "../types";
import SEO from "@/components/SEO";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState({
    show:false,
    index:0
  });

  const handleShowDetails=(details:boolean,id:number)=>{
    setShowDetail({
      show:details,
      index:id
    })
  }

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>

      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {
          projects?.length > 0 ?
            projects.map((project,i) => (
              <div key={i} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                <ProjectCard
                  project={project}
                  id={i}
                  showDetail={showDetail}
                  handleShowDetails={handleShowDetails}
                />
                <SEO
                  title={`${userData.name} Projects`}
                  description={project.description}
                />
              </div>
            ))
            :
            <div className="w-full flex justify-center items-center rounded-md bg-gray-100 text-center col-span-12 h-[200px]">
              No Project Found
            </div>
        }

      </div>
    </div>
  );
};

export default Projects;
