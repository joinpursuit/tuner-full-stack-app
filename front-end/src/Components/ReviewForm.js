import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Segment } from 'semantic-ui-react'

function ReviewForm(props) {
    let { id } = useParams;
    const { reviewDetails } = props;
    const [review, setReview] = useState({
        reviewer: "",
        title: "",
        content: "",
        rating: "",
        bookmark_id: id,
    });

    const handleTextChange = (e) => {
        setReview({ ...review, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        if(reviewDetails){
            setReview(reviewDetails);
        }
    }, [id, reviewDetails, props]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(review, id);
        if(reviewDetails){
            props.toggleView();
        }
        setReview({
            reviewer: "",
            title: "",
            content: "",
            rating: "",
            bookmark_id: id,
        });
    };

  return (
    <Segment inverted className="Edit">
      {props.children}
      <Form inverted onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid label="Title"
            id="title"
            type="text"
            required
            value={review.title}
            width={8}
            placeholder="Add a Title"
            onChange={handleTextChange}
          />
          <Form.Input
            fluid label="Name"
            id="reviewer"
            value={review.reviewer}
            type="text"
            width={8}
            onChange={handleTextChange}
            placeholder="Your Name"
            required
          />
          <Form.Input
            fluid label="Rating"
            id="rating"
            type="number"
            name="rating"
            min="0"
            max="5"
            step="1"
            value={review.rating}
            onChange={handleTextChange}
            placeholder="0"
            width={2}
            required
          />
        </Form.Group>
        <Form.Input
          fluid label="Review"
          id="content"
          type="text"
          name="content"
          value={review.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
          required
          />
        <br />
        <Button color="green" type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}

export default ReviewForm;
