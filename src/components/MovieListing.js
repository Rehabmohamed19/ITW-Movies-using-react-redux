import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movies/movieSlice'
import MovieDetail from './MovieDetail';
import './MovieListing.css';

export default function MovieListing() {
  const movies= useSelector(getAllMovies);
  console.log(movies)
  return (
    <>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>
            Movies
          </h2>
          <div className='movie-container'>
            {movies && movies.length && movies.map(movie => <MovieDetail key={movie.id} data={movie} />)}
          </div>
        </div>
      </div>
    </>
  )
}
