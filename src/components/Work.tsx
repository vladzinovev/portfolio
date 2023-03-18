import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";


const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10"
          >
            <div>
              <h2 className="h2 leading-tight text-blue-500">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16 lg:mb-10 xl:mb-16">
                Below are some samples. I create various MPA, SPA and PWA.
                Deadlines depend on the complexity of the work (from 7 days to
                30 days).
              </p>
              <Link
                smooth={true}
                spy={true}
                to="contact"
                className="cursor-pointer items-center "
              >
                <button className="btn btn-sm mr-5">Contact me</button>
              </Link>
              <a
                href="https://github.com/vladzinovev"
                className="cursor-pointer items-center text-gradient btn-link"
              >
                View all projects
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">Nike</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mb-0 lg:mb-11 xl:mb-0">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">Development</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">IKEA</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient">Digital Marketing</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">wildberries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;