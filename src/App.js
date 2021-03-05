import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";

function App() {
   return (
      <MovieProvider>
         <div className="app">
            <Header />
            <MovieList />
            <AddMovie />
         </div>
      </MovieProvider>
   );
}

export default App;
