import React from 'react';
import { ResumeData } from '../declarations/global';

function ContactUs({ resumeData }: { resumeData: ResumeData }) {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">Feel free to contact me for any work or suggestions.</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
