import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Header = () => {
   const [movies, setMovies] = useContext(MovieContext);
   return (
      <div className="header">
         <h3>Movies</h3>
         <p>List of Movies: {movies.length}</p>
      </div>
   );
};

export default Header;
