import React, { useEffect, useState } from "react";
import Image from "next/image";
import menu1 from "../public/images/menu1.png";
import menu2 from "../public/images/menu2.png";
import menu3 from "../public/images/menu3.png";
import { useRecoilState } from "recoil";
import { menu1Atom, menu2Atom, menu3Atom } from "@/recoil/atoms";
import OptionModal from "./OptionModal";

const ItemCard = ({ menuList }) => {
  const [menu1Checked, setMenu1Checked] = useRecoilState(menu1Atom);
  const [menu2Checked, setMenu2Checked] = useRecoilState(menu2Atom);
  const [menu3Checked, setMenu3Checked] = useRecoilState(menu3Atom);

  // 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <OptionModal isOpen={modalIsOpen} handleClose={handleModalClose} />
      {menuList.map((item) => {
        return (
          <div>
            <div className="w-[600px] ml-5 p-3 flex place-items-center border border-brandpink">
              <input
                type="checkbox"
                onChange={() => {
                  setMenu1Checked(!menu1Checked);
                }}
              />
              <div className="m-3">
                <Image
                  src={menu1}
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
                        setModalIsOpen(true);
                      }}
                      className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow"
                    >
                      상세 Option
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
