import React, { useState } from "react";
import "./courses.scss";
import { courses } from "../../data";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export const Courses = () => {
  const [curr, setCurr] = useState(0);

  const handelClick = (dir) => {
    if (dir === "left") {
      setCurr(curr > 0 ? curr - 1 : 4);
    } else {
      setCurr(curr < 4 ? curr + 1 : 0);
    }
  };

  return (
    <div className="courses" id="courses">
      <h1>My Courses</h1>
      <div
        className="slider"
        style={{
          transform: `translateX(-${curr * 100}vw)`,
          transition: "all 1s ease",
        }}
      >
        {courses.map((item, i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h3>{item.caption}</h3>
                  <a href={item.link}>Link to the course</a>
                </div>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <img src={item.url} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <KeyboardArrowLeft
        onClick={() => handelClick("left")}
        className="arrow leftAr"
      />
      <KeyboardArrowRight
        onClick={() => handelClick("right")}
        className="arrow rightAr"
      />
    </div>
  );
};
