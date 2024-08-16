import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies?.find((m) => m.imdbID === id);

  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem(`reviews-${id}`);
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (review.trim()) {
      let updatedReviews;

      if (isEditing) {
        updatedReviews = [...reviews];
        updatedReviews[editIndex] = review;
        setIsEditing(false);
        setEditIndex(null);
      } else {
        updatedReviews = [...reviews, review];
      }

      setReviews(updatedReviews);
      setReview('');

      localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
    }
  };

  const handleEdit = (index) => {
    setReview(reviews[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
  };

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>

      <footer>
        <h3>Leave a Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            placeholder="Write your review here..."
            required
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button className="submit" type="submit">
            {isEditing ? 'Update Review' : 'Submit Review'}
          </button>
        </form>

        <div className="reviews">
          <h4>Submitted Reviews:</h4>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((rev, index) => (
                <li key={index}>
                  {rev}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet. Be the first to leave one!</p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default MovieDetails;
