import React, { useState } from "react";
import "./login.css"; // Make sure to have this CSS file in the same folder
import video from "./assets/8246501-hd_1920_1080_25fps.mp4"
import { useNavigate } from "react-router-dom";

const WeddingInvitation = () => {
  const [guestID, setGuestID] = useState("");
  const [isValidGuest, setIsValidGuest] = useState(false);
  const navigate = useNavigate();
  const validIDs = [
    "1121", "1122", "1123", "1124", "1125",
    "1126", "1127", "1128", "1129", "1130",
    "1131", "1132", "1133", "1134", "1135", "1136"
  ];
  const handleIDCheck = () => {
    if (validIDs.includes(guestID)) {

        navigate(`/home/${guestID}`);
        setIsValidGuest(true);
      alert("Welcome to the wedding celebration!");
    } else {
      alert("Invalid Guest ID. Please enter a valid ID.");
      setIsValidGuest(false);
    }
  };

  return (
    <div className="login-container">

      <div className="form">
        <div className="form-title">
          <span>Welcome to the Wedding of</span>
        </div>
        <div className="title-2">
          <span>Shoaib </span>
        </div>
        <p className="invitation-message">
          We are delighted to have you join us on our special day. Enter your
          Guest ID below to receive your personal invitation and join the
          celebration!
        </p>

        <div className="input-container">
          <input
            placeholder="Enter Guest ID"
            type="text"
            className="input-mail"
            value={guestID}
            onChange={(e) => setGuestID(e.target.value)}
          />
        </div>

        <button className="submit" type="button" onClick={handleIDCheck}>
          <span className="sign-text">Check Invitation</span>
        </button>

        {isValidGuest && (
          <p className="valid-message">Your ID is valid! See you at the celebration!</p>
        )}

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
