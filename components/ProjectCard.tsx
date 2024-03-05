import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import Image from "next/image";

interface ProjectCardProps {
  project: IProject;
  id:number;
  showDetail: { show: boolean; index: number };
  handleShowDetails: (show: boolean, index: number) => void;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  id,
  showDetail,
  handleShowDetails,
}) => {
  return (
    <div>
      {!showDetail.show && (
        <div>
          <Image
            src={image_path}
            alt={name}
            className="cursor-pointer"
            onClick={() => handleShowDetails(true, id)}
            layout="responsive"
            width={300}
            height={150}
            quality={90}
            objectFit="cover"
          />
          <p className="my-2 text-center">{name}</p>
        </div>
      )}
      {showDetail.show && showDetail.index === id && (
        <div className="border box-shadow-2xl rounded-md absolute top-0 left-0 z-40 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-1 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              width={300}
              height={150}
              quality={90}
              objectFit="cover"
            />
            <div className="flex justify-center my-4 space-x-3">
              {github_url && (
                <a
                  href={github_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              )}
              {deployed_url && (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Live</span>
                </a>
              )}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => handleShowDetails(false,id)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
