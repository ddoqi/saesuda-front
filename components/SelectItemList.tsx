import getWholeCoffeeData from "@/api/getWholeCoffeeData";
import { userSelectMenuList } from "@/recoil/atoms";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SelectItemList = () => {
  const [selectMenuList, setSelectMenuList] =
    useRecoilState(userSelectMenuList);

  useEffect(() => {
    console.log("selectMenuList:롸롸", selectMenuList);
  }, [selectMenuList]);

  const orderAction = () => {
    axios
      .post("/menu/order", selectMenuList)
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
      <div className="flex flex-col bg-brand100 h-full ml-[20px]">
        <div className="bg-brandbeige text-center flex flex-col">
          <h3 className="text-red-400 text-lg bold">
            선택한 Menu가 아래 보여용
          </h3>
          <div className="h-[300px] bg-brandyellow w-[300px]">
            {selectMenuList.map((item, index) => {
              if (item.selectState == true) {
                return (
                  <div key={index} className="flex flex-col items-start">
                    <div>{item.menuName}</div>
                    <div>option </div>
                    <div className="bg-white flex flex-col items-start w-[60%] ml-5">
                      {item.addMilk ? <div>우유 추가</div> : <div></div>}
                      {item.addShot ? <div>연하게</div> : <div></div>}
                      {item.addSyrup ? <div>시럽추가</div> : <div></div>}
                    </div>
                    <div>삭제</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              orderAction();
            }}
            type="button"
            className="bg-black
        text-white w-[100px] h-[50px]"
          >
            주문하러가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectItemList;
