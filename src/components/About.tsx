import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <div
            className="flex-1"
          >
            <motion.h2 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className="h2 text-blue-500">About me.</motion.h2>
            <motion.h3 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </motion.h3>
            <motion.p 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6">
              My name is Vladislav Zinoviev. I write websites of any complexity.
              Also at the moment I am engaged in website support for more than
              10 large branded stores. If you want me to make a website, leave a
              request through the form. <br /> I use: React, Next, Mob-x, Redux
              toolkit, React Context, React-Query, Java Script, Type Script,
              HTML, CSS (SASS,SCSS), React-Query, Material-UI, Tailwindcss.
            </motion.p>
            <motion.div 
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={11} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={88} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
             className="flex gap-x-8 items-center">
              <Link
                smooth={true}
                spy={true}
                to="contact"
                className="cursor-pointer items-center"
              >
                <button className="btn btn-lg">Contact me</button>
              </Link>

              <a href="#" className="text-gradient btn-link">
                <Link
                  smooth={true}
                  spy={true}
                  to="services"
                  className="cursor-pointer items-center"
                >
                  Development
                </Link>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;