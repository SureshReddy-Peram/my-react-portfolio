import React from 'react';
import PageHeader from '../../components/pageHeader';
import {BsInfoCircleFill} from 'react-icons/bs';
const Portfolio = ()=>{
    return (
        <>
            <section id="portfolio" className='portfolio'>
                <PageHeader headerText="My Portfolio" icon={<BsInfoCircleFill size={40} />} />
            </section>
        </>
    );
}
export default Portfolio;