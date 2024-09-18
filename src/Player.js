import React from "react";
import { Card } from "react-bootstrap";
import "./Player.css"; 

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="player-card">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        className="player-img"
      />
      <Card.Body>
        <Card.Title className="player-name">{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default.jpg",
};

export default Player;
