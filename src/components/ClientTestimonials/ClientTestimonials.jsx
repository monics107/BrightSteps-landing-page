import React from 'react';
import './ClientTestimonials.css';   

const ClientTestimonials = () => {
  return (
    <section className="testimonials-section">
      <p className="live-text">Watch !</p>
      <h3 className="experience-text">To Have Live Experience</h3>
      
      <iframe class="player"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/u-Wi4zbQ7TA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>


      <p className="clients-heading">Our Clients Says</p>
      <h2 className="main-heading">
        Why Institutes love BrightSteps School ERP System?
      </h2>

      <div className="testimonial-cards">
        {/* Card 1 */}
        <div className="testimonial-card">
          <div className="card-header">
            <img src={`${import.meta.env.BASE_URL}anjali.png`} alt=" "/>
            <div>
              <p className="name">Mrs. Anjali</p>
              <p className="role">Parent, Karnataka</p>
            </div>
          </div>
          <p className="testimonial-text">
            BrightSteps has made our day-to-day processes and administrative duties much easier,
            more streamlined and time-effective.
          </p>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <div className="card-header">
            <img src={`${import.meta.env.BASE_URL}bindu.png`} alt=" "/>
            <div>
              <p className="name">Bindu Madewi</p>
              <p className="role">School Leader</p>
            </div>
          </div>
          <p className="testimonial-text">
            BrightSteps features are not only useful and efficient for Moni’s operations but also provide
            significant support for interaction between the school and parents.
          </p>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <div className="card-header">
            <img src={`${import.meta.env.BASE_URL}pravas.png`} alt=" "/>
            <div>
              <p className="name">DR. Pravalika Sree</p>
              <p className="role">Teacher and Head of Institute</p>
            </div>
          </div>
          <p className="testimonial-text">
            Brightsteps has helped our operations such as fees collection become more manageable and simpler.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
