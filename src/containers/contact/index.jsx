import React from "react";
import PageHeader from "../../components/pageHeader";
import { RiContactsFill } from "react-icons/ri";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <PageHeader
          headerText="My Contact"
          icon={<RiContactsFill size={40} />}
        />
      </section>
      <div className="contact__content">
        <Animate
          play={true}
          duration={1}
          delay={0}
          start={{ transform: `translateX(-200px)` }}
          end={{ transform: `translateX(0px)` }}
        >
          <h3 className="contact__content__header-text">Let's talk</h3>
        </Animate>
        
        <Animate
          play={true}
          duration={1}
          delay={0}
          start={{ transform: `translateX(200px)` }}
          end={{ transform: `translateX(0px)` }}
        >
          
            <div className="contact__content__form">
              <div className="contact__content__form__control-wrapper">
                <div className="nameWrapper">
                    <input type="text" className="inputName" name="name" id="name" required />
                    <label htmlFor="name" className="nameLabel"> Name</label>
                </div>
                <div className="email">
                    <input type="email" className="inputEmail" name="email" id="email" required />
                    <label htmlFor="email" className="emailLabel"> Email</label>
                </div>
                <div className="description">
                    <textarea type="text" className="inputDescription" rows={5} name="description" id="desc" required />
                    <label htmlFor="desc" className="descLabel"> Description</label>
                </div>
                
              </div>
              <button type="button">Submit</button>
            </div>
        </Animate>
      </div>
    </>
  );
};
export default Contact;
