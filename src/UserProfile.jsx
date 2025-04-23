// src/UserProfile.jsx
import React from "react";

export const UserProfile = ({ name, profession, bio, avatar }) => {
    return (
        <div style={{
            maxWidth: "400px",
            margin: "20px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
        }}>
            <img
                src={avatar}
                alt={`${name}'s avatar`}
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #f0f0f0"
                }}
            />
            <h2>{name}</h2>
            <p style={{ color: "#666", fontWeight: "bold" }}>{profession}</p>
            <p style={{ color: "#555", lineHeight: "1.5" }}>{bio}</p>
        </div>
    );
};