import React, { useState } from "react";
import { faBell, faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <FontAwesomeIcon
              icon={faCoffee}
              className="text-[30px] text-brand100 "
            />
            <span className="ml-3 text-xl">SaeSuDa</span>
          </a>

          <nav className=" ml-auto flex flex-wrap items-center text-lg justify-center">
            <div className="mr-3 items-center flex hover:text-brand100 cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </div>
            {/* 알람 아이콘 */}
            <FontAwesomeIcon
              icon={faBell}
              className="mr-3 hover:text-brand100 cursor-pointer"
            />
            <div
              onClick={() => {
                location.href = "/login";
              }}
              className="mr-2  hover:text-brand100 cursor-pointer"
            >
              Login
            </div>
            <div
              onClick={() => {
                location.href = "/admin";
              }}
              className="mr-5  hover:text-brand100 cursor-pointer"
            >
              관리자페이지
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
