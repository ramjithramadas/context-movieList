import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [movies, setMovies] = useContext(MovieContext);

   const formSubmit = (e) => {
      e.preventDefault();
      setMovies((prevState) => [...prevState, { name: name, price: price }]);
   };
   return (
      <form onSubmit={formSubmit}>
         <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
         <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
         <button>Add</button>
      </form>
   );
};

export default AddMovie;
