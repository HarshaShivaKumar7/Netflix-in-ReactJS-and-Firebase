import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://static0.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-03-600x239.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Avengers</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime
          minus eos sint provident modi veritatis culpa eaque reprehenderit
          asperiores.
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
