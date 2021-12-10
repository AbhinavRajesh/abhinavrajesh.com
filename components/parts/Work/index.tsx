import Card from "@components/ui/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const workExperience: Parameters<typeof Card>[0][] = [
  {
    title: (
      <div className="flex flex-col">
        <span className="m-0 leading-[19px]">Software Engineer Intern</span>
        <a
          href="https://growth.cx"
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 leading-[17px] text-xs font-bold text-primary_light"
        >
          @Growth.CX
        </a>
      </div>
    ),
    value: "Mar. 2021 - Present",
    description:
      "Responsible for making Frontend of their upcoming product using React, TypeScript, AntD and TailwindCSS ",
  },
];

const Work = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
    >
      <motion.h2 className="text-lg font-bold text-black" animate={animation}>
        Work Experience
      </motion.h2>
      {workExperience?.map(({ title, value, description, extras }, i) => (
        <Card
          title={title}
          value={value}
          description={description}
          extras={extras}
          delay={i / 10 + 0.2}
          inView={inView}
          key={i}
        />
      ))}
    </div>
  );
};

export default Work;