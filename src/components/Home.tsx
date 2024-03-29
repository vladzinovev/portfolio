import { Link } from "react-scroll";
import { FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/variants";
import Image from "../assets/avatar.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[65px] font-bold leading-[0.8] lg:text-[110px]"
            >
              VLAD <span>ZINOVIEV</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[58px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Blogger",
                  2000,
                ]}
                speed={50}
                className="text-blue-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Welcome to my website. I am a frontend developer from Kazan. I
              have been writing custom websites for more than 5 years, of any
              complexity. I also support websites. I have more than a hundred
              satisfied customers.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                smooth={true}
                spy={true}
                to="services"
                className="cursor-pointer items-center"
              >
                <button className="btn btn-lg">Development</button>
              </Link>

              <Link
                smooth={true}
                spy={true}
                to="work"
                className="cursor-pointer items-center text-gradient btn-link"
              >
                My works
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/vladzinovev">
                <FaGithub />
              </a>
              <a href="https://t.me/vladz10">
                <FaTelegramPlane />
              </a>
              <a href="https://instagram.com/vlad_z_10">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;