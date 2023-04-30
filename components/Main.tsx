import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import SelectItemList from "./SelectItemList";
import { useQuery } from "@tanstack/react-query";
import getWholeCoffeeData from "@/api/getWholeCoffeeData";
import { useRecoilState } from "recoil";
import {
  menuListAtom,
  userSelectMenuList,
  userStateAtom,
} from "@/recoil/atoms";

const Main = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);
  const [selectMenuList, setSelectMenuList] =
    useRecoilState(userSelectMenuList);

  useEffect(() => {
    if (sessionStorage.getItem("userSessionKey")) {
      setUserState("loginUser");
      const serverUserUID = sessionStorage.getItem("serverUID");
      setSelectMenuList((prevMenuList) => {
        const newMenuList: any = [...prevMenuList];
        console.log("newMenuList:", newMenuList);
        newMenuList[0] = { memberUid: serverUserUID };
        console.log("newMenuList[0]:", newMenuList[0]);
        return newMenuList;
      });
    }
  }, []);
  useEffect(() => {
    console.log("userState:", userState);
  }, [userState]);

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
