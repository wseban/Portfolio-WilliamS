import React from 'react';
import Card from './Card';

export default function Blog() {
const links = [
  {
    name: "Mickey",
    activeLink: "https://wseban.github.io/Mickey-n-Friends-Finder/",
    repoLink: "https://github.com/wseban/Mickey-n-Friends-Finder",
    img: "https://raw.githubusercontent.com/wseban/Code-Quiz/main/assets/Code-quiz-open.jpeg"
  },
  {
    name: "Weather",
    activeLink: "https://wseban.github.io/Weather-Dashboard/",
    repoLink: "https://github.com/wseban/Weather-Dashboard",
    img: ""
  },
  {
    name: "Scheduler",
    activeLink: "https://wseban.github.io/Day-Schedule/",
    repoLink: "https://github.com/wseban/Day-Schedule",
    img: ""
  },
  {
    name: "Get Route",
    activeLink: "http://get-route-group-5.herokuapp.com/",
    repoLink: "https://github.com/wseban/Get-Route",
    img: ""
  },
  {
    name: "Note Taker",
    activeLink: "https://note-taker-seban.herokuapp.com/",
    repoLink: "https://github.com/wseban/Note-Taker",
    img: ""
  },
  {
    name: "Code Quiz",
    activeLink: "https://wseban.github.io/Code-Quiz/",
    repoLink: "https://github.com/wseban/Code-Quiz",
    img: ""
  }
];

  return (
    <div>
      <h2>Portfolio</h2>
      <p>
        <Card img={links[0].img}/>
      </p>
    </div>
  );
}
