import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MegaPointItem from './MegaPointItem'
import RatingItem from './RatingItem'

import elliot from './elliot.jpg';
import lottie from './lottie.jpg';
import nathan from './nathan.jpg';
import zoe from './zoe.jpg';

import games from './games.json';
import people from './people.json';

const average = (arr: any) => arr.reduce((p: any, c: any) => p + c, 0 ) / arr.length;
const averageRating = (rs: any) => average(rs.map((r: any) => r.number))
const sortGame = (a: any, b: any) => {
  const avgA = averageRating(a.ratings)
  const avgB = averageRating(b.ratings)
  const weightedA = avgA * 4 + a.ratings.length
  const weightedB = avgB * 4 + b.ratings.length

  return weightedB - weightedA
}


class App extends Component {
  render() {

    var items = people.sort((a, b) => -(a.score - b.score)).map((p, i) => (
          <MegaPointItem name={p.name} score={p.score} colour={p.colour} photo={p.photo} key={i} />
    ))

    var gameItems: any[] = games.sort(sortGame).map((g, i) => (
      <RatingItem key={i} name={g.name} ratings={g.ratings} />
    ))

    return (
      <div className="App">
        <header className="App-header">
          <h1>Casa Sin Nombre</h1>
        </header>
        <main className="wrapper columns">
          <div className="mega-points column">
            <h2>Leaderboard</h2>
            {items}
          </div>
          <div className="ratings column">
            <h2>Ratings</h2>
            <ol className="rating-items">
              {gameItems}
            </ol>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
