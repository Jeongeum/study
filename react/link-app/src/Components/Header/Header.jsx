import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Header = () => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">홈</Link>
        </h1>
        <ul>
          <li>
            <Link to="/about">about me</Link>
          </li>
          <li>
            <Link to="/record">이력</Link>
          </li>
          <li>
            <Link to="/articles">포트폴리오</Link>
          </li>
        </ul>
      </header>
    </>
  );
};
