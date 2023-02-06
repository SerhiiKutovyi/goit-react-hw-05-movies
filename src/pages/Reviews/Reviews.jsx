import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsStyleds } from './Reviews.styleds';
import { fetchMovieReviews } from 'services/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (moviesId !== '' && moviesId !== null)
      fetchMovieReviews(moviesId).then(setReviews);
  }, [moviesId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie. </p>
      ) : (
        reviews.map(({ id, content, author }) => (
          <ReviewsStyleds key={id}>
            <li>
              <p>
                author: <span>{author}</span>
              </p>
            </li>
            <li>
              <p>{content}</p>
            </li>
          </ReviewsStyleds>
        ))
      )}
    </>
  );
};

export default Reviews;
