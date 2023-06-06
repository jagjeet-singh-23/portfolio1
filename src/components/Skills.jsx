import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { inViewHandler } from "../animationHandler";
import { skills } from "../data";

const Skills = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section className="h-76 bg-primary py-12">
        <div className="container mx-auto">
          <motion.div
            className="flex justify-center gap-24" 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {skills.map((skill, index) => {
              return (
                <div key={index} className="max-h-xs">
                  <img src={skill.image} alt="skill" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};

export default Skills;
