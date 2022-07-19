import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import TelevisionItemHome from "./Body/TelevisionItemHome";
import TelevisionItemTelevision from "./Body/TelevisionItemTelevision";
import MovieItemGenre from "./Body/MovieItemGenre";
import MovieItemMovie from "./Body/MovieItemMovie";
import MovieItemHome from "./Body/MovieItemHome";
import "./App.css";
import MovieItemSearch from "./Body/MovieItemSearch";
import LogoFooter from "./Footer/LogoFooter";
import MovieItemInspect from "./Body/MovieItemInspect";
///////////////////////////////////////////////////////////////////////
const baseUrl = "https://api.themoviedb.org/3/discover";
const baseUrlTv = "https://api.themoviedb.org/3/discover/tv?";
const popularMovies = "/movie?sort_by=popularity.desc";
const apiKey = "api_key=0f0c22bee45b529c07d02b1f2dc14e01";
const popularOnTv =
  "&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";
const urlTv = baseUrlTv + apiKey + popularOnTv;
const url = baseUrl + popularMovies + "&" + apiKey;
////////////////////////////////////////////////////////////////////
function App() {
  const [popularmovie, setPopularMovie] = useState([]);
  const [populartelevision, setPopularTelevision] = useState([]);
  const [genremovie, setGenreMovie] = useState([]);
  const [accordionButtonTelevision, setAccordionButtonTelevision] =
    useState("collapse");
  const [loading, setLoading] = useState(true);
  ////////////////////////////////////////////////////////////
  useEffect(() => {
    getMoviesBy(url);
    getTelevisionBy(urlTv);
  }, []);
  const getMoviesBy = (url) => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data);
        setPopularMovie(response.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  const getTelevisionBy = (urlTv) => {
    axios
      .get(urlTv)
      .then((response) => {
        //console.log(response.data.results);
        setPopularTelevision(response.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  const getMoviesByGenre = (url) => {
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data.results);
        setGenreMovie(response.data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };
  const classChanger = () => {
    if (accordionButtonTelevision === "collapse")
      setAccordionButtonTelevision("collapse show");
    else {
      setAccordionButtonTelevision("collapse");
    }
  };
  /*return*/
  return (
    <div>
      <head>
        <title>Movies TMBD</title>

        <title>React App</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        ></meta>

        <meta property="og:url" content="https://moviestmbd.vercel.app/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="React App"></meta>
        <meta
          property="og:description"
          content="Web site created using create-react-app"
        ></meta>
        <meta
          property="og:image"
          content="https://i.imgur.com/Jr48j8p.png"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="moviestmbd.vercel.app"></meta>
        <meta
          property="twitter:url"
          content="https://moviestmbd.vercel.app/"
        ></meta>
        <meta name="twitter:title" content="React App"></meta>
        <meta
          name="twitter:description"
          content="Web site created using create-react-app"
        ></meta>
        <meta
          name="twitter:image"
          content="https://i.imgur.com/Jr48j8p.png"
        ></meta>
      </head>
      <body>
        <Router>
          <div className="main">
            <div className="container-xxl mt-2 ">
              <Header
                genremovie={genremovie}
                getMoviesByGenre={getMoviesByGenre}
                loading={loading}
              />
            </div>
            <div className="container-xxl mt-2 ">
              <div className="row">
                <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 ">
                  <div className="row">
                    <Switch>
                      <Route exact path="/">
                        <MovieItemHome
                          popularmovie={popularmovie}
                          loading={loading}
                        />
                      </Route>
                      <Route path="/genre/:genre/:id/">
                        <MovieItemGenre
                          genremovie={genremovie}
                          getMoviesByGenre={getMoviesByGenre}
                        />
                      </Route>
                      <Route path="/movie/:movies/">
                        <MovieItemMovie />
                      </Route>
                      <Route path="/television/:ontv/">
                        <TelevisionItemTelevision />
                      </Route>
                      <Route path="/search/">
                        <MovieItemSearch
                          genremovie={genremovie}
                          loading={loading}
                        />
                      </Route>
                      <Route path="/inspectmovie/:id/">
                        <MovieItemInspect />
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
                            classChanger();
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
                                  <TelevisionItemHome
                                    populartelevision={populartelevision}
                                    loading={loading}
                                  />
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
            <footer className=" d-flex justify-content-center">
              <div>
                <LogoFooter />
              </div>
            </footer>
          </div>
        </Router>
      </body>
    </div>
  );
}
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>;
export default App;
