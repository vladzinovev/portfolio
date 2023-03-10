import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView]=useInView({
    threshold:0.5,
  })
  return (
    <section id='about' className='section' ref={ref}>
      <div className="container mx-auto">
        <div>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
          <div>
            <h2>About me.</h2>
            <h3>I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, natus! Cumque, aliquam molestias. A illo sed asperiores alias nobis cupiditate eos omnis saepe praesentium. Consequuntur suscipit ullam impedit veritatis odit.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3}/>:null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3}/>:null}k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3}/>:null}k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br/>
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
