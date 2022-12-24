import React, { useState } from "react";
import "./portfolio.scss";
import { data } from "../../data";

export const Portfolio = () => {
  const [active, setActive] = useState("web");
  const isActive = (name) => {
    if (active === name) return true;
    else return false;
  };
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        <li
          className={isActive("web") ? "active" : ""}
          onClick={() => setActive("web")}
        >
          MERN Web App
        </li>
        <li
          className={isActive("defi") ? "active" : ""}
          onClick={() => setActive("defi")}
        >
          DEFI
        </li>
        <li
          className={isActive("nft") ? "active" : ""}
          onClick={() => setActive("nft")}
        >
          NFT's
        </li>
        <li
          className={isActive("dao") ? "active" : ""}
          onClick={() => setActive("dao")}
        >
          DAO's
        </li>
        <li
          className={isActive("smart") ? "active" : ""}
          onClick={() => setActive("smart")}
        >
          Smart Contracts
        </li>
      </ul>
      <div className="container">
        {data.map((item, i) => {
          if (item.class === active) {
            return (
              <a href={item.url} target="_blank">
                <div className="item" key={i}>
                  <img src={item.img} />
                  <h3>{item.title}</h3>
                </div>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};
