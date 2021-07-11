// PACKAGES IMPORT
import React from "react";

// CSS IMPORT
import "./MovieDetails.css";

// ASSETS IMPORT
import { FaRegStar, FaRegClock, FaRegCalendar, FaList } from "react-icons/fa";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const MovieDetails = ({ movieData }) => {
  return (
    <div className="container">
      <div className="movie_details">
        <div className="rating">
          <FaRegStar className="icon_active" size={20} />
          <span>{movieData.vote_average}/10</span>
          <a
            className="imdb_button"
            href={`https://www.imdb.com/title/${movieData.imdb_id}`}
          >
            <p>IMDb</p>
          </a>
        </div>
        <div className="title">{movieData.title}</div>
        <div className="tagline">{movieData.tagline}</div>
        <div className="sub_details">
          <div className="movie_info">
            <FaRegCalendar className="icon_inactive" size={15} />
            <span>{movieData.release_date}</span>
          </div>
          <div className="movie_info">
            <FaList className="icon_inactive" size={15} />
            <span>
              {movieData.genres &&
                movieData.genres.map((e, i) => {
                  if (movieData.genres.length === i + 1) {
                    return <span key={e.id}>{e.name}</span>;
                  } else {
                    return <span key={e.id}>{e.name} | </span>;
                  }
                })}
            </span>
          </div>
          <div className="movie_info">
            <FaRegClock className="icon_inactive" size={15} />
            <span>{movieData.runtime}min</span>
          </div>
        </div>
        <div className="about_section">
          <div className="left_wrap">
            <div className="story">THE STORY</div>
            <div className="overview">{movieData.overview}</div>
          </div>
          <div className="right_wrap">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="share_section">
          <div className="share_title">Share with your friends</div>
          <div className="icons_wrap">
            <FacebookShareButton
              url={`https://www.imdb.com/title/${movieData.imdb_id}`}
              className="share_button"
            >
              <FacebookIcon
                size={30}
                round
                bgStyle={{ fill: "#ffd32a" }}
                iconFillColor={"black"}
              />
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://www.imdb.com/title/${movieData.imdb_id}`}
              className="share_button"
            >
              <TwitterIcon
                size={30}
                round
                bgStyle={{ fill: "#ffd32a" }}
                iconFillColor={"black"}
              />
            </TwitterShareButton>
            <PinterestShareButton
              media={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              url={`https://www.imdb.com/title/${movieData.imdb_id}`}
              className="share_button"
            >
              <PinterestIcon
                size={30}
                round
                bgStyle={{ fill: "#ffd32a" }}
                iconFillColor={"black"}
              />
            </PinterestShareButton>
            <WhatsappShareButton
              url={`https://www.imdb.com/title/${movieData.imdb_id}`}
              className="share_button"
            >
              <WhatsappIcon
                size={30}
                round
                bgStyle={{ fill: "#ffd32a" }}
                iconFillColor={"black"}
              />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://www.imdb.com/title/${movieData.imdb_id}`}
              className="share_button"
            >
              <EmailIcon
                size={30}
                round
                bgStyle={{ fill: "#ffd32a" }}
                iconFillColor={"black"}
              />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
