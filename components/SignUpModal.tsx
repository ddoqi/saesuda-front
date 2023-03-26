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
    const { email, password } = data;
    console.log("email,password", email, password);
    try {
      // await registerUser(email, password);
      // 회원가입 성공 시 처리할 코드
      console.log("data", data);
    } catch (err) {
      // 회원가입 실패 시 처리할 코드
    }
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="회원가입 모달"
        className="text-center w-[45%] bg-white p-5 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[500px] flex items-start justify-center">
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
