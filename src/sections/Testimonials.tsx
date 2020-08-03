import React from 'react';
import { ResumeData } from '../declarations/global';

function Testimonials({ resumeData }: { resumeData: ResumeData }) {
  return (
    <section id="testimonials">
      <div className="row">
        <div className="twelve columns collapsed">
          <div id="portfolio-wrapper" className="s-bgrid-thirds cf">
            <h1 id="references-title">REFERENCES</h1>
            {resumeData.references &&
              resumeData.references.map((item) => {
                return (
                  <div key={item.mail} className="third-of-screen columns portfolio-item">
                    <div className="portfolio-item-meta">
                      <h5>{item.name}</h5>
                      <p>{item.position}</p>
                      <p>{item.mail}</p>
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

export default Testimonials;
