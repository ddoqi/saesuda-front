import {
  menuListAtom,
  userSelectMenuList,
  userStateAtom,
} from "@/recoil/atoms";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SelectItemList = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const [selectMenuList, setSelectMenuList] =
    useRecoilState(userSelectMenuList);

  const [totalPrice, setTotalPrice] = useState("0");

  // const totalPrice = () => {
  //   console.log("selectMenuList", selectMenuList);
  //   const totalPrice = [];
  //   selectMenuList.map((item) => {
  //     if (item.frontOrderUid) {
  //       let itemPrice = 0;
  //       console.log(item.menuPrice);
  //       itemPrice += item.menuPrice;
  //       if (item.addMilk) {
  //         itemPrice += 500;
  //       }
  //       if (item.addShot) {
  //         itemPrice += 500;
  //       }
  //       if (item.addSyrup) {
  //         itemPrice += 500;
  //       }
  //       console.log("itemPrice:", itemPrice);
  //       if (item.cup >= 2) {
  //         itemPrice = itemPrice * item.cup;
  //       }
  //       console.log("itemPrice:", itemPrice);
  //       totalPrice.push(itemPrice);
  //     }
  //   });
  //   console.log("totalPrice", totalPrice);
  // };

  const getTotalPrice = () => {
    const totalPrice = selectMenuList.reduce((acc: any, item: any) => {
      console.log("acc:", acc);

      if (item.frontOrderUid) {
        let itemPrice = item.menuPrice;

        if (item.addMilk) {
          itemPrice += 500;
        }
        if (item.addShot) {
          itemPrice += 500;
        }
        if (item.addSyrup) {
          itemPrice += 500;
        }
        if (item.cup >= 2) {
          itemPrice = itemPrice * item.cup;
        }

        return acc + itemPrice;
      } else {
        return acc;
      }
    }, 0);

    console.log("totalPrice", totalPrice);
    return totalPrice;
  };

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [selectMenuList]);

  const handleCupChange = (index: number, amount: number) => {
    setSelectMenuList((prevList: any) => {
      // 먼저 복사를 한 다음
      const updatedList = [...prevList];
      // frontOrderUid가 일치하는 index를 찾아낸다.
      const targetIndex = updatedList.findIndex(
        (item) => item.frontOrderUid === selectMenuList[index].frontOrderUid
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

  const deleteSelectMenu = (frontOrderUid: any) => {
    setSelectMenuList((prevList) => {
      // frontOrderUid가 일치하는 index를 찾아낸다.
      const targetIndex = prevList.findIndex(
        (item) => item.frontOrderUid === frontOrderUid
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
    console.log("서버에 보내는 데이터 :", selectMenuList);
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

  useEffect(() => {
    console.log("유저아이디변경되냐", selectMenuList);
  }, [selectMenuList]);

  return (
    <div className="lg:w-[40%] lg:mt-0 mt-4">
      <div className="flex flex-col rounded-lg p-3 bg-brand100 h-full lg:ml-[20px]">
        <div className="bg-white bg-opacity-90 m-3 p-3 rounded-lg text-center flex flex-col items-center justify-center">
          <h3 className=" text-2xl text-brandbeige rounded-2xl bold mt-5 p-3 bg-brand100">
            주문 상세
          </h3>
          <div className=" bg-brand100 bg-opacity-70 w-full m-5">
            {selectMenuList.map((item: any, index: any) => {
              const frontOrderUid = item.frontOrderUid;
              if (item.frontOrderUid) {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start m-3 bg-white p-3 rounded-lg text-xl"
                  >
                    <h3 className=" font-bold">
                      메뉴명 : {item.menuName} (+{item.menuPrice})
                    </h3>
                    <h3>option </h3>
                    <div className="bg-white flex flex-col items-start w-[60%] ml-5">
                      {item.addMilk ? (
                        <div>ㄴ우유 추가 (+500) </div>
                      ) : (
                        <div></div>
                      )}
                      {item.addShot ? <div>ㄴ샷 추가 (+500)</div> : <div></div>}
                      {item.addSyrup ? (
                        <div>ㄴ시럽추가 (+500)</div>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    {/* 삭제, 수량변경 버튼 */}
                    <div className="flex mt-2 ">
                      {/* 수량버튼 */}
                      <div className="flex border border-brandpink80">
                        <button
                          onClick={() => handleCupChange(index, 1)}
                          type="button"
                          className="w-[30px] border-[2px] border-brandpink80"
                        >
                          +
                        </button>
                        <div className="bg-white w-[30px]">{item.cup}</div>
                        <button
                          type="button"
                          onClick={() => handleCupChange(index, -1)}
                          className="border-[2px] border-brandpink80  w-[30px]"
                        >
                          -
                        </button>
                      </div>
                      {/* 삭제버튼 */}
                      <button
                        type="button"
                        className="bg-brandpink80 ml-2 p-1"
                        onClick={() => {
                          deleteSelectMenu(frontOrderUid);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                );
              }
            })}
            <div>
              <h3 className="text-xl flex items-end justify-end m-3">
                TOTAL : {totalPrice}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          {userState == "guest" ? (
            <div className="text-2xl text-white bg-brandpink px-3">
              🥹 로그인을 먼저 진행해주라능 🥹
            </div>
          ) : (
            <button
              onClick={() => {
                orderAction();
              }}
              type="button"
              className="bg-brandpink80
            text-xl
            rounded-md
        text-mono100 w-[100px] h-[50px]"
            >
              주문하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectItemList;
