import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import axios from "axios";
import "./App.css";

function App() {
  const baseUrl = "https://api.themoviedb.org/3/";
  const popularMovies = "discover/movie?sort_by=popularity.desc";
  const apiKey = "&api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const url = baseUrl + popularMovies + apiKey;
  const [state, setState] = useState();
  useEffect(() => {
    getMoviesBy(url);
  }, []);
  const getMoviesBy = async (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setState(response.data)
      })
      .catch((e) => {});
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
