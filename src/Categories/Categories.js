import React, { useState, useEffect } from "react";
import myImg from "../imgs/productImg_1698831244944.png";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const apiUrl =
    "https://devapi.baladiexpress.com/v4/stores/detail/1?latitude=25.3185782&longitude=51.5003526"; // Replace with your API URL
  const apiKey = "baladi_dev_pX2Rldl9LSFlVSVM3TDN4YTA3ZHNmZ2R5V0E4ZE1S";

  // Categories

  fetch(apiUrl, {
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => setCategories(data))
    .catch((error) => console.error("Fetch error:", error));
  // console.log(categories.categories);
  // console.log(categories.categories[0].image_gif);
  // console.log(categories.categories[0]);

  // Kingdoms
  // @Kingdoms##100@a

  return (
    <>
      <div className="container">
        <h2 id="categories">Categories</h2>
        <div className="categories">
          <div className="category">
            <img src={myImg} alt="" />
            <span>Carrot</span>
          </div>
          <div className="category">
            <img src={require("../imgs/1.png")} alt="" />
            <span>Beans</span>
          </div>
          <div className="category">
            <img src={require("../imgs/2.jpeg")} alt="" />
            <span>Zucchini</span>
          </div>
          <div className="category">
            <img src={require("../imgs/16.png")} alt="" />
            <span>Eggplant</span>
          </div>
          <div className="category">
            <img src={require("../imgs/17.jpeg")} alt="" />
            <span>Uganda</span>
          </div>
          <div className="category">
            <img src={require("../imgs/5.jpeg")} alt="" />
            <span>Onion</span>
          </div>
          <div className="category">
            <img src={require("../imgs/6.jpeg")} alt="" />
            <span>Eggplant</span>
          </div>
          <div className="category">
            <img src={require("../imgs/7.png")} alt="" />
            <span>Lemon</span>
          </div>
          <div className="category">
            <img src={require("../imgs/8.jpeg")} alt="" />
            <span>Zucchini</span>
          </div>
          <div className="category">
            <img src={require("../imgs/9.jpeg")} alt="" />
            <span>Almond</span>
          </div>
          <div className="category">
            <img src={require("../imgs/10.jpeg")} alt="" />
            <span>Tomato</span>
          </div>
          <div className="category">
            <img src={require("../imgs/11.jpeg")} alt="" />
            <span>Union</span>
          </div>
          <div className="category">
            <img src={require("../imgs/12.jpeg")} alt="" />
            <span>Capsicum</span>
          </div>
          <div className="category">
            <img src={require("../imgs/13.jpeg")} alt="" />
            <span>Butternut</span>
          </div>
          <div className="category">
            <img src={require("../imgs/14.jpeg")} alt="" />
            <span>Govar</span>
          </div>
          <div className="category">
            <img src={require("../imgs/15.png")} alt="" />
            <span>Bitter</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
