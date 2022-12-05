import React from 'react';
import MyPDF from '../../resume/myResume.pdf';

export default function Resume() {
  return (
    <div>
      <h2>Download my resume below!</h2>
      <h4>Frontend</h4>
      <p>
        List of skills Frontend and back end and ability to download Resume
      </p>
      <h4>Backend</h4>
      <p>
        List of skills Frontend and back end and ability to download Resume
      </p>
      <a href={MyPDF} download="myResume.pdf"> Download Here </a>
    </div>
  );
}
