import React, { useState, useEffect } from "react";
import "./Order.css";
import logo from "../logo.svg";

function Order() {
  const [orders, setOrders] = useState([]);
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
    .then((data) => setOrders(data))
    .catch((error) => console.error("Fetch error:", error));

  return (
    <div className="container">
      <h2 id="order">Order Again?</h2>
      <div className="orders">
        <div className="box">
          <div className="order-details">
            <img src={logo} alt="" />
            <div className="info">
              <h3>KFC</h3>
              <p>I'm Lovin it</p>
            </div>
          </div>
          <div className="icon flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="box">
          <div className="order-details">
            <img src={logo} alt="" />
            <div className="info">
              <h3>KFC</h3>
              <p>I'm Lovin it</p>
            </div>
          </div>
          <div className="icon flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="box">
          <div className="order-details">
            <img src={logo} alt="" />
            <div className="info">
              <h3>KFC</h3>
              <p>I'm Lovin it</p>
            </div>
          </div>
          <div className="icon flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
