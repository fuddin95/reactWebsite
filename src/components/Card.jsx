import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <Link to={props.link}>
        <div className="card-top">
          <h2 className="card-name">{props.name}</h2>
          <img className="circle-img" src={props.image} alt="hello" />
        </div>
      </Link>
      <div className="card-bottom">
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
