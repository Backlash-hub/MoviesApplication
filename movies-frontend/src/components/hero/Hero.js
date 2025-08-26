import React from 'react';
import './Hero.css'
import Carousel from 'embla-carousel-react';
import { Paper } from '@mui/material';


const Hero = ({movies}) => {
  return (
    <div className='movie-carsousel-container'>
      <Carousel>
        {
          movies.map((movie) =>{
            return(
              <Paper>
                <div className='movie-carsousel-container'>
                  <div className='movie-card'>
                    <div className='movie-detail'>
                      <div className='movie-poster'>
                        <img src={movie.poster} alt='' />
                      </div>
                      <div className='"movie-title'>
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero