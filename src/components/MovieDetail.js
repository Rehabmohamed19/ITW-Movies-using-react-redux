import React from 'react'
import './MovieDetail.css'
import { useState } from 'react';
// import MovieModal from './Modal';
import Modal from '@material-ui/core/Modal';



const IMGPATH ="https://image.tmdb.org/t/p/w1280";

export default function MovieDetail(props) {
  const [showLogin, setShowLogin] = useState(false);

  const { data } = props;
  return (
    <>
      <div className='card-item'>
        <div className='card-inner'>
          <div className='card-top'>
            <img src={IMGPATH + data.poster_path} alt={data.title} />
          </div>
          <div className='card-bottom'>
            <div className='card-info'>
              <h4>{data.title}</h4>
              <p>{data.release_date}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
