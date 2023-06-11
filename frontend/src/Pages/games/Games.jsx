import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=3bd9bbbe87ae44cc9722ef212ad9cc81&page=${page}`
      );

      setGames(data.results);
    }
    fetchData();
  }, [page]);
  console.log(games);

  const moreinfo = (id) => {
    const gmaeid = id;
    <Link className="" to="/games/gmaeid"></Link>;
  };

  return (
    <div className="Card-container">
      <h2 className=""> All games</h2>
      <ul className="gameCard  d-flex flex-wrap gap-5  ">
        {games.map((game) => (
          <li className="card card-body justify-content-between" key={game.id}>
            <h2>{game.name}</h2>
            <img className="card-image" src={game.background_image} alt="" />
            <p>Release : {game.released}</p>
            <p>Rating : {game.rating}</p>
            <div className="d-flex justify-content-between ">
              <button onClick={moreinfo(game.id)} className="btn-read">
                Read more
              </button>
              <button className="btn-cart">Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center gap-3 mb-3">
        {page !== 1 ? (
          <button onClick={() => setPage(page - 1)}> back </button>
        ) : (
          ''
        )}
        <h7>Page : {page}</h7>
        <button onClick={() => setPage(page + 1)}> next </button>
      </div>
    </div>
  );
};

export default Games;
