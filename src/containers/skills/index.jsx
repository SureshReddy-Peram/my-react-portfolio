import React from "react";
import PageHeader from "../../components/pageHeader";
import { GiSkills } from "react-icons/gi";
import { skillsData}  from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import {Line} from 'rc-progress';
import './styles.scss';

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <PageHeader
          headerText="My Skills"
          icon={<GiSkills size={40} />}
        />

      
      <div className="skills__content-wrapper">
        {
         skillsData.map((item,i) => (
          
            <div key={i} className="skills__content-wrapper__inner-content">
              <Animate
                play={true}
                duration={1}
                delay={0.3}
                start={{
                  transform: `translateX(-200px)`,
                }}
                end={{
                  transform: `translateX(0px)`,
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__skillItem"> {item.label} </h3>

                <div>
                    {
                        item.data.map( (skillItem,j) => (
                            <AnimateKeyframes 
                              play
                              duration={1}
                              keyframes={[ "opacity: 1", "opacity: 0" ]}
                              iterationCount="1"
                            >
                                <div className="progressbar-wrapper" key={j}>
                                    <p>{skillItem.skillName} </p>
                                    <Line
                                      percent= {skillItem.percentage}
                                      strokeWidth= "2"
                                      strokeColor= "green"
                                      strokeLinecap="round"
                                      trailWidth= "2"
                                      trailColor="yellow"
                                    />
                                </div>

                            </AnimateKeyframes>
                        ))
                    }
                </div>
              </Animate>
            </div>
          )
            )}
      </div>
      </section>
    </>
  );
};
export default Skills;
