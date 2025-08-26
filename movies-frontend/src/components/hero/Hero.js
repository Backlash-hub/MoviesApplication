// Hero.js
import React from "react";
import "./Hero.css";
// EITHER use React-Bootstrap's Carousel:
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Paper } from "@mui/material";

const Hero = ({ movies = [] }) => {
  if (!Array.isArray(movies)) {
    console.warn("Hero: `movies` should be an array, got:", movies);
    movies = [];
  }

  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies.map((movie, i) => (
          <Carousel.Item key={movie.id ?? i}>
            <Paper elevation={3}>
              <div className="movie-card">
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster || movie.image} alt={movie.title || `Slide ${i+1}`} />
                  </div>
                  <div className="movie-title">
                    <h4>{movie.title}</h4>
                  </div>
                </div>
              </div>
            </Paper>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
