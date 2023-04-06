import React, { useState } from "react";
import { faBell, faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import brandLogo from "../public/images/brandLogo.png";
import { useRecoilState } from "recoil";
import { userStateAtom } from "@/recoil/atoms";

const Header = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  return (
    <div>
      <header className="text-gray-600 body-font bg-brand100">
        <div className="flex">
          <a className="flex title-font font-medium items-center justify-center w-[85%]">
            <Image
              className="ml-[25%] m-3 object-cover w-[250px] h-[70px] rounded"
              src={brandLogo}
              width={200}
              height={50}
              alt="brandLogo"
            />
          </a>

          <nav className="text-white ml-auto flex flex-wrap items-center text-xl justify-center">
            {/* 마이페이지 아이콘
            <div className="mr-3 items-center flex hover:text-brand100 cursor-pointer">
              <FontAwesomeIcon icon={faUser} />
            </div>
            {/* 알람 아이콘 */}
            {/* <FontAwesomeIcon
              icon={faBell}
              className="mr-3 hover:text-brand100 cursor-pointer"
            /> */}

            {userState == "loginUser" ? (
              <div
                onClick={() => {
                  sessionStorage.clear();
                  setUserState("guest");
                }}
                className="mr-2  hover:text-brandyellow cursor-pointer"
              >
                로그아웃
              </div>
            ) : (
              <div
                onClick={() => {
                  location.href = "/login";
                }}
                className="mr-2  hover:text-brandyellow cursor-pointer"
              >
                로그인
              </div>
            )}

            {/* <div
              onClick={() => {
                location.href = "/login";
              }}
              className="mr-2  hover:text-brand100 cursor-pointer"
            >
              로그인
            </div> */}
            <div
              onClick={() => {
                location.href = "/admin";
              }}
              className="mr-5  hover:text-brandyellow cursor-pointer"
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
