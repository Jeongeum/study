import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <p>Article {id}</p>
    </div>
  );
};
