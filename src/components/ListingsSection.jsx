import React from "react";
import styled from "styled-components";
import HotelPic1 from "../assets/img/395913745.jpg";
import HotelPic2 from "../assets/img/2.jpg";
import HotelPic3 from "../assets/img/3.jpg";
import HotelPic4 from "../assets/img/4.jpg";
import HotelPic5 from "../assets/img/5.jpg";
import HotelPic6 from "../assets/img/6.jpg";

const HostListingContainer = styled.div`
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

const ListingsContainer = styled.div`
  margin: 40px auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
  }
`;

const ListingCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ListingImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ListingDetails = styled.div`
  padding: 10px;
`;

const ListingTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;

const ListingsSection = () => (
  <>
    <HostListingContainer> Aerichan's Listing</HostListingContainer>
    <ListingsContainer>
      <ListingCard>
        <ListingImage src={HotelPic1} alt="Listing" />
        <ListingDetails>
          <ListingTitle>Ascott Embassy Sathorn Bangkok</ListingTitle>
          <p>Standard Twin Room | Rating: 4.8</p>
        </ListingDetails>
      </ListingCard>
      <ListingCard>
        <ListingImage src={HotelPic2} alt="Listing" />
        <ListingDetails>
          <ListingTitle>Ascott Embassy Sathorn Bangkok</ListingTitle>
          <p>Standard Twin Room | Rating: 4.8</p>
        </ListingDetails>
      </ListingCard>
      <ListingCard>
        <ListingImage src={HotelPic3} alt="Listing" />
        <ListingDetails>
          <ListingTitle>Ascott Embassy Sathorn Bangkok</ListingTitle>
          <p>Standard Twin Room | Rating: 4.8</p>
        </ListingDetails>
      </ListingCard>
      <ListingCard>
        <ListingImage src={HotelPic4} alt="Listing" />
        <ListingDetails>
          <ListingTitle>Ascott Embassy Sathorn Bangkok</ListingTitle>
          <p>Standard Twin Room | Rating: 4.8</p>
        </ListingDetails>
      </ListingCard>
      <ListingCard>
        <ListingImage src={HotelPic5} alt="Listing" />
        <ListingDetails>
          <ListingTitle>Ascott Embassy Sathorn Bangkok</ListingTitle>
          <p>Standard Twin Room | Rating: 4.8</p>
        </ListingDetails>
      </ListingCard>
      <ListingCard>
        <ListingImage src={HotelPic6} alt="Listing" />
        <ListingDetails>
          <ListingTitle>Ascott Embassy Sathorn Bangkok</ListingTitle>
          <p>Standard Twin Room | Rating: 4.8</p>
        </ListingDetails>
      </ListingCard>
    </ListingsContainer>
  </>
);

export default ListingsSection;
