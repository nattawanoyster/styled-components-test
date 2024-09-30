import React from "react";
import styled from "styled-components";
import HotelPic1 from "../assets/img/395913745.jpg";
import HotelPic2 from "../assets/img/2.jpg";
import HotelPic3 from "../assets/img/3.jpg";
import HotelPic4 from "../assets/img/4.jpg";
import HotelPic5 from "../assets/img/5.jpg";
import HotelPic6 from "../assets/img/6.jpg";

const ListingsSection = styled.div`
  width: 85%;
  margin: 20px auto;
  text-align: center;
  color: #000;

  .host-listing {
    background-color: #a8d1cf;
    padding: 10px;
    border-radius: 12px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }

  .listings-container {
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .listing-card {
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }

  .listing-card:hover {
    transform: scale(1.02);
  }

  .listing-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .listing-details {
    padding: 10px;
  }

  .listing-title {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  .listing-description {
    margin: 5px 0;
  }
`;

const Listings = () => (
  <ListingsSection>
    <div className="host-listing">Aerichan's Listing</div>
    <div className="listings-container">
      <div className="listing-card">
        <img
          className="listing-image"
          src={HotelPic1}
          alt="Ascott Embassy Sathorn Bangkok"
        />
        <div className="listing-details">
          <h4 className="listing-title">Ascott Embassy Sathorn Bangkok</h4>
          <p className="listing-description">
            Standard Twin Room | Rating: 4.8
          </p>
        </div>
      </div>
      <div className="listing-card">
        <img
          className="listing-image"
          src={HotelPic2}
          alt="Ascott Embassy Sathorn Bangkok"
        />
        <div className="listing-details">
          <h4 className="listing-title">Ascott Embassy Sathorn Bangkok</h4>
          <p className="listing-description">
            Standard Twin Room | Rating: 4.8
          </p>
        </div>
      </div>
      <div className="listing-card">
        <img
          className="listing-image"
          src={HotelPic3}
          alt="Ascott Embassy Sathorn Bangkok"
        />
        <div className="listing-details">
          <h4 className="listing-title">Ascott Embassy Sathorn Bangkok</h4>
          <p className="listing-description">
            Standard Twin Room | Rating: 4.8
          </p>
        </div>
      </div>
      <div className="listing-card">
        <img
          className="listing-image"
          src={HotelPic4}
          alt="Ascott Embassy Sathorn Bangkok"
        />
        <div className="listing-details">
          <h4 className="listing-title">Ascott Embassy Sathorn Bangkok</h4>
          <p className="listing-description">
            Standard Twin Room | Rating: 4.8
          </p>
        </div>
      </div>
      <div className="listing-card">
        <img
          className="listing-image"
          src={HotelPic5}
          alt="Ascott Embassy Sathorn Bangkok"
        />
        <div className="listing-details">
          <h4 className="listing-title">Ascott Embassy Sathorn Bangkok</h4>
          <p className="listing-description">
            Standard Twin Room | Rating: 4.8
          </p>
        </div>
      </div>
      <div className="listing-card">
        <img
          className="listing-image"
          src={HotelPic6}
          alt="Ascott Embassy Sathorn Bangkok"
        />
        <div className="listing-details">
          <h4 className="listing-title">Ascott Embassy Sathorn Bangkok</h4>
          <p className="listing-description">
            Standard Twin Room | Rating: 4.8
          </p>
        </div>
      </div>
    </div>
  </ListingsSection>
);

export default Listings;
