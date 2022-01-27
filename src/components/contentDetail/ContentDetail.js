import React, { useEffect } from "react";
import "./ContentDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncContentDetails,
  getContentDetails,
} from "../../features/contentDetails/fetchDetailsSlice";
import { BsStarFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { removeContent } from "../../features/contentDetails/fetchDetailsSlice";
import LoaderAnimation from "../../assets/loader/LoaderAnimation";
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getContentDetails);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncContentDetails(imdbID));
    return () => {
      dispatch(removeContent());
    };
  }, [dispatch, imdbID]);
  return (
    <>
      <div className="movie-section">
        {data ? (
          <>
            <div className="section-left">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating
                  <BsStarFill className="icon starIcon" />: {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <FaThumbsUp className="icon thumbsupIcon" /> :{" "}
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime <RiMovie2Fill className="icon runtimeIcon" /> :{" "}
                  {data.Runtime}
                </span>
                <span>
                  Year <MdDateRange className="icon calenderIcon" /> :{" "}
                  {data.Year}
                </span>
              </div>
              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
          </>
        ) : (
          <LoaderAnimation />
        )}
      </div>
    </>
  );
};

export default MovieDetail;
