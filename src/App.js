import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import MovieItem from "./Body/MovieItem";
import TelevisionItem from "./Body/TelevisionItem";
import TelevisionItemTelevision from "./Body/TelevisionItemTelevision";
import MovieItemGenre from "./Body/MovieItemGenre";
import MovieItemMovie from "./Body/MovieItemMovie";
import InputSearch from "./Header/InputSearch";
import "./App.css";
import MovieItemSearch from "./Body/MovieItemSearch";

function App() {
  const baseUrl = "https://api.themoviedb.org/3/discover";
  const baseUrlTv = "https://api.themoviedb.org/3/discover/tv?";
  const popularMovies = "/movie?sort_by=popularity.desc";
  const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
  const popularOnTv =
    "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
  const urlTv = baseUrlTv + apiKey + popularOnTv;
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const imgUrlTv = "https://image.tmdb.org/t/p/original";
  const url = baseUrl + popularMovies + "&" + apiKey;

  const [popularmovie, setPopularMovie] = useState();
  const [populartelevision, setPopularTelevision] = useState();
  const [genremovie, setGenreMovie] = useState();

  const [accordionButtonTelevision, setAccordionButtonTelevision] =
    useState("collapse");
  useEffect(() => {
    getMoviesBy(url);
    getTelevisionBy(urlTv);
  }, []);
  const getMoviesBy = async (url) => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data);
        setPopularMovie(response.data.results);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  const getTelevisionBy = async (urlTv) => {
    axios
      .get(urlTv)
      .then((response) => {
        //console.log(response.data.results);
        setPopularTelevision(response.data.results);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  const getMoviesByGenre = async (url) => {
    axios
      .get(url)
      .then((response) => {
         console.log(response.data);
        setGenreMovie(response.data.results);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  return (
    <Router>
      <div>
        <div className="container-xxl mt-2 ">
          <Header genremovie= {genremovie} getMoviesByGenre={getMoviesByGenre} />
        </div>
        <body>
          <div className="container-xxl mt-2 ">
            <div className="row">
              <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                <div className="row">
                  <Switch>
                    <Route exact path="/">
                      {popularmovie ? (
                        popularmovie.map((m) => (
                          <div className="col-xl-3 col-md-4 col-sm-6 mt-5  ">
                            <MovieItem
                              key={m.id}
                              id={m.id}
                              title={m.title}
                              image={imgUrl + m.poster_path}
                              overview={m.overview}
                            />
                          </div>
                        ))
                      ) : (
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </Route>
                    <Route path="/genre/:genre/:id/">
                      <MovieItemGenre genremovie= {genremovie} getMoviesByGenre={getMoviesByGenre}  />
                    </Route>
                    <Route path="/movie/:movies/">
                      <MovieItemMovie />
                    </Route>
                    <Route path="/television/:ontv/">
                      <TelevisionItemTelevision />
                    </Route>
                    <Route path="/search/">
                      <MovieItemSearch genremovie={genremovie} />
                    </Route>
                  </Switch>
                </div>
              </div>
              <div className="col-xl-2  d-none d-xl-block ">
                <div class="accordion mt-5">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        onClick={() => {
                          if (accordionButtonTelevision === "collapse")
                            setAccordionButtonTelevision("collapse show");
                          else {
                            setAccordionButtonTelevision("collapse");
                          }
                        }}
                        class="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        On Television
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class={`accordion-collapse ${accordionButtonTelevision}`}
                      aria-labelledby="headingOne"
                    >
                      <div class="accordion-body p-0">
                        <aside>
                          <nav className="navbar">
                            <ul className="p-1">
                              <li>
                                {populartelevision
                                  ? populartelevision.map((t) => (
                                      <div className="mt-5">
                                        <TelevisionItem
                                          key={t.id}
                                          name={t.name}
                                          image={imgUrlTv + t.poster_path}
                                          overview={t.overview}
                                        />
                                      </div>
                                    ))
                                  : "Loanding..."}
                              </li>
                            </ul>
                          </nav>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>footer</footer>
        </body>
      </div>
    </Router>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>;
export default App;
