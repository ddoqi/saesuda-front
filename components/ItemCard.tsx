import React, { useEffect, useState } from "react";
import Image from "next/image";
import menu1 from "../public/images/menu1.png";

import { useRecoilState } from "recoil";
import OptionModal from "./OptionModal";
import { userSelectMenuList } from "@/recoil/atoms";
import { photoURL } from "@/api/common";

const ItemCard = ({ menuList }) => {
  // 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectMenuUID, setSelectMenuUID] = useState("1");
  const [selectMenuTitle, setSelectMenuTitle] = useState("아이스 아메리카노");
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div>
        <h3>메뉴를 선택하면 주문서에 추가됩니다.</h3>
      </div>
      <OptionModal
        menuUid={selectMenuUID}
        isOpen={modalIsOpen}
        handleClose={handleModalClose}
        selectMenuTitle={selectMenuTitle}
      />
      {menuList.map((item, index) => {
        const menuUid = item.menuUid;
        const menuTitle = item.menuName;
        console.log(menuUid);
        return (
          <div key={index}>
            {selectMenuUID}
            <div className="w-[600px] ml-5 p-3 flex place-items-center border border-brandpink">
              <div className="m-3">
                <Image
                  src={photoURL + item.menuPicture}
                  loader={({ src }) => src}
                  width={130}
                  height={100}
                  alt="메뉴 사진입니다. "
                />
              </div>
              <div className="flex flex-col items-start ml-3">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    {item.menuName}
                  </h2>
                  <p className="leading-relaxed text-base">{item.menuInfo}</p>
                  <div className="flex flex-col">
                    <div
                      onClick={() => {
                        setSelectMenuUID(menuUid);
                        setSelectMenuTitle(menuTitle);
                        setModalIsOpen(true);
                      }}
                      className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow"
                    >
                      선택하기
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
