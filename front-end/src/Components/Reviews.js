import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
    const [reviews, setReviews] = useState([]);
    let { id } = useParams();

    useEffect(() => {
      axios.get(`${API}/songs/${id}/reviews`)
        .then((res) => setReviews(res.data))
        .catch((err) => console.log(err));
    }, [id]);

    const handleAdd = (newReview) => {
        axios.post(`${API}/songs/${id}/reviews`, newReview)
            .then((res) => setReviews([res.data, ...reviews]))
            .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`${API}/songs/${id}/songs/${id}`)
            .then((res) => {
                const copyReviewArray = [...reviews];
                const indexDeletedReview = copyReviewArray.findIndex((review) => {
                    return review.id === id;
                });
                copyReviewArray.splice(indexDeletedReview, 1);
                setReviews(copyReviewArray);
            })
            .catch((err) => console.log(err));
    };

    const handleEdit = (updatedReview) => {
        axios.put(`${API}/songs/${id}/reviews/${updatedReview.id}`, updatedReview)
            .then((res) => {
                const copyReviewArray = [...reviews];
                const indexUpdatedReview = copyReviewArray.findIndex((review) => {
                    return review.id === updatedReview.id;
                });
                copyReviewArray[indexUpdatedReview] = res.data;
                setReviews(copyReviewArray);
            })
            .catch((err) => console.log(err))
    };

  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </ReviewForm>
      {reviews.map((review) => (
        <Review 
            key={review.id} 
            review={review} 
            handleSubmit={handleEdit} 
            handleDelete={handleDelete} 
        />
      ))}
    </section>
  );
}

export default Reviews;
