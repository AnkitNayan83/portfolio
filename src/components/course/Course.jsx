import React from "react";
import "./course.scss";

export const Course = ({ img, name, link }) => {
  return (
    <a href={link} className="top">
      <div className="course">
        <img src={img} alt="" />
        <span>{name}</span>
      </div>
    </a>
  );
};
