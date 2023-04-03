import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import getWholeCoffeeData from "@/api/getWholeCoffeeData";

const Main = () => {
  // useQuery를 사용해서 서버에서 data를 가져오는 작업은 했음
  const {
    isLoading,
    data: menuList,
    error,
  } = useQuery({
    queryKey: ["wholeCoffeeData"],
    queryFn: getWholeCoffeeData,
  });

  // recoil을 쓰는 이유?
  // 전역상태관리를 하려고

  if (isLoading) {
    console.log("isLoading", isLoading);
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("error", error);
    return <div>Error: {error.message}</div>;
  }

  // const postServer = () => {
  //   axios
  //     .post("/sesuda/test1", {
  //       id: "idtest123",
  //       pw: "4321",
  //       nickname: "seyoun언냐",
  //       auth: "user",
  //     })
  //     .then(function (response) {
  //       console.log("요청 성공!");
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      {/* <div>Data: {JSON.stringify(data)}</div> */}
      <div className="container py-24 mx-auto flex flex-wrap">
        <div className="flex flex-row justify-between text-left">
          <ItemCard menuList={menuList} />
          <SelectItemList />
        </div>
      </div>
    </div>
  );
};

export default Main;
