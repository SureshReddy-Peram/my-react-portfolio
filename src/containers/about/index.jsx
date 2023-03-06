import React from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import {Animate} from 'react-simple-animate'; 

const About = ()=>{

  const jobSummary = 'I am Frontend Developer with 3-years of experience. proficient in HTML,CSS,Javascript,Bootstrap,JQuery,ReactJS,NodeJS,ExpressJS,MongoDB,MySQL,Github and more. I can develop attractive UserInterface designs, responsive websites and mobile applications. Extensively worked with third party libraries and APIs. I can create reusable components and functionalities. ';
    return (
        <>
          <section id="about" className="about">
            <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
          </section>

          <div className="about__content">
          <Animate
          play={true}
          duration={1.5}
          delay={1}
          start={{
            transform: `translateX(-900px)`,
          }}
          end={{ 
            
            transform: `translateX(0px)`
           }}
        >
            <h2>Frontend Developer</h2>
            <p>{jobSummary} </p>
          </Animate>  
          </div>
        </>
    );
}
export default About;