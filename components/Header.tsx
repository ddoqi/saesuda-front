import React, { useEffect, useState } from "react";
import { faBell, faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import brandLogo from "../public/images/brandLogo.png";
import mobileLogo from "../public/images/mobileLogo.png";

import { useRecoilState } from "recoil";
import { userStateAtom } from "@/recoil/atoms";
import axios from "axios";

const Header = () => {
  const [userState, setUserState] = useRecoilState(userStateAtom);
  const [userSessionKey, setUserSessionKey] = useState({
    sessionKey: "none-key",
  });

  useEffect(() => {
    if (sessionStorage.getItem("userSessionKey")) {
      const sessionKey: any = sessionStorage.getItem("userSessionKey");
      setUserSessionKey({ sessionKey: sessionKey });
    }
  }, []);

  useEffect(() => {
    console.log("userSessionKey", userSessionKey);
  }, [userSessionKey]);

  const serverLogoutAction = () => {
    console.log("서버에보내는 request", userSessionKey);
    axios
      .post("/member/memberLogout", userSessionKey)
      .then(function (response) {
        console.log("요청 성공!");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-brand100">
        {/* 웹용 헤더 */}
        <div className="hidden lg:block">
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

            <div className=" w-[15%]  ">
              <nav className="flex flex-row items-center justify-center pt-[12%]">
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
                      serverLogoutAction();
                      sessionStorage.clear();
                      setUserState("guest");
                    }}
                    className="header-login-logout-button"
                  >
                    로그아웃
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      location.href = "/login";
                    }}
                    className="header-login-logout-button"
                  >
                    로그인
                  </div>
                )}
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
          </div>
        </div>

        {/* 모바일용 헤더 */}
        <div className="lg:hidden">
          <div className="w-full flex items-center justify-center">
            <Image
              className="m-3 object-cover max-w-[250px] max-h-[130px] rounded"
              src={mobileLogo}
              width={200}
              height={50}
              alt="mobileLogo"
            />
          </div>
          <div className="bg-mono100 max-h-[40px] h-full flex items-end justify-end pr-3">
            {userState == "loginUser" ? (
              <div
                onClick={() => {
                  serverLogoutAction();
                  sessionStorage.clear();
                  setUserState("guest");
                }}
                className="header-login-logout-button"
              >
                로그아웃
              </div>
            ) : (
              <div
                onClick={() => {
                  location.href = "/login";
                }}
                className="header-login-logout-button"
              >
                로그인
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
