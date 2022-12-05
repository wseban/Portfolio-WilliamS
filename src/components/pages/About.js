import React from 'react';
import pic from '../../utils/pics/IMG_2605.JPG'

export default function About() {
  
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <h2>About Me</h2>
      <img src = {pic} alt='developer' style={{maxWidth: "400px", boxShadow: "5px -5px gray", zIndex: "1"}}/>
      <p>
      Full stack web developer, accomplished project manager and prior Army Captain with a, previously held, top-secret security clearance and 12 years of leadership experience. Respected leader, organizer, and manager, able to plan and implement programs for short and long-term objectives. Experienced in project management, web-APIs (HTML, CSS, JavaScript), third-party APIs (jQuery, Bootstrap, google fonts), server-side APIs, backend development (mySQL && noSQL) and operations planning. 
      </p>
    </div>
  );
}
