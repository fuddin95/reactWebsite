import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src="../images/img-1.jpg" alt="hello" />
      </div>
      <div className="bottom">
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
