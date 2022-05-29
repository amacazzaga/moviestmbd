import { useEffect, useState } from "react";
import Header from "./Header/Header";
import MovieItem from "./MovieItem";
import SeriesItem from "./SeriesItem";
import axios from "axios";
import "./App.css";

function App() {
  const baseUrl = "https://api.themoviedb.org/3/";
  const popularMovies = "discover/movie?sort_by=popularity.desc";
  const imgUrl = "https://image.tmdb.org/t/p/w342"
  const apiKey = "&api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const url = baseUrl + popularMovies + apiKey;
  const [popularmovie, setPopularMovie] = useState();
  useEffect(() => {
    getMoviesBy(url);
  }, []);
  const getMoviesBy = async (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPopularMovie(response.data.results)
      })
      .catch((e) => {
        console.log(e)
      });
  };

  return (
    <div>
      <div className="container-header">
        <Header />
      </div>
      <div className="container-body">
      <div className="container-movies-series">
        <div className="container-fluid-movies">
        { popularmovie ?(
        popularmovie.map((m)=>(
           
           <MovieItem 
           key ={m.id}
           id ={m.id}
           title ={m.title}
           image ={imgUrl+m.poster_path}
           overview={m.overview}
           
           />
           
           ))):"Loading..."}
        </div>
        <div className="container-fluid-series">
          <SeriesItem />
        </div>
      </div>
    </div>
    </div>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>;
export default App;
