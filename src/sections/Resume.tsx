import React from 'react';
import { ResumeData } from '../declarations/global';
import { FeaturesMap } from '../components';

function Resume({ resumeData }: { resumeData: ResumeData }) {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item) => {
              return (
                <div className="row item" key={item.UniversityName}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item) => {
              return (
                <div className="row item" key={item.specialization}>
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    {item.Achievements.length > 0 && (
                      <ul>
                        {item.Achievements.map((description) => (
                          <li>
                            <span>&bull;</span> {description}
                          </li>
                        ))}
                      </ul>
                    )}
                    <FeaturesMap tools={item.Tools} features={item.features} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>
          <div className="bars">
            <ul className="skills">
              {resumeData.skills &&
                resumeData.skills.map((item) => {
                  return (
                    <li key={item.skillname}>
                      <span className={`bar-expand ${item.skillname.replace(' ', '').toLowerCase()}`}></span>
                      <br />
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
          <br />
          <p>{resumeData.moreSkills}</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
