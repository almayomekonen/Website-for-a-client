import React from "react";
import fasikaImg from "../../assets/fasika.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="image-container">
        <img src={fasikaImg} alt="fasika-image" className="header-img" />
        <h1>עיצוב שיער ברמה שניתן לחלום עליו</h1>
      </div>
      <p>!?אז קדימה למה אתם מחכים</p>
    </header>
  );
};

export default Header;
