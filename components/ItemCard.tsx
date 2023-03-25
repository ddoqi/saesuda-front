import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import menu1 from "../public/images/menu1.png";
import menu2 from "../public/images/menu2.png";
import menu3 from "../public/images/menu3.png";
import { useRecoilState } from "recoil";
import { menu1Atom, menu2Atom, menu3Atom } from "@/recoil/atoms";
import Modal from "./Modal";

const ItemCard = () => {
  const [menu1Checked, setMenu1Checked] = useRecoilState(menu1Atom);
  const [menu2Checked, setMenu2Checked] = useRecoilState(menu2Atom);
  const [menu3Checked, setMenu3Checked] = useRecoilState(menu3Atom);

  useEffect(() => {
    console.log("menu1Checked:", menu1Checked);
  }, [menu1Checked]);

  // 모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <Modal isOpen={modalIsOpen} handleClose={handleModalClose} />
      {/* item1 */}
      <div className="w-[600px] ml-5 p-3 flex place-items-center border border-brandpink">
        <input
          type="checkbox"
          onChange={() => {
            setMenu1Checked(!menu1Checked);
          }}
        />
        <div className="m-3">
          <Image src={menu1} width={130} height={100} alt="메뉴 사진입니다. " />
        </div>
        <div className="flex flex-col items-start ml-3">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              메뉴명1
            </h2>
            <p className="leading-relaxed text-base">메뉴 설명 블라블라</p>
            <div className="flex flex-col">
              <div
                onClick={() => {
                  setModalIsOpen(true);
                }}
                className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow"
              >
                상세 Option
              </div>
              <div className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow">
                장바구니 담기
                <FontAwesomeIcon icon={faCartShopping} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* item2  */}
      <div className="w-[600px] ml-5 p-3 flex place-items-center border border-brandpink">
        <input
          type="checkbox"
          onChange={() => {
            setMenu2Checked(!menu2Checked);
          }}
        />
        <div className="m-3">
          <Image src={menu2} width={130} height={100} alt="메뉴 사진입니다. " />
        </div>
        <div className="flex flex-col items-start ml-3">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              메뉴명2
            </h2>
            <p className="leading-relaxed text-base">메뉴 설명 블라블라</p>
            <div className="flex flex-col">
              <div
                onClick={() => {
                  setModalIsOpen(true);
                }}
                className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow"
              >
                상세 Option
              </div>
              <div className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow">
                장바구니 담기
                <FontAwesomeIcon icon={faCartShopping} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* item3 */}
      <div className="w-[600px] ml-5 p-3 flex place-items-center border border-brandpink">
        <input
          type="checkbox"
          onChange={() => {
            setMenu3Checked(!menu3Checked);
          }}
        />
        <div className="m-3">
          <Image src={menu3} width={130} height={100} alt="메뉴 사진입니다. " />
        </div>
        <div className="flex flex-col items-start ml-3">
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              메뉴명3
            </h2>
            <p className="leading-relaxed text-base">메뉴 설명 블라블라</p>
            <div className="flex flex-col">
              <div
                onClick={() => {
                  setModalIsOpen(true);
                }}
                className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow"
              >
                상세 Option
              </div>
              <div className="mt-3 text-brand100 inline-flex items-center cursor-pointer hover:text-brandyellow">
                장바구니 담기
                <FontAwesomeIcon icon={faCartShopping} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
