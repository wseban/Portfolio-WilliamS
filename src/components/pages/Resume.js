import React from 'react';
import MyPDF from '../../resume/myResume.pdf';
import { IoIosCloudDownload } from "react-icons/io";

export default function Resume() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto"}}>
      <h2>Download my resume below!</h2>
      <h4>Frontend</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Response Design</li>
        <li>React.js</li>
        <li>Bootstrap</li>
      </ul>
      <h4>Backend</h4>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>mySQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      <p>Download Complete Resume Here</p>
      <a style={{fontSize: "70px"}} href={MyPDF} download="myResume.pdf"> <IoIosCloudDownload/> </a>
    </div>
  );
}
