import { userSelectMenuList } from "@/recoil/atoms";
import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

ReactModal.setAppElement("#__next");

const OptionModal = ({ isOpen, handleClose, selectMenuData }) => {
  const [selectMenuList, setSelectMenuList] =
    useRecoilState(userSelectMenuList);
  const [addMilk, setAddMilk] = useState(false);
  const [addShot, setAddShot] = useState(false);
  const [addSyrup, setAddSyrup] = useState(false);
  const [noneSelect, setNoneSelect] = useState(true);
  const uuid = uuidv4();
  console.log("selectMenuData", selectMenuData);
  const menuUid = selectMenuData[0]["menuUid"];
  const menuName = selectMenuData[0]["menuName"];
  const menuPrice = selectMenuData[0]["menuPrice"];

  useEffect(() => {
    console.log(addMilk, addShot, addSyrup);
  }, [addMilk, addShot, addSyrup]);

  const finishDetailOrder = () => {
    const newDetailOptionData = {
      orderUid: uuid,
      menuUid,
      menuName,
      menuPrice,
      addMilk,
      addShot,
      addSyrup,
      cup: 1,
    };

    setSelectMenuList((prev) => {
      return [...prev, newDetailOptionData];
    });
    alert("선택 완료");
    console.log("selectMenuList", selectMenuList);
    setAddMilk(false);
    setAddShot(false);
    setAddSyrup(false);
    handleClose();
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="메뉴 선택 option"
        className="w-[25%] h-[35%] flex items-center justify-center bg-brandbeige rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
      >
        <div className=" bg-white p-4 w-[80%]">
          <h1 className="text-xl font-bold mb-3">상세주문 Option</h1>
          <div>
            <h3 className="text-xl text-brand100">메뉴명 : {menuName}</h3>

            <div className="flex items-stretch">
              <input
                disabled={noneSelect}
                type="checkbox"
                onChange={() => {
                  setAddMilk(!addMilk);
                }}
              />

              <div className="optionList">우유 추가 (+500) </div>
            </div>
            <div className="flex items-stretch">
              <input
                disabled={noneSelect}
                type="checkbox"
                onChange={() => {
                  setAddShot(!addShot);
                }}
              />
              <div className="optionList">샷 추가(+500)</div>
            </div>

            <div className="flex items-stretch">
              <input
                disabled={noneSelect}
                type="checkbox"
                onChange={() => {
                  setAddSyrup(!addSyrup);
                }}
              />
              <div className="optionList">시럽 추가(+500)</div>
            </div>

            <div className="flex items-stretch">
              <input
                type="checkbox"
                defaultChecked
                onChange={() => {
                  setAddMilk(false);
                  setAddShot(false);
                  setAddSyrup(false);
                  setNoneSelect(!noneSelect);
                }}
              />
              <div className="optionList">선택 안함</div>
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
        </div>
      </ReactModal>
    </div>
  );
};

export default OptionModal;
