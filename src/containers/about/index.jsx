import React from 'react';
import PageHeader from '../../components/pageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import {Animate} from 'react-simple-animate'; 
import {FaCss3Alt, FaReact, FaHtml5, FaJsSquare} from 'react-icons/fa';
import './styles.scss';

 const personalDetails = [ 
                      {
                        label: 'Name',
                        value: 'Suresh Reddy Peram'
                       }, 
                       {
                        label: 'Age',
                        value: '37'
                       }, 
                       {
                        label: 'Gender',
                        value: 'Male'
                       },
                       {
                        label: 'Address',
                        value: 'Bengaluru, Karnataka'
                       }, 
                       {
                        label: 'Email',
                        value: 'sureshreddyperam123@gmail.com'
                       }, 
                       {
                        label: 'Mobile Number',
                        value: '9573549460'
                         } ];

const About = ()=>{

  const jobSummary = 'I am Frontend Developer with 2-years 6-months of experience. Proficient in HTML, CSS, Javascript, Bootstrap, JQuery, ReactJS, NodeJS, ExpressJS, Mongodb, MySQL, Oracledb, Github and more. I can develop attractive User Interface designs, responsive websites and mobile applications. Extensively worked with third party libraries and APIs. I can create reusable components and functionalities. ';
    return (
        <>
          <section id="about" className="about">
            <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
          </section>

          <div className="about__content">
            <div className="about__content__personalWrapper">
              
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
            <h3>Frontend Developer</h3>
            <p>{jobSummary} </p>
          </Animate> 

          <Animate
          play={true}
          duration={1.5}
          delay={1}
          start={{
            transform: `translateX(500px)`,
          }}
          end={{ 
            
            transform: `translateX(0px)`
           }}
        >
          <h3 className='personalInfo'>Personal Information </h3>
          <ul>
            {
              personalDetails.map( (item, index) => (
                <li key={index}> 
                <span className='label'> {item.label} </span> 
                <span className='value'> {item.value} </span>
                </li>
              ))
            }
          </ul>
          </Animate>
          </div>

            <div className="about__content__servicesWrapper">
            <Animate
          play={true}
          duration={1.5}
          delay={1}
          start={{
            transform: `translateX(600px)`
          }}
          end={{             
            transform: `translateX(0px)`
           }}
        >
              <div className='about__content__servicesWrapper__content'>
                <div>
                  <FaJsSquare size={60} color="var(--tomato-theme-main-color)" />
                </div>
                <div>
                  <FaCss3Alt size={60} color="var(--tomato-theme-main-color)" />
                </div>
                <div>
                  <FaReact size={60} color="var(--tomato-theme-main-color)" />
                </div>
                <div>
                  <FaHtml5 size={60} color="var(--tomato-theme-main-color)" />
                </div>
              </div>
              </Animate>
            </div>
          
          </div>
          
        </>
    );
}
export default About;