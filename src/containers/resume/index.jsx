import React from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import {MdWork} from 'react-icons/md';
import {FaBookOpen} from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import './styles.scss';


const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <PageHeader headerText="My Resume"
          icon={<BsInfoCircleFill size={40} />}
        />  
         
        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header">Experience</h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--tomato-theme-main-color)"
            >
              {data.experience.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline__experience__item"
                  contentStyle={{
                    background:"none",
                    color: '--tomato-theme-sub-text-color',
                    border: '1.5px solid var(--tomato-theme-main-color)'
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background:'#989898',
                    color: 'var(--tomato-theme-main-color)'
                  }}
                >
                  <div className="timeline__experience__item__title-wrapper">
                    <h3>
                      {item.title} <br />
                      {item.company}<br />
                      {item.location}
                    </h3>

                    <h4>                       
                      {item.period}
                    </h4>                    
                  </div>
                  <p>
                      {item.description}
                    </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header">Education</h3>
            <VerticalTimeline
              layout={"1-column"}
              lineColor="var(--tomato-theme-main-color)"
            >
              {data.education.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline__education__item"
                  contentStyle={{
                    background:"none",
                    color: '--tomato-theme-sub-text-color',
                    border: '1.5px solid var(--tomato-theme-main-color)'
                  }}
                  icon={<FaBookOpen />}
                  iconStyle={{
                    background:'#989898',
                    color: 'var(--tomato-theme-main-color)'
                  }}
                >
                    <div className="timeline__education__item__title-wrapper">
                    <h3>
                      {item.title} <br />
                      {item.institute}<br />
                      {item.location} <br />
                    </h3>

                    <h4>
                    <br />
                      {item.period}
                    </h4>                    
                  </div>
                 
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resume;
