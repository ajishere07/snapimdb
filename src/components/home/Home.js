import React, { useEffect } from "react";
import MovieListing from "../contentListing/ContentListing";
import movieAPI from "../../apis/movieAPI";
import { API_Key } from "../../apis/movieAPI_KEY";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import HomePageCarousel from "../Carousels/HomePageCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <div style={{ margin: "10px" }} className="gridContainer">
        <HomePageCarousel />
        <div className="trailers-container">
          <h1>Latest Trailer</h1>
          <div className="trailers-list">
            <div className="content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
              <span>The Batman Trailer</span>
            </div>
            <div className="content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BOTUzYTMwYjAtNzMzMS00YjhmLWEwOGQtY2MxZGEyMzMwZDI0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg" />
              <span>The Lord of the rings</span>
            </div>
            <div className="content-container">
              <img src="https://timesofindia.indiatimes.com/thumb/88947889.cms?width=219&height=317&quality=80&imgsize=7370" />
              <span>Ozark Season 4</span>
            </div>
            <div className="content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
              <span>The Batman Trailer</span>
            </div>
            <div className="content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BOTUzYTMwYjAtNzMzMS00YjhmLWEwOGQtY2MxZGEyMzMwZDI0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg" />
              <span>The Lord of the rings</span>
            </div>
            <div className="content-container">
              <img src="https://timesofindia.indiatimes.com/thumb/88947889.cms?width=219&height=317&quality=80&imgsize=7370" />
              <span>Ozark Season 4</span>
            </div>
            <div className="content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
              <span>The Batman Trailer</span>
            </div>
            <div className="content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BOTUzYTMwYjAtNzMzMS00YjhmLWEwOGQtY2MxZGEyMzMwZDI0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg" />
              <span>The Lord of the rings</span>
            </div>
            <div className="content-container">
              <img src="https://timesofindia.indiatimes.com/thumb/88947889.cms?width=219&height=317&quality=80&imgsize=7370" />
              <span>Ozark Season 4</span>
            </div>
          </div>
        </div>
      </div>
      <div className="containerA">
        <div className="suggestions-container">
          <h1>What To Watch</h1>
          <div className="suggestions-list">
            <div className="suggestions-content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BZTBkZDcwYjQtOWJmMy00MDgxLTllOGUtN2JmMTc5YzBiNzQ0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
              <span>The Invincible</span>
            </div>
            <div className="suggestions-content-container">
              <img src="https://fantasticfocus.files.wordpress.com/2018/12/tumbbad.png" />
              <span>Tumbbad</span>
            </div>
            <div className="suggestions-content-container">
              <img src="https://wallpaperaccess.com/full/6790333.jpg" />
              <span>Shershaah</span>
            </div>
            <div className="suggestions-content-container">
              <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/12/Spider-Man-No-Way-Home-Russian-4DX-poster.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5" />
              <span>Spiderman: No Way Home</span>
            </div>
          </div>
        </div>
        <div className="news-container">
          <h1>Top News</h1>
          <div className="news-list">
            <div className="news-content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BYjJhMTQ0M2UtYjkxNS00ZGU2LWE1MjEtOTdiNjUzMTc2YTE3XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY266_CR147,0,180,266_.jpg" />
              <div className="news-text">
                <h3>
                  ‘Mortal Kombat’ Sequel in the Works With ‘Moon Knight’
                  Screenwriter Jeremy Slater
                </h3>
                <span>Jan 26 - Variety - Film News</span>
              </div>
            </div>
            <div className="news-content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_SY300_CR20,0,200,300_AL_.jpg" />
              <div className="news-text">
                <h3>
                  Here's Where You Can Stream Or Buy Every Season Of Arrow
                </h3>
                <span>Jan 26 - Variety - Film News</span>
              </div>
            </div>
            <div className="news-content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BZGVlN2ZlNDQtY2Y2MS00M2M5LTllMDktMGE0MDJhZDEwNGZmXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY266_CR110,0,180,266_.jpg" />
              <div className="news-text">
                <h3>
                  Disney Responds to Peter Dinklage’s ‘Snow White’ Outrage:
                  We’re ‘Consulting With Dwarfism Community’
                </h3>
                <span>Jan 26 - Variety - Film News</span>
              </div>
            </div>
            <div className="news-content-container">
              <img src="https://m.media-amazon.com/images/M/MV5BMzBiZjlkYzItN2QyNS00MzYwLWJmZTAtZWEwOTBkMTNmZjlhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SY300_SX200_AL_.jpg" />
              <div className="news-text">
                <h3>
                  Uncharted Final Trailer: Tom Holland's Hunt For Treasure Edges
                  Closer To Release
                </h3>
                <span>Jan 26 - Variety - Film News</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// render(<Home />, document.getElementById("root"));
export default Home;
