import { motion } from "framer-motion";
import { SiGithub, SiTwitter } from "react-icons/si";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "@components/ui/Button";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <>
      <AboutSection
        content={[
          <div key="hero">
            <div className="flex items-center space-x-3 mb-[12px] text-black dark:text-white">
              <a href="https://github.com/AbhinavRajesh">
                <SiGithub className="w-7 h-7" />
              </a>
              <a href="https://twitter.com/_AbhinavRajesh_">
                <SiTwitter className="w-7 h-7" />
              </a>
              <span className="flex items-center px-[12px] py-[4px] rounded-full bg-slate-200 text-black">
                <HiOutlineLocationMarker className="w-5 h-5 mr-[5px]" />
                <span>Kerala, India</span>
              </span>
            </div>
            <h1 className="text-xl md:text-2xl mb-[30px] font-bold">
              Hey, I&apos;m{" "}
              <span className="text-primary_light dark:text-primary_dark">
                Abhinav Rajesh
              </span>
            </h1>
            I&apos;m a passionate UI/ UX Designer and{" "}
            <span className="font-bold text-primary_light dark:text-primary_dark">
              Full Stack Developer
            </span>{" "}
            based in India. Web development has transformed from a spark of
            interest to an all out passion and an area that I want to master.
          </div>,
        ]}
        delay={0}
      />
      <AboutSection
        content={[
          <div key="hero">
            I hold a Bachelor&apos;s degree in Computer Science and Engineering
            from{" "}
            <a
              href="https://soe.cusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              School of Engineering, CUSAT, India
            </a>
            . My aspiration has always been to collaborate and thrive within a
            dynamic team of passionate and like-minded creatives. I am eager to
            contribute my skills and dedication to projects that challenge and
            inspire, fostering both personal and collective growth.
          </div>,
        ]}
        delay={0.1}
      />
      <AboutSection
        content={
          "Being a developer has given me the ability to craft digital things that not only look cool and interesting but that can be moved and interacted with. Enabling me to give great design life in a sense."
        }
        delay={0.2}
      />
      <AboutSection
        content={[
          <div key="hero">
            I occasionally write about technology at my{" "}
            <a
              href="https://blog.abhinavrajesh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              blog.
            </a>
          </div>,
        ]}
        delay={0.3}
      />
      <AboutSection
        content={[
          <div key="hero">
            You can find me on{" "}
            <a
              href="https://twitter.com/_AbhinavRajesh_"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              X
            </a>{" "}
            where I talk about technology, or on{" "}
            <a
              href="https://github.com/AbhinavRajesh"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              Github
            </a>{" "}
            where I&apos;m building in the open.
          </div>,
        ]}
        delay={0.4}
      />
      <motion.div
        className="flex mt-[28px] text-[14px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "tween",
        }}
        initial={{
          y: "30px",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <Button
          to="/resume/march-2024.pdf"
          text="Resume"
          key="update"
          extraClassNames="mr-[8px]"
        />
        <Button to="/projects" text="Checkout my projects" key="projects" />
      </motion.div>
    </>
  );
};

export default About;
