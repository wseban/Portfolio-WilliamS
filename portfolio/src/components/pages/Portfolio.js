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
    img: "https://github.com/wseban/Note-Taker/blob/main/public/pics/Landing.png?raw=true"
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
      <h2>Portfolio</h2>
      <p>
        <Card img={disneyPic}/>
        <Card img={links[1].img}/>
        <Card img={links[2].img}/>
        <Card img={links[3].img}/>
        <Card img={getRoutePic}/>
        <Card img={links[5].img}/>
      </p>
    </div>
  );
}
