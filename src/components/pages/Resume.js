import React from 'react';
import MyPDF from '../../resume/myResume.pdf';

export default function Resume() {
  return (
    <div>
      <h2>Download my resume below!</h2>
      <h4>Frontend</h4>
      <ul>
        List of skills Frontend and back end and ability to download Resume
      </ul>
      <h4>Backend</h4>
      <ul>
        List of skills Frontend and back end and ability to download Resume
      </ul>
      <a href={MyPDF} download="myResume.pdf"> Download Here </a>
    </div>
  );
}
