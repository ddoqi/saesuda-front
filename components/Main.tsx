import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";
import { useQuery } from "@tanstack/react-query";
import getWholeCoffeeData from "@/api/getWholeCoffeeData";
import { useRecoilState } from "recoil";
import { menuListAtom, userStateAtom } from "@/recoil/atoms";

const Main = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  useEffect(() => {
    if (sessionStorage.getItem("userSessionKey")) {
      setUserState("loginUser");
    }
  }, []);
  useEffect(() => {
    console.log("userState:", userState);
  }, [userState]);

  // useQuery를 사용해서 서버에서 data를 가져오는 작업은 했음
  const {
    isLoading,
    data: menuList,
    error,
  } = useQuery({
    queryKey: ["wholeCoffeeData"],
    queryFn: getWholeCoffeeData,
  });

  const [wholeMenuList, setWholeMenuList] = useRecoilState(menuListAtom);

  if (isLoading) {
    console.log("isLoading", isLoading);
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("error", error);
    return <div>Error:에러다</div>;
  }

  if (menuList) {
    setWholeMenuList(menuList);
    console.log("selectMenuList:", wholeMenuList);
  }

  return (
    <div>
      <div className="bg-brandbeige w-full p-10">
        <div className="lg:flex flex-row justify-between">
          {/*  ItemCard: w-60% */}
          {/*  SelectItemList: w-40% */}
          <ItemCard menuList={menuList} />
          <SelectItemList />
        </div>
      </div>
    </div>
  );
};

export default Main;
