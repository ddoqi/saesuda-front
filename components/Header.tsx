import React, { useState } from "react";
import { faBell, faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import brandLogo from "../public/images/brandLogo.png";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <Image src={brandLogo} width={250} height={150} alt="brandLogo" />
          </a>

          <nav className=" ml-auto flex flex-wrap items-center text-lg justify-center">
            {/* 마이페이지 아이콘
            <div className="mr-3 items-center flex hover:text-brand100 cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </div>
            {/* 알람 아이콘 */}
            {/* <FontAwesomeIcon
              icon={faBell}
              className="mr-3 hover:text-brand100 cursor-pointer"
            /> */}

            <div
              onClick={() => {
                location.href = "/login";
              }}
              className="mr-2  hover:text-brand100 cursor-pointer"
            >
              로그인
            </div>
            <div
              onClick={() => {
                location.href = "/admin";
              }}
              className="mr-5  hover:text-brand100 cursor-pointer"
            >
              관리자 페이지
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
