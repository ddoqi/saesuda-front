import React, { useEffect, useState } from "react";
import Image from "next/image";
import menu1 from "../public/images/menu1.png";

import { useRecoilState } from "recoil";
import OptionModal from "./OptionModal";
import {
  menuListAtom,
  userSelectMenuList,
  userStateAtom,
} from "@/recoil/atoms";
import { photoURL } from "@/api/common";

const ItemCard = ({ menuList }: any) => {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  // 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectMenuUID, setSelectMenuUID] = useState("1");
  const [selectMenuData, setSelectMenuData] = useState([
    { menuUid: 1, menuName: "아이스아메리카노", menuPrice: 4000 },
  ]);
  const [selectMenuTitle, setSelectMenuTitle] = useState("아이스 아메리카노");
  const [wholeMenuList, setWholeMenuList] = useRecoilState(menuListAtom);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  // 해당 메뉴uid와 일치하는 값만 추출한 것
  useEffect(() => {
    const filteredMenu = wholeMenuList.filter(
      (menu: any) => menu.menuUid === selectMenuUID
    );

    setSelectMenuData(
      filteredMenu.length > 0
        ? filteredMenu
        : [
            {
              menuUid: 1,
              menuName: "아이스아메리카노",
              menuPrice: 4000,
            },
          ]
    );
  }, [selectMenuUID, wholeMenuList]);

  return (
    <div className="flex flex-col lg:w-[60%] bg-brandpink80 rounded-2xl  p-10">
      <h3 className="text-xl pl-5 pb-5 text-mono100 ">
        메뉴를 선택하면 주문서에 추가됩니다.
      </h3>
      <OptionModal
        isOpen={modalIsOpen}
        handleClose={handleModalClose}
        selectMenuData={selectMenuData}
      />
      {menuList.map((item: any, index: any) => {
        const menuUid = item.menuUid;
        const menuTitle = item.menuName;
        return (
          <div key={index}>
            <div className="ml-5 p-3 lg:flex place-items-center bg-brand100 bg-opacity-90 rounded-lg  m-2">
              <div className="m-3">
                <Image
                  className="md:w-[130px] md:h-[130px] w-full"
                  src={photoURL + item.menuPicture}
                  loader={({ src }) => src}
                  width={130}
                  height={100}
                  alt="메뉴 사진입니다. "
                />
              </div>
              <div className="flex flex-col items-start ml-3">
                <div className="flex-grow">
                  <h2 className="menuName">{item.menuName}</h2>
                  <p className="menuInfo">{item.menuInfo}</p>

                  <button
                    type="button"
                    onClick={() => {
                      if (userState == "guest") {
                        alert("로그인을 먼저 진행해주세용");
                        return;
                      }
                      setSelectMenuUID(menuUid);
                      setSelectMenuTitle(menuTitle);
                      setModalIsOpen(true);
                    }}
                    className="menuOption"
                  >
                    선택하기
                  </button>
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
