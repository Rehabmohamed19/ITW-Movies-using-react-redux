import React, { useEffect } from 'react'
import movieApi from '../MovieApi'
import {APIKey} from '../ApiKey'
import MovieListing from './MovieListing'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/movies/movieSlice'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchMovies = async()=>{
      const response = await movieApi.get(`movie?api_key=${APIKey}`);
      dispatch(addMovies(response.data.results))
    }
    fetchMovies();

  },[])
  return (
    <>
    <div className='banner-img'></div>
    <MovieListing/>
    </>
  )
}
