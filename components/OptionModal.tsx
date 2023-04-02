import { userSelectMenuList } from "@/recoil/atoms";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";

ReactModal.setAppElement("#__next");

const OptionModal = ({ isOpen, handleClose }) => {
  const [selectMenuList, setSelectMenuList] =
    useRecoilState(userSelectMenuList);
  const [addMilk, setAddMilk] = useState(false);
  const [addShot, setAddShot] = useState(false);
  const [addSyrup, setAddSyrup] = useState(false);
  // menuUid랑 userId는 props로 받아오자
  const menuUid = 0;

  useEffect(() => {
    console.log("selectMenuList", selectMenuList);
    const menu = selectMenuList.find((item) => item.menuUid === menuUid);
    if (menu?.addMilk == true) {
      console.log("addmilk", menu?.addMilk);
      setAddMilk(menu?.addMilk);
    }
    if (menu?.addShot == true) {
      console.log("addShot", menu?.addShot);
      setAddShot(menu?.addShot);
    }
    if (menu?.addSyrup == true) {
      console.log("addSyrup", menu?.addSyrup);
      setAddSyrup(menu?.addSyrup);
    }
  }, []);

  useEffect(() => {
    console.log(addMilk, addShot, addSyrup);
  }, [addMilk, addShot, addSyrup]);

  const finishDetailOrder = () => {
    const newDetailOptionData = {
      addMilk,
      addShot,
      addSyrup,
      selectState: true,
    };
    setSelectMenuList((prev) => {
      return prev.map((item) => {
        if (item.menuUid === menuUid) {
          return { ...item, ...newDetailOptionData };
        }
        return item;
      });
    });
    alert("선택 완료");
    handleClose();
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="메뉴 선택 option"
        className="w-[300px] bg-white p-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
      >
        <h1 className="text-xl font-bold mb-3">상세주문 Option</h1>
        <div>
          <div className="flex items-stretch">
            <input
              type="checkbox"
              checked={addMilk ? true : false}
              onChange={() => {
                setAddMilk(!addMilk);
              }}
            />

            <div className="ml-1">우유 추가 (+500) </div>
          </div>
          <div className="flex items-stretch">
            <input
              type="checkbox"
              checked={addShot ? true : false}
              onChange={() => {
                setAddShot(!addShot);
              }}
            />
            <div className="ml-1">연하게 (기본 2샷 - 연하게 1샷)</div>
          </div>
          <div className="flex items-stretch">
            <input
              type="checkbox"
              checked={addSyrup ? true : false}
              onChange={() => {
                setAddSyrup(!addSyrup);
              }}
            />
            <div className="ml-1">시럽 추가(+500)</div>
          </div>
        </div>
        <button
          type="button"
          className="mt-3 border border-black hover:text-brand100 text-black font-bold py-1 px-3 rounded"
          onClick={() => {
            finishDetailOrder();
          }}
        >
          주문완료
        </button>
        <button
          onClick={handleClose}
          type="button"
          className="ml-1 mt-3 border border-black hover:text-brand100 text-black font-bold py-1 px-3 rounded"
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default OptionModal;
