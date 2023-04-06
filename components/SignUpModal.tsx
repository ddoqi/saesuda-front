import React from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import {
  emailState,
  passwordState,
  confirmPasswordState,
} from "../recoil/atoms";
import { emailRegex, pwRegex } from "@/utill/utill";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

ReactModal.setAppElement("#__next");

const SignUpModal = ({ isOpen, handleClose }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [confirmPassword, setConfirmPassword] =
    useRecoilState(confirmPasswordState);

  const onSubmit = async (data: any) => {
    try {
      const { email, password, confirmPassword } = data;
      console.log("input data:", email, password, confirmPassword);
      axios
        .post("/member/memberJoin", {
          id: email,
          pw: password,
          // auth: "user",
          nickname: "수민이바보",
        })
        .then(function (response) {
          console.log("요청 성공!");
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* // <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> */}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="회원가입 모달"
        className="text-center bg-white p-10 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-start justify-center">
            <div className=" m-auto space-y-4 p-10 border round rounded-md">
              <h1 className="text-2xl font-bold pb-3 text-brand100">
                회 원 가 입
              </h1>

              <div className="flex">
                <label className="w-[100px]">이메일</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: emailRegex,
                      message: "이메일 형식에 맞게 입력해주세요",
                    },
                  })}
                  id="email"
                  type="email"
                  placeholder="abc@abc.com"
                  className="p-2 border border-brand100 ml-3 rounded-md h-[40px] w-[260px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex">
                <label className="w-[100px]">비밀번호</label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: {
                      value: pwRegex,
                      message: "영문,숫자,특수기호를 포함해주세요",
                    },
                  })}
                  id="password"
                  type="password"
                  placeholder="숫자 + 영문 + 특수기호 포함"
                  className="p-2 border border-brand100 ml-3 rounded-md h-[40px] w-[260px]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex">
                <label className="w-[100px]">비밀번호 확인</label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  id="confirmPassword"
                  type="password"
                  placeholder="비밀번호 확인"
                  className="p-2 border border-brand100 ml-3 rounded-md h-[40px] w-[260px]"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="ml-3 p-3">
                <button
                  type="submit"
                  className="bg-brand100 mt-3  hover:text-black text-white py-1 px-3 rounded"
                >
                  회원가입
                </button>
                <button
                  onClick={handleClose}
                  type="button"
                  className="ml-1 mt-3 border border-gray-400 hover:text-brand100 text-black font-bold py-1 px-3 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default SignUpModal;
