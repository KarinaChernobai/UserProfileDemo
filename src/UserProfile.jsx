import React from "react";
import "./UserProfile.css";

export const UserProfile = ({ name, profession, bio, avatar }) => {
    return (
        <div className="user-profile">
            <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="user-profile-avatar"
            />
            <h2>{name}</h2>
            <p className="user-profile-profession">{profession}</p>
            <p className="user-profile-bio">{bio}</p>
        </div>
    );
};