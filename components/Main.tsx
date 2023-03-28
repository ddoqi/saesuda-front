import React, { useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";
import axios from "axios";

const Main = () => {
  const [test, setTest] = useState("");

  const loadBannerSliderData = () => {
    axios({
      method: "get",
      // url: "/member/memberList",
      url: "/member/membertest1",
    })
      .then((res) => {
        console.log("res:", res.data.message);
        // console.log("res:", res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postServer = () => {
    axios
      .post("/sesuda/test1", {
        id: "idtest123",
        pw: "4321",
        nickname: "seyoun언냐",
        auth: "user",
      })
      .then(function (response) {
        console.log("요청 성공!");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
        {/* <div>세윤언냐가 나와야댐{test}</div> */}
        <button
          type="button"
          onClick={() => {
            postServer();
          }}
        >
          서버에요청날리기
        </button>
      </div>
    </div>
  );
};

export default Main;
