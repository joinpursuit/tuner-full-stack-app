const db = require("../db/dbConfig.js");
//all
const getAllReviews = async (songId) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE song_id=$1", songId);
    return allReviews;
  } catch (err) {
    return err;
  }
};
//show
const getReview = async (id) => {
  try {
    const review = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return review;
  } catch (err) {
    return err;
  }
};
//create
const createReview = async (review) => {
  const { song_id, reviewer, title, content, rating } = review;
  try {
    const createdReview = await db.one(
      "INSERT INTO reviews (song_id, reviewer, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [song_id, reviewer, title, content, rating]);
      return createdReview
  } catch (err) {
    return err;
  }
};
//delete
const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one("DELETE FROM reviews WHERE id =$1 RETURNING *", id)
        return deletedReview;
    } catch(err) {
        return err
    }
};
//edit- update
const updateReview = async (id, review) => {
    const { song_id, reviewer, title, content, rating } = review;

    try {
        const updatedReview = await db.one("UPDATE reviews SET song_id=$1, reviewer=$2, title=$3, content=$4, rating=$5 WHERE id=$6 RETURNING *", [song_id, reviewer, title, content, rating, id])
        return updatedReview;
    } catch (err) {
        return err
    }
}

module.exports = { getAllReviews, getReview, createReview, updateReview, deleteReview };
