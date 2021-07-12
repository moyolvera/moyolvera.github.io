import React from 'react';
import { ResumeData } from '../declarations/global';
import { FeaturesMap } from '../components';

function Portfolio({ resumeData }: { resumeData: ResumeData }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>RELATED EXPERIENCE AND PROJECTS</h1>
          <div>
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return (
                  <div key={`${item.name}-${index}`} className="row">
                    <div className="three columns center-text">
                      <img className="profile-pic" src={item.imgurl} alt="" />
                    </div>
                    <div className="nine columns main-col">
                      <h2>{item.name}</h2>
                      <p className="info">
                        {item.detail}
                        <span>&bull;</span> <em className="date">{item.year}</em>
                      </p>
                      <p>{item.description}</p>
                      <FeaturesMap tools={item.tools} features={item.features} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
