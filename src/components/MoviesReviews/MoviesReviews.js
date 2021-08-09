// import React, { Component } from 'react';
// import * as api from '../../service/movies-api';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loader from '../Loader/Loader';
import s from './MoviesReviews.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



import { fetchReviews } from '../../service/movies-api';

export default function MoviesReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews && reviews.length > 0) {
    return (
      <ul >
        {reviews.map(review => (
          <li className={s.title} key={review.id}>
            <h3 className={s.subtitle}>{review.author}</h3>
            <p className={s.text}>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <p>We don't have any reviews for this movie</p>;
}