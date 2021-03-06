import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router";
import Header from "./components/header/Header";
import MoviesPage from "./components/moviesPage/MoviesPage";
import ShowsPage from "./components/showsPage/ShowsPage";
import MovieDetail from "./components/contentDetail/ContentDetail";
import SeriesDetail from "./components/contentDetail/ContentDetail";
import PaginationElement from "./components/Pagination/PaginationElement";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/movies" exact element={<MoviesPage />}></Route>
          <Route path="/webshows" exact element={<ShowsPage />}></Route>
          <Route path="movie/:imdbID" element={<MovieDetail />}></Route>
          <Route path="series/:imdbID" element={<SeriesDetail />}></Route>
          <Route element={<PageNotFound />}></Route>
        </Routes>
      </div>
      {location.pathname !== "/" && <PaginationElement />}
      <Footer />
    </div>
  );
}

export default App;
