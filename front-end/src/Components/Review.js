import ReviewForm from "./ReviewForm";
import { useState } from "react";
import { Button, Comment, Header, Rating, Segment } from "semantic-ui-react";

function Review({ review, handleDelete, handleSubmit }){
    const [viewEditForm, setViewEditForm] = useState(false);

    const toggleView = () => {
        setViewEditForm(!viewEditForm);
    };

    return (
    <Segment inverted color="green" className="Review">
      {viewEditForm ? (
        <ReviewForm 
            reviewDetails={review} 
            toggleView={toggleView} 
            handleSubmit={handleSubmit} 
        />
       ) : (
        <Comment.Group size='massive'>
          <Header as='h3' Segmentiding>
          {review.title}
          </Header>
    
          <Comment>
            <Comment.Content>
              <Comment.Author as='a'>{review.reviewer}</Comment.Author>
              <Comment.Metadata>
                <Rating maxRating={5} defaultRating={review.rating} icon="star" size="huge" />
              </Comment.Metadata>
              <Comment.Text>{review.content}</Comment.Text>
              <Comment.Actions>
                <Button color="grey" onClick={toggleView}>Edit This Review</Button>
                <Button color="black" onClick={() => handleDelete(review.id)}>Delete</Button>
              </Comment.Actions>
              <br />
            </Comment.Content>
          </Comment>
        </Comment.Group>
       )}
    </Segment>
  );
}

export default Review;
