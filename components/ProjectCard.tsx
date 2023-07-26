import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
  key:any
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
      <div>
        <div>
          <Image
            src={image_path}
            alt={name}
            className="cursor-pointer"
            onClick={() => setShowDetail(true)}
            layout="responsive"
            width={300} // Default width
            height={150} // Default height
            quality={90} // Adjust image quality (0-100)
            objectFit="cover" // To ensure the image covers the container
          />
          <p className="my-2 text-center">{name}</p>
        </div>
        {showDetail && (
          <div className="border box-shadow-2xl rounded-md absolute top-0 left-0 z-40 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-1 gap-x-12 dark:text-white dark:bg-dark-100">
            <div>
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                width={300} // Default width
                height={150} // Default height
                quality={90} // Adjust image quality (0-100)
                objectFit="cover" // To ensure the image covers the container
              />
              <div className="flex justify-center my-4 space-x-3">
                {
                  github_url &&
                  <a
                    href={github_url}
                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                  >
                    <AiFillGithub /> <span>Github</span>
                  </a>
                }
                {
                  deployed_url &&
                  <a
                    href={deployed_url}
                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                  >
                    <AiFillProject /> <span>Live</span>
                  </a>
                }
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
              <h3 className="mb-3 font-medium">{description}</h3>
              <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowDetail(false)}
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
