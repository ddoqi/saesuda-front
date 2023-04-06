import { atom, selector } from "recoil";

// 사용자가 선택한 메뉴
export const userSelectMenuList = atom({
  key: "userSelectMenuList",
  default: [{ memberUid: 0, orderDate: "", orderState: "", orderUid: "" }],
});

// 회원가입

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const confirmPasswordState = atom({
  key: "confirmPasswordState",
  default: "",
});
