import React from 'react';
import Card from './Card';
import disneyPic from "../../utils/pics/Disney.png";
import getRoutePic from "../../utils/pics/Get-Route.png";

export default function Blog() {
const links = [
  {
    name: "Mickey",
    activeLink: "https://wseban.github.io/Mickey-n-Friends-Finder/",
    repoLink: "https://github.com/wseban/Mickey-n-Friends-Finder"
  },
  {
    name: "Weather",
    activeLink: "https://wseban.github.io/Weather-Dashboard/",
    repoLink: "https://github.com/wseban/Weather-Dashboard",
    img: "https://github.com/wseban/Weather-Dashboard/blob/main/assets/Weatherapp.jpeg?raw=true"
  },
  {
    name: "Scheduler",
    activeLink: "https://wseban.github.io/Day-Schedule/",
    repoLink: "https://github.com/wseban/Day-Schedule",
    img: "https://github.com/wseban/Day-Schedule/blob/main/assets/Work-scheduler.jpeg?raw=true"
  },
  {
    name: "Get Route",
    activeLink: "http://get-route-group-5.herokuapp.com/",
    repoLink: "https://github.com/wseban/Get-Route"
  },
  {
    name: "Note Taker",
    activeLink: "https://note-taker-seban.herokuapp.com/",
    repoLink: "https://github.com/wseban/Note-Taker",
    img: "https://raw.githubusercontent.com/wseban/Note-Taker/main/public/pics/Landing.png"
  },
  {
    name: "Code Quiz",
    activeLink: "https://wseban.github.io/Code-Quiz/",
    repoLink: "https://github.com/wseban/Code-Quiz",
    img: "https://raw.githubusercontent.com/wseban/Code-Quiz/main/assets/Code-quiz-open.jpeg"
  }
];

  return (
    <div>
      <h2 style={{ maxWidth: "150px", margin: "0 auto", fontFamily: "serif" }}>Portfolio</h2>
      <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <Card img={disneyPic} activeLink={links[0].activeLink} repoLink={links[0].repoLink}/>
        <Card img={links[1].img} activeLink={links[1].activeLink} repoLink={links[1].repoLink}/>
        <Card img={links[2].img} activeLink={links[2].activeLink} repoLink={links[2].repoLink}/>
        <Card img={links[4].img} activeLink={links[3].activeLink} repoLink={links[3].repoLink}/>
        <Card img={getRoutePic} activeLink={links[4].activeLink} repoLink={links[4].repoLink}/>
        <Card img={links[5].img} activeLink={links[5].activeLink} repoLink={links[5].repoLink}/>
      </div>
    </div>
  );
}
