import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";
import MovieDetail from "./components/movieDetail/MovieDetail";
function App() {
  return (
    <div className="App">
      <Headers />
      <Route>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
        <Route element={<PageNotFound />}></Route>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
