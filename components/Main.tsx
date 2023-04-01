import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import getWholeCoffeeData from "@/api/getWholeCoffeeData";

const Main = () => {
  const [menuList, setMenuList] = useState([]);

  // useQuery를 사용해서 서버에서 data를 가져오는 작업은 했음
  const { isLoading, data, error } = useQuery({
    queryKey: ["wholeCoffeeData"],
    queryFn: getWholeCoffeeData,
  });

  // recoil을 쓰는 이유?
  // 전역상태관리를 하려고

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  useEffect(() => {
    console.log("data:", data);
  }, []);

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
      {/* <div>Data: {JSON.stringify(data)}</div> */}
      <div className="container py-24 mx-auto flex flex-wrap">
        <div className="flex flex-row justify-between text-left">
          <ItemCard menuList={menuList} />
          <SelectItemList />
        </div>
        {/* <button
          onClick={() => {
            loadBannerSliderData();
          }}
          type="button"
          className="bg-brand100 text-white"
        >
          언냐 연결해죵
        </button>
        <button
          type="button"
          onClick={() => {
            postServer();
          }}
        >
          서버에요청날리기
        </button> */}
      </div>
    </div>
  );
};

export default Main;
