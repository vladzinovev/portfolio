import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { fadeIn } from "../utils/variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "These are the areas of user interface design. Make the program functional, intuitive and visually appealing. UX is the functionality of the interface, UI is its appearance.",
    link: "https://habr.com/ru/post/321312/",
  },
  {
    name: "Development",
    description:
      "Creating websites using programming languages or CMS. The interface developer is responsible for coding and programming the elements of the website visible to site visitors.",
    link: "https://dzen.ru/a/Y4Z_vM6X_TM6l-6a",
  },
  {
    name: "Digital Marketing",
    description:
      "Digital marketing is described as the collection of tools, procedures, and strategies used to aggressively market a product, service, or company.",
    link: "https://practicum.yandex.ru/blog/digital-marketing/",
  },
  {
    name: "Product Branding",
    description:
      "Digital branding is the marketing technique of actively shaping your brand. Branding is the process of defining who you are as a company.",
    link: "https://blog.avada.io/resources/product-branding.html",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-blue-500 mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {" "}
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <Link
              smooth={true}
              spy={true}
              to="work"
              className="cursor-pointer items-center"
            >
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[32px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        className=" mr-[-10px] bg-gradient-to-r text-transparent bg-clip-text w-[50px] from-[#42A6E3] to-[#42A6E3] text-m leading-none hover:from-[#FF56F6] hover:to-[#42A6E3]"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;