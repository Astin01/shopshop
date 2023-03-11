import "../css/App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Fruit({ data }) {
  const navigate = useNavigate();
  let fruitView = data.map((data) => {
    return (
      <div
        className="col-md-4"
        onClick={() => navigate(`/detail/${data.title}`)}
      >
        <img
          src={`img/fruit/${data.title}.jpg`}
          width="265px"
          height="200px"
          paddingTop="20px"
        />
        <h4>{data.title}</h4>
        <p>{data.price}원</p>
      </div>
    );
  });
  return <>{fruitView}</>;
}
