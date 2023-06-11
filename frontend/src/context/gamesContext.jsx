import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const GamesListContext = createContext();

export function GamesListContextProvider({ children }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=3bd9bbbe87ae44cc9722ef212ad9cc81`
      );

      setGames(data.results);
    }
    fetchData();
  }, []);
  return (
    <GamesListContext.Provider value={{ games }}>
      {children}
    </GamesListContext.Provider>
  );
}
export default GamesListContext;
