import { FaGitAlt, FaGithub, FaJava, FaReact, FaVuejs, FaNodeJs, FaNpm } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiChakraui, SiFirebase, SiMysql, SiAstro, SiSvelte } from "react-icons/si";



export const Carrousel = () => {
    return (
        <div className="max-md:w-4/6 md:w-3/6 whitespace-nowrap overflow-hidden flex flex-col gap-y-8 py-4 relative dark:before:absolute dark:before:z-20 dark:before:bg-[linear-gradient(to_left,transparent,#403933)] dark:before:top-0 dark:before:left-0 dark:before:w-64 dark:before:h-full dark:after:absolute dark:after:w-64 dark:after:h-full dark:after:bg-[linear-gradient(to_right,transparent,#403933)] dark:after:right-0 dark:after:top-0 before:absolute before:top-0 before:left-0 before:w-64 before:h-full before:bg-[linear-gradient(to_left,transparent,#F2EADF)] after:absolute after:top-0 after:right-0 after:w-64 after:h-full after:bg-[linear-gradient(to_right,transparent,#F2EADF)] before:z-10 after:z-10">
            <div className="flex animate-slide2 w-screen max-sm:gap-2 justify-end">
                <div className="flex text-6xl justify-around min-w-full max-sm:gap-2">
                    <FaGitAlt/>
                    <FaGithub/>
                    <FaReact/>
                    <FaJava/>
                    <FaNodeJs/>
                    <FaNpm/>
                    <FaVuejs/>
                    <SiSvelte/>
                </div>
                <div className="flex text-6xl justify-around min-w-full max-sm:gap-2">
                    <FaGitAlt/>
                    <FaGithub/>
                    <FaReact/>
                    <FaJava/>
                    <FaNodeJs/>
                    <FaNpm/>
                    <FaVuejs/>
                    <SiSvelte/>
                </div>
            </div>
            <div className="flex animate-slide w-screen max-sm:gap-2">
                <div className="text-6xl flex min-w-full justify-around max-sm:gap-2">
                    <SiChakraui/>
                    <SiFirebase/>
                    <SiJavascript/>
                    <SiMysql/>
                    <SiNextdotjs/>
                    <SiTailwindcss/>
                    <SiTypescript/>
                    <SiAstro />
                </div>
                <div className="text-6xl flex min-w-full justify-around max-sm:gap-2">
                    <SiChakraui/>
                    <SiFirebase/>
                    <SiJavascript/>
                    <SiMysql/>
                    <SiNextdotjs/>
                    <SiTailwindcss/>
                    <SiTypescript/>
                    <SiAstro />
                </div>
            </div>
        </div>
    )
}