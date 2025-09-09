const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li className="review-card" key={review.review_id}>
            <p>{review.comment}</p>
            <p>{review.guest}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
