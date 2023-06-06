import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { inViewHandler } from "../animationHandler";
import Accordion from "./Accordion"

const Portfolio = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="portfolio" className="section bg-primary min-h-[600px]">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            <h2 className="section-title">My profile</h2>
            <p className="subtitle">Followng is a short description of my skills.</p>
          </motion.div>
          <Accordion />
        </div>
      </section>
    </InView>
  )
}

export default Portfolio