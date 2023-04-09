import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  const [wholeOrderData, setWholeOrderData] = useState([]);

  const getWholeDataInAdmin = async () => {
    try {
      axios
        .post("/admin/orderList", {
          memberUid: 0,
        })
        .then(function (response) {
          console.log("요청 성공!");
          console.log("response", response);
          console.log("data어떻게와", response.data.data);
          setWholeOrderData(response.data.data);
        });
    } catch (error) {
      alert("에러났다능!! 관리자 문의하라능!!!");
      console.log(error);
    }
  };

  // const {
  //   data: wholeOrderData,
  //   isLoading,
  //   error,
  // } = useQuery(["wholeOrderData"], getWholeDataInAdmin);

  // console.log(wholeOrderDatas);

  const changeOrderState = async (orderUID, requestURL) => {
    try {
      axios
        .post(requestURL, {
          orderUid: orderUID,
        })
        .then(function (response) {
          console.log("요청 성공!");
          console.log("response", response);
        });
    } catch (error) {
      alert("에러났다능!! 관리자 문의하라능!!!");
      console.log(error);
    }
  };

  useEffect(() => {
    const adminCheck = sessionStorage.getItem("loginState");
    if (adminCheck == "admin") {
      console.log("어서오세연");
      getWholeDataInAdmin();
    } else {
      alert("관리자가 아닙니다. 로그인 후 이용해주세요");
      location.href = "/login";
    }
  }, []);

  useEffect(() => {
    console.log(
      wholeOrderData?.map((item) => {
        console.log(item.orderUid);
        console.log(
          item.orderList.map((item) => {
            console.log("item", item.menuName);
          })
        );
      })
    );
  }, [wholeOrderData]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              관리자 페이지
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              실시간으로 주문 데이터 받아와서 아래 뿌려주꼬에용 뿌뿌
            </p>
          </div>
          {wholeOrderData?.map((item) => {
            return (
              <div>
                <div>오더아이디:{item.orderUid}</div>
                <div className="flex">
                  <div>주문상태 : </div>
                  <div className="ml-2">
                    {item.orderList[0].orderState === 1 && <div>주문요청</div>}
                    {item.orderList[0].orderState === 2 && <div>주문수락</div>}
                    {item.orderList[0].orderState === 3 && <div>조리완료</div>}
                    {item.orderList[0].orderState === 4 && <div>주문취소</div>}
                  </div>
                </div>

                {/* 테이블 컬럼 */}
                <tr className="admin-page-table-title">
                  <td>주문자 id</td>
                  <td className="w-[30%]">메뉴명</td>
                  <td>우유 추가</td>
                  <td>샷 추가</td>
                  <td>시럽 추가</td>
                </tr>

                {/* 개인 데이터 뿌려주는 div */}
                <div>
                  {item.orderList.map((item) => {
                    return (
                      <div>
                        <div>
                          <table className="admin-page-order-table">
                            <tr className="">
                              <td>{item.memberUid}</td>
                              <td className="">{item.menuName}</td>
                              <td className="">
                                {item.addMilk ? <div>o</div> : <div>x</div>}
                              </td>
                              <td className="">
                                {item.addShot ? <div>o</div> : <div>x</div>}
                              </td>
                              <td className="">
                                {item.addSyrup ? <div>o</div> : <div>x</div>}
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 주문관련 버튼 div */}
                <div className="admin-order-state-button-container">
                  <button
                    type="button"
                    className="admin-order-state-button"
                    onClick={() => {
                      const orderUID = item.orderUid;
                      const requestURL = "/admin/orderAccept";
                      changeOrderState(orderUID, requestURL);
                      location.reload();
                    }}
                  >
                    주문수락
                  </button>
                  <button
                    className="admin-order-state-button"
                    onClick={() => {
                      const orderUID = item.orderUid;
                      const requestURL = "/admin/orderFinish";
                      changeOrderState(orderUID, requestURL);
                      location.reload();
                    }}
                    type="button"
                  >
                    조리완료
                  </button>
                  <button
                    className="admin-order-state-button"
                    onClick={() => {
                      const orderUID = item.orderUid;
                      const requestURL = "/admin/orderCancel";
                      changeOrderState(orderUID, requestURL);
                      location.reload();
                    }}
                    type="button"
                  >
                    주문취소
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default index;
