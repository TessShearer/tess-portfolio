import React from 'react';
import ResumePDF from '../../assets/Resume.pdf'
import Resume1 from '../../assets/images/Resume_page_1.png'
import Resume2 from '../../assets/images/Resume_page_2.png'

function Resume() {
    return (
        <section className="my-5 resume">

            <a href={ResumePDF} target="_blank" rel="noreferrer">Download my Resume Here!</a>

            <div className='row res-pic'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <img
                        src={Resume1} className="res-pic" alt="Tess Resume" />
                    <img
                        src={Resume2} className="res-pic" alt="Tess Resume" />
                </div>
                <div className='col-3'></div>
            </div>
        </section>
    );
}

export default Resume;