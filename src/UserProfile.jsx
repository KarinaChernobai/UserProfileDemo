import React from "react";
import "./UserProfile.css"; // Import the CSS file

export const UserProfile = ({ name, profession, bio, avatar }) => {
    return (
        <div className="user-profile">
            <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="user-profile__avatar"
            />
            <h2>{name}</h2>
            <p className="user-profile__profession">{profession}</p>
            <p className="user-profile__bio">{bio}</p>
        </div>
    );
};