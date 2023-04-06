import { userSelectMenuList } from "@/recoil/atoms";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SelectItemList = () => {
  const [selectMenuList, setSelectMenuList] =
    useRecoilState(userSelectMenuList);

  useEffect(() => {
    console.log("selectMenuList:롸롸", selectMenuList);
  }, [selectMenuList]);

  const handleCupChange = (index: number, amount: number) => {
    setSelectMenuList((prevList) => {
      // 먼저 복사를 한 다음
      const updatedList = [...prevList];
      // orderUid가 일치하는 index를 찾아낸다.
      const targetIndex = updatedList.findIndex(
        (item) => item.orderUid === selectMenuList[index].orderUid
      );

      if (targetIndex !== -1) {
        updatedList[targetIndex] = {
          ...updatedList[targetIndex],
          cup: updatedList[targetIndex].cup + amount,
        };
      }
      return updatedList;
    });
  };

  const deleteSelectMenu = (orderUid) => {
    setSelectMenuList((prevList) => {
      // orderUid가 일치하는 index를 찾아낸다.
      const targetIndex = prevList.findIndex(
        (item) => item.orderUid === orderUid
      );

      if (targetIndex !== -1) {
        // 복사된 리스트에서 해당 아이템을 제외한 새로운 리스트를 만든다.
        const updatedList = [
          ...prevList.slice(0, targetIndex),
          ...prevList.slice(targetIndex + 1),
        ];
        return updatedList;
      }
      return prevList;
    });
  };

  const orderAction = () => {
    console.log("menuList", selectMenuList);
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
              const orderUid = item.orderUid;
              if (item.orderUid) {
                return (
                  <div key={index} className="flex flex-col items-start">
                    <div>{item.menuName}</div>
                    <div>option </div>
                    <div className="bg-white flex flex-col items-start w-[60%] ml-5">
                      {item.addMilk ? <div>우유 추가</div> : <div></div>}
                      {item.addShot ? <div>연하게</div> : <div></div>}
                      {item.addSyrup ? <div>시럽추가</div> : <div></div>}
                    </div>
                    <div
                      className="bg-brand100"
                      onClick={() => {
                        deleteSelectMenu(orderUid);
                      }}
                    >
                      삭제
                    </div>
                    <div className="bg-brand100 flex">
                      <button
                        onClick={() => handleCupChange(index, 1)}
                        type="button"
                        className="w-[30px]"
                      >
                        +
                      </button>
                      <div className="bg-white w-[30px]">{item.cup}</div>
                      <button
                        type="button"
                        onClick={() => handleCupChange(index, -1)}
                        className="bg-brand100 w-[30px]"
                      >
                        -
                      </button>
                    </div>
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
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectItemList;
