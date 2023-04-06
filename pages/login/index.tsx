import SignUpModal from "@/components/SignUpModal";
import Image from "next/image";
import React, { useState } from "react";
import loginSample from "../../public/images/loginSample.png";
import axios from "axios";

const index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const loginAction = () => {
    try {
      axios
        .post("/member/memberLogin", {
          id: email,
          pw,
        })
        .then(function (response) {
          console.log("요청 성공!");
          console.log(response);
          console.log(response.data.message);
          console.log(response.data.data.sessionKey);

          if (response.data.message == "login success") {
            const sessionKey = response.data.data.sessionKey;
            alert("로그인 성공~~");
            sessionStorage.setItem("userSessionKey", sessionKey);
            location.href = "/";
          }
        });
    } catch (error) {
      alert("에러났다능!! 관리자 문의하라능!!!");
      console.log(error);
    }
  };

  return (
    <div>
      <SignUpModal isOpen={modalIsOpen} handleClose={handleModalClose} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div>스르륵 라이브러리 띄울까영?</div>
            <Image
              src={loginSample}
              alt="로그인 페이지 이미지"
              width={800}
              height={300}
            />
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">PW</label>
              <input
                onChange={(e) => {
                  setPW(e.target.value);
                }}
                type="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() => {
                loginAction();
              }}
              className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              로그인하기
            </button>

            <button
              type="button"
              onClick={() => {
                setModalIsOpen(true);
              }}
              className="text-md text-gray-500 mt-2"
            >
              회원가입하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
