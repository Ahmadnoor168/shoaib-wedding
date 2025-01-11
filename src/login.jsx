import React from "react";
import "./login.css"; // Ensure this CSS file exists
import video from "./assets/8246501-hd_1920_1080_25fps.mp4";
import { useNavigate } from "react-router-dom";

const WeddingInvitation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="form">
        <div className="form-title">
          <span>Welcome to the Wedding of</span>
        </div>
        <div className="title-2">
          <span> Nida Rukhsar With Qurban Ali </span>
        </div>
        <p className="invitation-message">
          Join us as we embark on a beautiful journey of love and togetherness.
        </p>
        <button className="submit" type="button" onClick={handleNavigate}>
          <span className="sign-text">Enter Celebration</span>
        </button>
        <p className="invitation-message">
          Let's check your invitation and get ready to celebrate this special occasion with us.
        </p>

    

        <section className="bg-stars">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </section>
      </div>

      <video autoPlay loop muted playsInline className="background-video">
        <source src={video} type="video/mp4" className="video" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WeddingInvitation;
