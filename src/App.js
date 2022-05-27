import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import "./App.css";

function App() {
  const baseUrl = "https://api.themoviedb.org/3/";
  const popularMovies = "discover/movie?sort_by=popularity.desc";
  const apiKey = "&api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const url = baseUrl + popularMovies + apiKey;
  console.log(url)
  const [state, setState] = useState();
  useEffect(() => {
    getMoviesBy(url);
  }, []);
  const getMoviesBy = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <div className="container-header">
        <Header />
      </div>
      <Body />
    </div>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>;
export default App;
