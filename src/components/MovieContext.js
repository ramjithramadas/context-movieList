import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
   const [movies, setMovies] = useState([
      { name: "Harry Potter", price: "10", id: 1 },
      { name: "Game of Thrones", price: "15", id: 2 },
      { name: "Great Gatsby", price: "20", id: 3 },
      { name: "Homebois", price: "23", id: 4 },
   ]);
   return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>;
};
