import React from "react";
import styled from "styled-components";

const HostReviewContainer = styled.div`
  background-color: #a8d1cf;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border-radius: 12px;
  width: 85%;
  margin: 20px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ReviewsContainer = styled.div`
  margin: 40px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%; /* Adjust width for mobile */
  }
`;

const ReviewCard = styled.div`
  background-color: #f9f5eb;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ReviewAuthor = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px; /* Adds space between author and text */
`;
const ReviewRating = styled.p`
  font-size: 18px;
  font-weight: semi-bold;
  font-style: italic;
  margin-bottom: 10px; /* Adds space between author and text */
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 12px;
`;

const ReviewsSection = () => (
  <>
    <HostReviewContainer> Host's Reviews </HostReviewContainer>
    <ReviewsContainer>
      <ReviewCard>
        <ReviewAuthor>ReneBEABEA</ReviewAuthor>
        <ReviewRating>Perfect Escape for Couples Rating: ★★★★★</ReviewRating>
        <ReviewText>
          "My stay at Seaside Haven Resort & Spa was everything I could have
          hoped for. From the moment I arrived, I was greeted by friendly staff
          who were always smiling and ready to help with anything I needed. The
          room was beautifully decorated with a serene ocean view, and the bed
          was incredibly comfortable. I appreciated the small details, like the
          welcome drink upon check-in and the personalized note left in my room"
        </ReviewText>
      </ReviewCard>
      <ReviewCard>
        <ReviewAuthor>2day is Wendy</ReviewAuthor>
        <ReviewRating>Good, but Overcrowded Rating: ★★★☆☆</ReviewRating>
        <ReviewText>
          "My partner and I stayed at Seaside Haven for a romantic weekend
          getaway. Overall, we had a lovely time. The location is perfect—right
          on the beach with stunning views of the water. We spent most of our
          time lounging by the pool and sipping cocktails from the bar, which
          were excellent. The staff was attentive and friendly, always making
          sure we were comfortable."
        </ReviewText>
      </ReviewCard>
      <ReviewCard>
        <ReviewAuthor>katarinabluuuu</ReviewAuthor>
        <ReviewRating>
          Perfect for a Relaxing Beach Vacation Rating: ★★★★★
        </ReviewRating>
        <ReviewText>
          "My partner and I stayed at Seaside Haven for a romantic weekend
          getaway. Overall, we had a lovely time. The location is perfect—right
          on the beach with stunning views of the water. We spent most of our
          time lounging by the pool and sipping cocktails from the bar, which
          were excellent. The staff was attentive and friendly, always making
          sure we were comfortable."
        </ReviewText>
      </ReviewCard>
      <ReviewCard>
        <ReviewAuthor>imnotyourjoy</ReviewAuthor>
        <ReviewRating>
          Beautiful Resort, but Some Issues with Service Rating: ★★★☆☆
        </ReviewRating>
        <ReviewText>
          "My partner and I stayed at Seaside Haven for a romantic weekend
          getaway. Overall, we had a lovely time. The location is perfect—right
          on the beach with stunning views of the water. We spent most of our
          time lounging by the pool and sipping cocktails from the bar, which
          were excellent. The staff was attentive and friendly, always making
          sure we were comfortable."
        </ReviewText>
      </ReviewCard>
    </ReviewsContainer>
  </>
);

export default ReviewsSection;
