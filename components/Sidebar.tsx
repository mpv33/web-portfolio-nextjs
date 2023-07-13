import { AiFillGithub, AiFillLinkedin, } from "react-icons/ai";
import { FaRegMoon ,FaHackerrank} from "react-icons/fa";
import { BsSun,BsPhoneVibrate } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect,useState } from "react";
import dp from '../assest/images/mpv.jpg'
import { userData } from "@/data";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme,setCurrentTheme]=useState('')

  useEffect(() => {
    if(theme){
      setCurrentTheme(theme)
    }
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

  };

  return (
    <>
      <Image
        src={userData?.dp}
        alt="avatar"
        className=" mx-auto border rounded-full "
        height={128}
        width={128}
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-2xl tracking-wider font-kaushan">
        <span className="text-green ">{userData?.name}</span> {userData?.lastName}
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
      {userData?.position}
      </p>
   

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">

        <a href={userData?.contacts?.linkedin_url} target="_blank" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href={userData?.contacts?.coding_profile} target="_blank" >
          <FaHackerrank className="w-8 h-8 cursor-pointer" />
        </a>
        
        <a href={userData?.contacts?.github_url} target="_blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center md:justify-start ml-4">
          <GoLocation className="mr-2 text-black dark:text-white" /> <span>{userData?.contacts?.address} </span>
        </div>
        <div className="flex items-center justify-center md:justify-start ml-4">
          <MdEmail className="mr-2 text-black dark:text-white"/> <span> {userData?.contacts?.email} </span>
        </div>
        <div className="flex items-center justify-center md:justify-start ml-4">
          <BsPhoneVibrate className="mr-2 text-black dark:text-white" /> <span> {userData?.contacts?.mobile} </span>
        </div>
      </div>

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open(`mailto:${userData?.contacts?.email}`)}
      >
        Email me
      </button>
      <br />
      <button
        onClick={changeTheme}
        className="w-[20px] mt-4 md:mt-12 cursor-pointer  focus:outline-none hover:scale-105 "
      >
       {
       currentTheme !== "light" ? <FaRegMoon className="text-black dark:text-white h-[30px] w-[30px]" /> : <BsSun className="text-black dark:text-white  h-[30px] w-[30px]" />
       }
      </button>
    </>
  );
};

export default Sidebar;
