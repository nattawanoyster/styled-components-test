import React from "react";
import styled from "styled-components";

const ReviewsSection = styled.div`
  width: 85%;
  margin: 20px auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  .host-review {
    background-color: #a8d1cf;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .reviews-container {
    margin: 40px auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 95%;
    }
  }

  .review-card {
    background-color: #f9f5eb;
    padding: 20px;
    border-radius: 12px;
    text-align: left;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  .review-author {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
  }

  .review-rating {
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 10px;
    color: black;
  }

  .review-text {
    font-size: 16px;
    color: #555;
    margin-top: 12px;
  }
`;

const ReviewsSectionComponent = () => (
  <ReviewsSection>
    <div className="host-review">Host's Reviews</div>
    <div className="reviews-container">
      <div className="review-card">
        <div className="review-author">ReneBEABEA</div>
        <div className="review-rating">
          Perfect Escape for Couples Rating: ★★★★★
        </div>
        <div className="review-text">
          "My stay at Seaside Haven Resort & Spa was everything I could have
          hoped for. From the moment I arrived, I was greeted by friendly staff
          who were always smiling and ready to help with anything I needed. The
          room was beautifully decorated with a serene ocean view, and the bed
          was incredibly comfortable. I appreciated the small details, like the
          welcome drink upon check-in and the personalized note left in my
          room."
        </div>
      </div>
      <div className="review-card">
        <div className="review-author">2day is Wendy</div>
        <div className="review-rating">Good, but Overcrowded Rating: ★★★☆☆</div>
        <div className="review-text">
          "My partner and I stayed at Seaside Haven for a romantic weekend
          getaway. Overall, we had a lovely time. The location is perfect—right
          on the beach with stunning views of the water. We spent most of our
          time lounging by the pool and sipping cocktails from the bar, which
          were excellent. The staff was attentive and friendly, always making
          sure we were comfortable."
        </div>
      </div>
      <div className="review-card">
        <div className="review-author">katarinabluuuu</div>
        <div className="review-rating">
          Perfect for a Relaxing Beach Vacation Rating: ★★★★★
        </div>
        <div className="review-text">
          "My partner and I stayed at Seaside Haven for a romantic weekend
          getaway. Overall, we had a lovely time. The location is perfect—right
          on the beach with stunning views of the water. We spent most of our
          time lounging by the pool and sipping cocktails from the bar, which
          were excellent. The staff was attentive and friendly, always making
          sure we were comfortable."
        </div>
      </div>
      <div className="review-card">
        <div className="review-author">imnotyourjoy</div>
        <div className="review-rating">
          Beautiful Resort, but Some Issues with Service Rating: ★★★☆☆
        </div>
        <div className="review-text">
          "My partner and I stayed at Seaside Haven for a romantic weekend
          getaway. Overall, we had a lovely time. The location is perfect—right
          on the beach with stunning views of the water. We spent most of our
          time lounging by the pool and sipping cocktails from the bar, which
          were excellent. The staff was attentive and friendly, always making
          sure we were comfortable."
        </div>
      </div>
    </div>
  </ReviewsSection>
);

export default ReviewsSectionComponent;
