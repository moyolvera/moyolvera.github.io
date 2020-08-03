import React from 'react';
import { About, ContactUs, Footer, Header, Portfolio, Resume, Testimonials } from './sections';
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Testimonials resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
