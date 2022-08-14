const express = require("express");
const reviews = express.Router({ mergeParams: true });
const{
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
} = require("../queries/reviews.js");

//all-index
reviews.get("/", async (req, res) => {
    const {songId } = req.params;
    const allReviews = await getAllReviews(songId);
    if (allSongs[0]) {
        res.status(200).json(allReviews);
    }else {
        res.status(500).json({error: "server error!"});
    }
});

//show
reviews.get("/:id", async (req, res) => {
    const { id } = req.params;
    const review = await getReview(id);
    if (review.id) {
        res.json(review);
    } else {
        res.status(404).json({error: "review not found"});
    }
});

//create-post
reviews.post("/", async (req, res) => {
    try {
        const createdReview = await createReview(req.body);
        res.json(createdReview);

    } catch (error) {
        res.status(422).json({error: "Error - not a good entity"})

    }
});

//delete

reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    if  (deletedReview.id) {
        res.status(200).json(deletedReiew);
    } else {
        res.status(404).json({error: "Review not found at that ID"})
    }
});

//update
reviews.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    if (updatedReview.id) {
        res.status(200).json(updatedReview)
    } else {
        res.staus(404).json({error: "no review found "})
    }
});

module.exports = reviews;