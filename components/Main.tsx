import React, { useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";
import axios from "axios";

const Main = () => {
  const connectFuc = async () => {
    // const result = await fetch("https://hamseyoun.github.io/sesudatest");
    // console.log("result:", result);
    // const data = await result.json();
    // console.log("data", data);

    const result = axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("result", result);
  };

  const loadBannerSliderData = () => {
    axios({
      method: "get",
      url: "/",
    })
      .then((res) => {
        console.log("res:", res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container py-24 mx-auto flex flex-wrap">
        <div className="flex flex-row justify-between text-left">
          <ItemCard />
          <SelectItemList />
        </div>
        <button
          onClick={() => {
            loadBannerSliderData();
          }}
          type="button"
          className="bg-brand100 text-white"
        >
          언냐 연결해죵
        </button>
      </div>
    </div>
  );
};

export default Main;
