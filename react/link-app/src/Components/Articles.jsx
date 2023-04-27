import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Articles = () => {
  return (
    <div>
      <h2>포트폴리오 목록</h2>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">포트폴리오 1</Link>
        </li>
        <li>
          <Link to="/articles/2">포트폴리오 2</Link>
        </li>
        <li>
          <Link to="/articles/3">포트폴리오 3</Link>
        </li>
      </ul>
    </div>
  );
};
