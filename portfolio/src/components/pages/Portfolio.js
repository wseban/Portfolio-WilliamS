import React from 'react';
import Card from './Card';

export default function Blog() {

  const activeLinks = [" https://wseban.github.io/Mickey-n-Friends-Finder/", "https://wseban.github.io/Weather-Dashboard/", "https://wseban.github.io/Day-Schedule/", "", "", ""]
const repoLinks = ["https://github.com/wseban/Mickey-n-Friends-Finder", "https://github.com/wseban/Weather-Dashboard", "https://github.com/wseban/Day-Schedule", "https://github.com/wseban/Get-Route", "https://github.com/wseban/Note-Taker", "https://github.com/wseban/Code-Quiz"];


  return (
    <div>
      <h2>Portfolio</h2>
      <p>
        <Card />
      </p>
    </div>
  );
}
